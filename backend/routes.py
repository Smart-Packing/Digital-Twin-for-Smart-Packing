from flask import request, render_template, make_response
from datetime import datetime as dt
from flask import current_app as app
from models import db, package
import seeder
import sys
sys.path.insert(0, '..')
from prev_impl import truckSack


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
        packagesDetails = []
        for i in p:
            dimension = [i.depth,i.width,i.height]
            volume = i.depth * i.width * i.height
            destination = i.destination
            packageDetails = [volume,dimension,destination]
            packagesDetails.append(packageDetails)

        #print('packageDetails', packagesDetails)

        result = 0
        for i in range(len(packagesDetails)):
            result = truckSack.truckSack(packagesDetails[i][0], packagesDetails[i][1], packagesDetails[i][2], i+1)
        
        print(result)

            
        #TODO: call gmapDistance
        return "IS WORKING"
    except Exception as e:
        print(e)
        return "NOT WORKING"