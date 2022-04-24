# Scan API 

2 separate modules are created to calculate the dimensions of the box :

1. One module calculates the x,y dimension , using countours for edge detection of the object and then using the arclength function of opencv to measure the edge lengths. 
2. The second module is used exclusively for depth calculation or height of the object which tries to first generate a point cloud from the stereo cameras and next use a 3d RANSAC model to fit a plane on the pointcloud of the object. From the equation of the plane we determine its z value which is used as the z dimension. 

The findxy() and findz() modules can be used in the pipeline to respectively calculate the x,y and z dimensions of the package. 

## Resources used : 
1. [Real time object measurement](https://youtu.be/tk9war7_y0Q)
2. [Depth AI PointCloud detection](https://github.com/luxonis/depthai-experiments/tree/master/gen2-pointcloud)
3. [PyRANSAC 3D](https://leomariga.github.io/pyRANSAC-3D/)
