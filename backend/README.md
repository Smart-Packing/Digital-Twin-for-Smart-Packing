# Running the Backend Flask App #

## Our backend was created using Flask and our Database is using SqlLit. To assist with querying we used an ORM SqlAlchem ##
### To run the backend code: ###
  * If you haven't already clone the repo with ``` git clone https://github.com/Smart-Packing/Digital-Twin-for-Smart-Packing.git ```
  * Open a command line or terminal instance and navigate to the repo
  * Once at the repository level run ```cd backend```
  * From there create a virtual environment. To do this run ``` python3 -m venv env ```
  * To activate the virtual environment run ``` source env/bin/activate ```
  * Now we have to install the required packaes for the project. To do this run ``` pip install -r requirements.txt ```
  * We're all set up!! To run the application run ``` flask run ```

### Backend Features ###
  * Database that retrieves dimensions of packages from our Oak D Lite's model output! 
  * Implementation of a 2-D Knapsack algortihm for truck load optimization. A truck should never be empty! Whether its on its way to its destinations or returning back home!
  * Implementation of an optimized routing algorithm for optimal truck path from origin -> destination -> origin
