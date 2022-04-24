import numpy as np
import cv2 as cv
import depthai as dai
from scan_api.findz import *
from scan_api.findxy import find_x_y


def get_dimensions():
    pipeline = dai.Pipeline()

    # Define source and outputs
    camRgb = pipeline.create(dai.node.ColorCamera)
    xoutVideo = pipeline.create(dai.node.XLinkOut)
    xoutPreview = pipeline.create(dai.node.XLinkOut)

    xoutPreview.setStreamName("preview")

    # Properties
    camRgb.setPreviewSize(1920, 1080)
    camRgb.setBoardSocket(dai.CameraBoardSocket.RGB)
    camRgb.setResolution(dai.ColorCameraProperties.SensorResolution.THE_1080_P)
    camRgb.setInterleaved(True)
    camRgb.setColorOrder(dai.ColorCameraProperties.ColorOrder.BGR)

    # Linking

    camRgb.preview.link(xoutPreview.input)



        rgbOut = pipeline.createXLinkOut()
        rgbOut.setStreamName("rgb")
        camRgb.isp.link(rgbOut.input)

    # Configure Camera Properties
    left = pipeline.createMonoCamera()
    left.setResolution(get_resolution(resolution[1]))
    left.setBoardSocket(dai.CameraBoardSocket.LEFT)

    right = pipeline.createMonoCamera()
    right.setResolution(get_resolution(resolution[1]))
    right.setBoardSocket(dai.CameraBoardSocket.RIGHT)

    stereo = pipeline.createStereoDepth()
    configureDepthPostProcessing(stereo)
    left.out.link(stereo.left)
    right.out.link(stereo.right)

    # Depth -> PointCloud
    nn = pipeline.createNeuralNetwork()
    nn.setBlobPath(getPath(resolution))
    stereo.depth.link(nn.inputs["depth"])

    xyz_in = pipeline.createXLinkIn()
    xyz_in.setMaxDataSize(6144000)
    xyz_in.setStreamName("xyz_in")
    xyz_in.out.link(nn.inputs["xyz"])

    # Only send xyz data once, and always reuse the message
    nn.inputs["xyz"].setReusePreviousMessage(True)

    pointsOut = pipeline.createXLinkOut()
    pointsOut.setStreamName("pcl")
    nn.out.link(pointsOut.input)


















    with dai.Device(pipeline) as device:
        # device.setLogLevel(dai.LogLevel.ERR)

        calibData = device.readCalibration()
        M_right = calibData.getCameraIntrinsics(dai.CameraBoardSocket.RIGHT,
            dai.Size2f(resolution[0], resolution[1]),
        )

    x,y = find_x_y()






