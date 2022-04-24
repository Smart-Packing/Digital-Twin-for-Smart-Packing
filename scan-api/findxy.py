import cv2
import utils as utils
import depthai as dai


def find_x_y():

    scale = 3
    wP = 210 *scale
    hP= 297 *scale



    # Create pipeline
    pipeline = dai.Pipeline()

    # Define source and outputs
    camRgb = pipeline.create(dai.node.ColorCamera)
    xoutVideo = pipeline.create(dai.node.XLinkOut)
    xoutPreview = pipeline.create(dai.node.XLinkOut)

    xoutVideo.setStreamName("video")
    xoutPreview.setStreamName("preview")

    # Properties
    camRgb.setPreviewSize(1920,1080)
    camRgb.setBoardSocket(dai.CameraBoardSocket.RGB)
    camRgb.setResolution(dai.ColorCameraProperties.SensorResolution.THE_1080_P)
    camRgb.setInterleaved(True)
    camRgb.setColorOrder(dai.ColorCameraProperties.ColorOrder.BGR)

    # Linking
    camRgb.video.link(xoutVideo.input)
    camRgb.preview.link(xoutPreview.input)

    # Connect to device and start pipeline
    with dai.Device(pipeline) as device:

        
        preview = device.getOutputQueue('preview')

        while True:
           
            previewFrame = preview.get()


            # Get BGR frame from NV12 encoded video frame to show with opencv
            # cv2.imshow("video", videoFrame.getCvFrame())
            # Show 'preview' frame as is (already in correct format, no copy is made)
            # cv2.imshow("preview", previewFrame.getFrame())
            img = previewFrame.getFrame()
    

            imgContours , conts = utils.getContours(img,minArea=50000,filter=4)
            # print(conts)
            if len(conts) != 0:
                biggest = conts[0][2]
                #print(biggest)
                imgWarp = utils.warpImg(img, biggest, wP,hP)
                imgContours2, conts2 = utils.getContours(imgWarp,
                                                         minArea=20000, filter=4,
                                                         cThr=[50,50],draw = False)

                if len(conts) != 0:
                    for obj in conts2:
                        cv2.polylines(imgContours2,[obj[2]],True,(0,255,0),2)
                        nPoints = utils.reorder(obj[2])
                        nW = round((utils.findDis(nPoints[0][0]//scale,nPoints[1][0]//scale)/10),1)
                        nH = round((utils.findDis(nPoints[0][0]//scale,nPoints[2][0]//scale)/10),1)
                        cv2.arrowedLine(imgContours2, (nPoints[0][0][0], nPoints[0][0][1]), (nPoints[1][0][0], nPoints[1][0][1]),
                                        (255, 0, 255), 3, 8, 0, 0.05)
                        cv2.arrowedLine(imgContours2, (nPoints[0][0][0], nPoints[0][0][1]), (nPoints[2][0][0], nPoints[2][0][1]),
                                        (255, 0, 255), 3, 8, 0, 0.05)
                        x, y, w, h = obj[3]
                        cv2.putText(imgContours2, '{}cm'.format(nW), (x + 30, y - 10), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1.5,
                                    (255, 0, 255), 2)
                        cv2.putText(imgContours2, '{}cm'.format(nH), (x - 70, y + h // 2), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1.5,
                                    (255, 0, 255), 2)
                        return nW,nH
                cv2.imshow('A4', imgContours2)

            img = cv2.resize(img,(0,0),None,0.5,0.5)
            cv2.imshow('Original',img)
            if cv2.waitKey(1) == ord('q'):
                break


