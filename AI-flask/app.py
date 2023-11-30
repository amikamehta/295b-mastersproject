from flask import Flask, render_template, Response,request
import cv2
import math 
from ultralytics import YOLO
import yt_dlp as youtube_dl
import pafy
from ffmpeg_streaming import Formats
from flask_socketio import SocketIO, emit
from threading import Lock
app = Flask(__name__)
sio = SocketIO(app)
thread = None
thread_lock = Lock()


model = YOLO("model/yolov8n.pt")
classNames = ["human", "bicycle", "car", "motorbike", "aeroplane", "bus", "train", "truck", "boat",
              "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat",
              "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella",
              "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard", "sports ball", "kite", "baseball bat",
              "baseball glove", "skateboard", "surfboard", "tennis racket", "bottle", "wine glass", "cup",
              "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich", "orange", "broccoli",
              "carrot", "hot dog", "pizza", "donut", "cake", "chair", "sofa", "pottedplant", "bed",
              "diningtable", "toilet", "tvmonitor", "laptop", "mouse", "remote", "keyboard", "cell phone",
              "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors",
              "teddy bear", "hair drier", "toothbrush" ]

#def background_task():
#    while True:
#        sio.sleep(10)
#        sio.emit('my_response', { 'data': 'a new message' })
 

def gen_frames(ipaddress):  # generate frame by frame from camera
    camera = cv2.VideoCapture("http://220.233.144.165:8888/mjpg/video.mjpg")
    #camera = cv2.VideoCapture("http://webcam.town.karuizawa.nagano.jp/krcam02/mjpg/video.mjpg")
    #print(ipaddress)
    #camera = cv2.VideoCapture(ipaddress)
    camera.set(3, 640)
    camera.set(4, 480)
    x = 1
    while True:
        success, frame = camera.read()  
        results = model(frame, stream=True,verbose=False)
        if not success:
            break
        else:
            for r in results:
                boxes = r.boxes

                for box in boxes:
                    x1, y1, x2, y2 = box.xyxy[0]
                    a1, b1, a2, b2 = int(x1), int(y1), int(x2), int(y2) # convert to int values
                    #print(box)
                    cls = int(box.cls[0])
                    if cls == 1:
                        org = [a1, b1]
                        font = cv2.FONT_HERSHEY_DUPLEX
                        fontScale = 1
                        color = (255,99,71)
                        thickness = 2
                        boxcolor = (255,99,71)
                        print("DANGER")
                        #sio.sleep(10)
                        sio.emit('my_response', { 'data': 'warning' })
                    elif cls == 5:
                        org = [a1, b1]
                        font = cv2.FONT_HERSHEY_DUPLEX
                        fontScale = 1
                        color = (255,99,71)
                        thickness = 2
                        boxcolor = (255,99,71)
                        print("DANGER")
                        #sio.sleep(10)
                        sio.emit('my_response', { 'data': 'warning' })
                    elif cls == 7:
                        org = [a1, b1]
                        font = cv2.FONT_HERSHEY_DUPLEX
                        fontScale = 1
                        color = (255,99,71)
                        thickness = 2
                        boxcolor = (255,99,71)
                        print("DANGER")
                        #sio.sleep(10)
                        sio.emit('my_response', { 'data': 'warning' })
                    elif cls == 8:
                        org = [a1, b1]
                        font = cv2.FONT_HERSHEY_DUPLEX
                        fontScale = 1
                        color = (255,99,71)
                        thickness = 2
                        boxcolor = (255,99,71)
                        print("DANGER")
                        #sio.sleep(10)
                        sio.emit('my_response', { 'data': 'warning' })
                    elif cls == 15:
                        org = [a1, b1]
                        font = cv2.FONT_HERSHEY_DUPLEX
                        fontScale = 1
                        color = (255,99,71)
                        thickness = 2
                        boxcolor = (255,99,71)
                        print("DANGER")
                        #sio.sleep(10)
                        sio.emit('my_response', { 'data': 'warning'})
                    else:
                        org = [a1, b1]
                        font = cv2.FONT_HERSHEY_DUPLEX
                        fontScale = 1
                        color = (0, 128, 0)
                        thickness = 2
                        boxcolor = (0, 128, 0)
                    cv2.rectangle(frame, (a1, b1), (a2, b2), boxcolor, 3)  
                    x = x+1
                    cv2.putText(frame, classNames[cls], org, font, fontScale, color, thickness)

                    ret, buffer = cv2.imencode('.jpg', frame)
                    nframe = buffer.tobytes()
                    
                    yield (b'--frame\r\n'
                        b'Content-Type: image/jpeg\r\n\r\n' + nframe + b'\r\n')  # concat frame one by one and show result
#cv2.imshow('Webcam', frame)

@app.route('/video_feed',methods=['GET'])
def video_feed():
    ipaddress = request.args.get('ipaddress')
    #Video streaming route. Put this in the src attribute of an img tag
    return Response(gen_frames(ipaddress), mimetype='multipart/x-mixed-replace; boundary=frame')



@sio.on('connect')
def connect():
    #global thread
    #with thread_lock:
    #    if thread is None:
    #        thread = sio.start_background_task(background_task)
    #emit('my_response', { 'data': 'connected' }) 
    return render_template('index.html')

@app.route('/')

def index():
    """Video streaming home page."""
    return render_template('index.html')


if __name__ == '__main__':
    #app.run(debug=True)
    sio.run(app)