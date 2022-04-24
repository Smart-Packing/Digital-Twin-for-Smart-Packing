"""Solves a multiple knapsack problem using the CP-SAT solver."""
from ortools.sat.python import cp_model


def start_smart_packing(vol_pack, dist_pack, cap_truck):
    data = {}
    data['weights'] = vol_pack
    data['values'] = dist_pack
    data['bin_capacities'] = cap_truck

    assert len(data['weights']) == len(data['values'])
    data['num_items'] = len(data['weights'])
    data['all_items'] = range(data['num_items'])

    data['num_bins'] = len(data['bin_capacities'])
    data['all_bins'] = range(data['num_bins'])

    model = cp_model.CpModel()

    # Variables.
    # x[i, b] = 1 if item i is packed in bin b.
    x = {}
    for i in data['all_items']:
        for b in data['all_bins']:
            x[i, b] = model.NewBoolVar(f'x_{i}_{b}')

    # Constraints.
    # Each item is assigned to at most one bin.
    for i in data['all_items']:
        model.Add(sum(x[i, b] for b in data['all_bins'])<=1)

    # The amount packed in each bin cannot exceed its capacity.
    for b in data['all_bins']:
        model.Add(
            sum(x[i, b] * data['weights'][i]
                for i in data['all_items']) <= data['bin_capacities'][b])

    # Objective.
    # Maximize total value of packed items.
    objective = []
    for i in data['all_items']:
        for b in data['all_bins']:
            objective.append(
                cp_model.LinearExpr.Term(x[i, b], data['values'][i]))
    model.Maximize(cp_model.LinearExpr.Sum(objective))

    solver = cp_model.CpSolver()
    status = solver.Solve(model)

    if status == cp_model.OPTIMAL:
        # print(f'Total packed value: {solver.ObjectiveValue()}')
        print("\n\n")
        total_weight = 0
        for b in data['all_bins']:
            print(f'Truck {b}')
            bin_weight = 0
            bin_value = 0
            for i in data['all_items']:
                if solver.Value(x[i, b]) > 0:
                    print(
                        f"Item {i} volume/dimensions: {data['weights'][i]}"
                    )
                    bin_weight += data['weights'][i]
                    bin_value += data['values'][i]
            print(f'Packed bin volume/dimensions: {bin_weight}\n')
            # print(f'Packed bin value: {bin_value}\n')
            total_weight += bin_weight
        print(f'Total packed Volume across all the trucks: {total_weight}')
    else:
        print('The problem does not have an optimal solution.')
    return "OK"

'''
if __name__ == '__main__':
    vol_pack = [48, 30, 42, 36, 36, 48, 42, 42, 36, 24, 30, 30, 42, 36, 36]
    dist_pack = [10, 30, 25, 50, 35, 30, 15, 40, 30, 35, 45, 10, 20, 30, 25]
    cap_truck = [100,  200, 100, 300, 100]
    x = start_smart_packing(vol_pack, dist_pack, cap_truck)
'''