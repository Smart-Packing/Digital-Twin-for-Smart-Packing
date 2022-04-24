# Digital-Twin-for-Smart-Packing
Smart supply chain logistic solution making sustainable deliveries.


## TLDR
The idea is to reform the loading of a truck at a warehouse. The idea is to maximize the utilization of the capacity of the truck/ship. Create the Digital Twin of the packages and put it into the Network of the Warehouse. The camera will scan the truck and the Edge Network will calculate, based on the Digital Twin of the packages and the truck, the optimal layout and the optimal way to load the truck.

## Description
First of all, it is required to build an Edge Network at a warehouse. That Network contains all the Digital Twin information regarding all the packages that are inside the warehouse. By that, it is possible to be prepared for any incoming truck or ship. When one of them arrives at the warehouse, the container part should be scanned with an EdgeAI camera, which discovers the required parameters of the container. With that information and the packages that are required to be packed, it is possible to plan a maximum utilization (Knapsack-problem). After solving this problem, the next step is to create the packing plan.
The algorithm is quite simple:

1.   Get the package
2.   Deliver and put it into the container
3.   Camera in the container scans if the package is in place and sends a signal that the next can come
4.   Repeat until the packing is complete


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


