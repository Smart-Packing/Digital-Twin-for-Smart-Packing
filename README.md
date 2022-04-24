# Digital-Twin-for-Smart-Packing
Smart supply chain logistic solution making sustainable deliveries.

## Description
First of all, it is required to build an Edge Network at a warehouse. That Network contains all the Digital Twin information regarding all the packages that are inside the warehouse. By that, it is possible to be prepared for any incoming truck. When one of them arrives at the warehouse, the container part should be scanned with a DepthAI camera, which discovers the required parameters of the container. With that information and the packages that are required to be packed, it is possible to plan a maximum utilization (Knapsack-problem). After solving this problem, the next step is to create the route/path planning (Vehile Routing Problem), emulating how the trucks should make the deliveries to ensure least GHG emissoin.


## Algorithm
1. Scan all Packages using DepthAI, OAK D-Lite. By scanning we refer to extraction of 3D dimensions (length, width and height) of the package so that we could calculate the volume. Also, select the destination location where each of these packages need to be delivered (to customers, let's say).
2. Use 2D Multiple Knapsack problem to load all the packages efficiently into the truck, ensuring minimum number of trucks are being used to reduce global emission such that each truck is "fully-packed".
3. Use Vehicle Routing Problem, Travelling Salesman problem to calculate the route or the path the trucks have to take so that it ensures an optimized way to deliver all the packages with minimum travel distance thereby reducing GHG.
4. By combining Step #2 and Step #3 we are ensuring each truck is:
    1. fully packed (Bin packing problem) in the most efficient way and,
    2. takes the most optimized route to deliver.
   such that the total number of trucks being used is the minimum (hence, less emission of GHG).


### Front End using ReactJS

https://user-images.githubusercontent.com/17596445/164976385-b2826cdb-f50a-4b31-bd77-fcd7ceaaa73a.mp4


### X-Y Dimension detection of object using DepthAI
Scanning x and y dimension of the object using the camera

https://user-images.githubusercontent.com/6372010/164974398-499bc5e8-b3c1-4fa1-8c3d-bc0c7e5b96e8.mov


### Truck Route Planning using Vehicle Routing Problem, Travelling Salesman Problem and Smart Packaging Solution using 2D Knapsack Problem
Backend Services used: Python Flask, SQLAchemy

<img width="1096" alt="Screenshot 2022-04-24 at 14 01 06" src="https://user-images.githubusercontent.com/17596445/164975469-8ce897b3-1b73-492c-80ae-5b07ec68f5a1.png">

Here, this is an example showing 15 packages (items) that needs to be delivered to 15 different locations in the US. There are fleet of 4 trucks which will deliver all these packages to various locations in the most optimized way, starting from the warehouse or depot and also coming back to the warehouse once all packages have been delivered.

As you can see that we have various cities throughout the US, the Vehicle Routing Problem (along with Travelling Salesman) efficiently shows all the path that a truck needs to take such that this is the most optimized way to deliver all the packages with minimum travel distance thereby reducing GHG. The algorithm breaks down the map into various cluster: like in our case: east cost, west coast, center and southern.

<img width="1439" alt="Screenshot 2022-04-24 at 14 10 45" src="https://user-images.githubusercontent.com/17596445/164976148-bbf213eb-7937-440b-8ef7-b853a818f3f0.png">

This is the model of the Vehicle Routing Problem: The square on the center is the warehouse location where the truck starts it's journey and also comes back to this warehouse once all packages have been delivered to end the journey. The three lines (red, black and blue) signify the routes three trucks are going to take to make all the deliveres reliably, ensuring least emission.

<img width="448" alt="VRP" src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Figure_illustrating_the_vehicle_routing_problem.png">


## Resources
1. Vehile Routing Problem = https://en.wikipedia.org/wiki/Vehicle_routing_problem
2. Travelling Salesman Problem = https://en.wikipedia.org/wiki/Travelling_salesman_problem
3. 0/1 Knapsack Problem = https://en.wikipedia.org/wiki/Knapsack_problem
4. Bin Packing Problem = https://en.wikipedia.org/wiki/Bin_packing_problem

Here, Knapsack = Bin = Vehicle = Truck/Container. 


