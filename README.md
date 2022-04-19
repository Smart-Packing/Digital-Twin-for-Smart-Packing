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



