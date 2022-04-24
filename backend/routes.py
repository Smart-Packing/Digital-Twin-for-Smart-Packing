from flask import request, render_template, make_response
from datetime import datetime as dt
from flask import current_app as app
from models import db, package
import seeder
import sys
sys.path.insert(0, '..')
from src import knapsack


@app.before_request
def before_request_func():
    p = package.query.all()
    if len(p) == 0:
        seeder.create_db_table()

@app.route('/test')
def mains():
    p = package.query.all()
    for i in p:
        print(i)
        print(i.depth,i.width,i.height)

    return "NOT WORKING"

#packagedeatails = [ (package1)[volume,[4,4,4],distance]
#                    (package2)[volume,[4,4,4],distance] ... ]    
#package 1 : [volume,[4,4,4],distance]

@app.route('/')
def main():
    try: 
        #Gather package details
        p = package.query.all()
        packagesDetails_dim = []
        packagesDetails_dest = []
        trucks = []

        for i in p:
            dimension = [i.depth,i.width,i.height]
            package_dimension = i.depth * i.width * i.height
            destination = i.destination

            if i.truck_capacity is not 0:
                trucks.append(i.truck_capacity)
            packagesDetails_dim.append(package_dimension)
            packagesDetails_dest.append(destination)

        n = len(packagesDetails_dest)

        result = ""
        # for i in range(len(packagesDetails)):
        # for x in trucks:
        #     result = truckSack.truckSack(x, packagesDetails_dim, packagesDetails_dest, n)
        
        result = knapsack.start_smart_packing(packagesDetails_dim, packagesDetails_dest, trucks)
        
        print(result)
            
        #TODO: call gmapDistance
        return "IS WORKING"
    except Exception as e:
        print(e)
        return "NOT WORKING"