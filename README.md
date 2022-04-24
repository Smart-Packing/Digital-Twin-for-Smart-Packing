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

### X-Y Dimension detection of object
Scanning x and y dimension of the object using the camera

https://user-images.githubusercontent.com/6372010/164974398-499bc5e8-b3c1-4fa1-8c3d-bc0c7e5b96e8.mov


### Truck Route Planning using Vehicle Routing Problem, Travelling Salesman Pproblem and Smart Packaging Solution using 2D Knapsack Problem

<img width="1096" alt="Screenshot 2022-04-24 at 14 01 06" src="https://user-images.githubusercontent.com/17596445/164975469-8ce897b3-1b73-492c-80ae-5b07ec68f5a1.png">
