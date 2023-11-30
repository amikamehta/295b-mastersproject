import "./viewCamera.css"
import { Link } from "react-router-dom";
export default function ViewCamera() {
  return (
    <div className='editCameraView'>
      <h1 className="title">Live Monitoring Workspace</h1>
      <div className="editCameraContainer">
      <section class="grid-container">

  <div class="grid-item">
    <iframe src = "http://127.0.0.1:5000/video_feed?ipaddress=http://webcam.town.karuizawa.nagano.jp/krcam07/mjpg/1/video.mjpg" frameborder = "0" allowfullscreen></iframe>
    <button class="button1">ID 1</button>
    <Link to="/updatecamera"><button class="button2">edit</button></Link>
    <br/>
    Camera Health - Good<br/>
    Location - SJSU Pantry <br/>
    IP address - http://192.168.1.101:3333 <br/>
  </div>

  <div class="grid-item">
    <iframe src = "" frameborder = "0" allowfullscreen></iframe>
    <button class="button1">ID 2</button>
    <Link to="/updatecamera"><button class="button2">edit</button></Link>
    <br/>
    Camera Health - Poor<br/>
    Location - SJSU Parking Garage <br/>
    IP address - http://199.168.1.101:3300 <br/>
  </div>

  <div class="grid-item">
    <iframe src = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BloSxjK/a-computer-scans-a-crowded-subway-tunnel-using-facial-recognition-to-show-each-persons-personal-data-in-a-floating-display-that-follows-the-individual_nkvtj1y6__cedb377e9dae151528d68094e04a205e__P360.mp4" frameborder = "0" allowfullscreen></iframe>
    <button class="button1">ID 3</button>
    <Link to="/updatecamera"><button class="button2">edit</button></Link>
    <br/>
    Camera Health - Good<br/>
    Location - SJSU MLK Library <br/>
    IP address - http://199.168.1.101:3389<br/>
  </div>

  <div class="grid-item">
    <iframe src = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/piShJKb/videoblocks-drone-with-thermal-night-vision-view-of-terrorist-squad-walking-with-weapons_hrzjznl5oe__cd6fdc4c9e97df4b0ffa494000a80f82__P360.mp4" frameborder = "0" allowfullscreen></iframe>
    <button class="button1">ID 4</button>
    <Link to="/updatecamera"><button class="button2">edit</button></Link>
    <br/>
    Camera Health - Good<br/>
    Location - SJSU Student Union <br/>
    IP address - http://189.168.1.101:3113<br/>
  </div>

  <div class="grid-item">
    <iframe src = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/msqd2XJ/videoblocks-63dbdbe73c8574796ea05d51_b4ttp2y2j__359af475ce9c0921ec71d6079f416d22__P360.mp4" frameborder = "0" allowfullscreen></iframe>
    <button class="button1">ID 5</button>
    <Link to="/updatecamera"><button class="button2">edit</button></Link>
    <br/>
    Camera Health - Needs Maintainance<br/>
    Location - SJSU Tower Lawn <br/>
    IP address - http://162.166.1.101:399<br/>
  </div>

  <div class="grid-item">
    <iframe src = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/msqd2XJ/videoblocks-63dbdbe73c8574796ea05d51_b4ttp2y2j__359af475ce9c0921ec71d6079f416d22__P360.mp4" frameborder = "0" allowfullscreen></iframe>
    <button class="button1">ID 6</button>
    <Link to="/updatecamera"><button class="button2">edit</button></Link>
    <br/>
    Camera Status - Needs Maintainance<br/>
    Location - SJSU Recreation Center <br/>
    IP address - http://167.168.1.101:1833<br/>
  </div>

  <div class="grid-item">
    <iframe src = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/HzG7GjKdbj6nk9is6/videoblocks-the-work-of-the-team-in-the-situation-room-real-time-monitoring-of-the-situation-in-the-country_rnux_i12g__22045e9d8b4afa1c7054465597a960d0__P360.mp4" frameborder = "0" allowfullscreen></iframe>
    <button class="button1">ID 7</button>
    <Link to="/updatecamera"><button class="button2">edit</button></Link>
    <br/>
    Camera Status - Good<br/>
    Location - SJSU Student Union <br/>
    IP address - http://162.168.1.101:1111<br/>
  </div>

  <div class="grid-item">
    <iframe src = "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BloSxjK/a-computer-scans-a-crowded-subway-tunnel-using-facial-recognition-to-show-each-persons-personal-data-in-a-floating-display-that-follows-the-individual_nkvtj1y6__cedb377e9dae151528d68094e04a205e__P360.mp4" frameborder = "0" allowfullscreen></iframe>
    <button class="button1">ID 8</button>
    <Link to="/updatecamera"><button class="button2">edit</button></Link>
    <br/>
    Camera Status - Very Good<br/>
    Location - SJSU Lucas Hall <br/>
    IP address - http://197.168.1.101:1133<br/>
  </div>

  <div class="grid-item">
    <iframe src = "https://www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder = "0" allowfullscreen></iframe>
    <button class="button1">ID 9</button>
    <Link to="/updatecamera"><button class="button2">edit</button></Link>
    <br/>
    Camera Status - Poor<br/>
    Location - SJSU Engineering Building <br/>
    IP address - http://176.168.1.101:2223<br/>
  </div>

  
</section>
      </div>
    </div>
  );
}





    