from ortools.constraint_solver import routing_enums_pb2
from ortools.constraint_solver import pywrapcp
from gmap_distance import run_gmap_distance
import sys


def create_data_model():
    """Stores the data for the problem."""
    data = {}
    data['distance_matrix'], locations = run_gmap_distance()
    data['num_vehicles'] = 4
    data['depot'] = 0
    print("Warehouse depot is:= {}\n\n".format(locations[0]))
    return data, locations


def print_solution(data, manager, routing, solution, location_list):
    """Prints solution on console."""
    # print(f'Objective: {solution.ObjectiveValue()}')
    max_route_distance = 0
    total_route_distance = 0
    for vehicle_id in range(data['num_vehicles']):
        index = routing.Start(vehicle_id)
        plan_output = 'Route for Truck {}:\n'.format(vehicle_id)
        route_distance = 0
        while not routing.IsEnd(index):
            plan_output += '{} -> '.format(location_list[manager.IndexToNode(index)])
            previous_index = index
            index = solution.Value(routing.NextVar(index))
            route_distance += routing.GetArcCostForVehicle(
                previous_index, index, vehicle_id)
        plan_output += '{}\n'.format(location_list[manager.IndexToNode(index)])
        plan_output += 'Distance of the route by Truck {} := {}m\n'.format(vehicle_id, route_distance)
        total_route_distance += route_distance
        print(plan_output)
        max_route_distance = max(route_distance, max_route_distance)
    # print('Maximum of the route distances: {} KM'.format(max_route_distance/1000))
    print('Total route distances covered by all trucks: {} KM'.format(total_route_distance/1000))



def main():
    """Entry point of the program."""
    # Instantiate the data problem.
    data, loc = create_data_model()

    # Create the routing index manager.
    manager = pywrapcp.RoutingIndexManager(len(data['distance_matrix']),
                                           data['num_vehicles'], data['depot'])

    # Create Routing Model.
    routing = pywrapcp.RoutingModel(manager)


    # Create and register a transit callback.
    def distance_callback(from_index, to_index):
        """Returns the distance between the two nodes."""
        # Convert from routing variable Index to distance matrix NodeIndex.
        from_node = manager.IndexToNode(from_index)
        to_node = manager.IndexToNode(to_index)
        return data['distance_matrix'][from_node][to_node]

    transit_callback_index = routing.RegisterTransitCallback(distance_callback)

    # Define cost of each arc.
    routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)

    # Add Distance constraint.
    dimension_name = 'Distance'
    routing.AddDimension(
        transit_callback_index,
        0,  # no slack
        sys.maxsize,  # vehicle maximum travel distance
        True,  # start cumul to zero
        dimension_name)
    distance_dimension = routing.GetDimensionOrDie(dimension_name)
    distance_dimension.SetGlobalSpanCostCoefficient(100)

    # Setting first solution heuristic.
    search_parameters = pywrapcp.DefaultRoutingSearchParameters()
    search_parameters.first_solution_strategy = (
        routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC)

    # Solve the problem.
    solution = routing.SolveWithParameters(search_parameters)

    # Print solution on console.
    if solution:
        print_solution(data, manager, routing, solution, loc)
    else:
        print('No solution found !')


if __name__ == '__main__':
    main()