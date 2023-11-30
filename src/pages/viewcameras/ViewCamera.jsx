import "./viewCamera.css"
export default function ViewCamera() {
  return (
    <div className='editCamera'>
      <h1 className="title">Cameras</h1>
      <div className="editCameraContainer">
      <section class="grid-container">

  <div class="grid-item">
<<<<<<< HEAD
    <iframe width="560" height="315"  src = "http://127.0.0.1:5000/video_feed?ipaddress=http://webcam.town.karuizawa.nagano.jp/krcam07/mjpg/1/video.mjpg" frameborder = "0" allowfullscreen></iframe>
=======
    {/* <iframe src = "https://www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder = "0" allowfullscreen></iframe> */}
    <iframe src = "http://127.0.0.1:5000/video_feed?ipaddress=http://webcam.town.karuizawa.nagano.jp/krcam07/mjpg/1/video.mjpg" frameborder = "0" allowfullscreen></iframe>
>>>>>>> 1407dde15eaac53fc900dd2490c7dee2e880e36f
    <button class="button1">ID 1</button>
    <button class="button2">edit</button>
  </div>
  <div class="grid-item">
  <iframe width="560" height="315" src="http://127.0.0.1:5000/video_feed?ipaddress=http://webcam.town.karuizawa.nagano.jp/krcam02/mjpg/video.mjpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <button class="button1">ID 2</button>
    <button class="button2">edit</button>
  </div>
  <div class="grid-item">
  <iframe width="560" height="315" src="http://127.0.0.1:5000/video_feed?ipaddress=http://mbr-cam.dyndns.org:8088/mjpg/video.mjpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <button class="button1">ID 3</button>
    <button class="button2">edit</button>
  </div>
  <div class="grid-item">
  <iframe width="560" height="315" src="http://127.0.0.1:5000/video_feed?ipaddress=http://mmb.aa1.netvolante.jp:1025/mjpg/video.mjpg?resolution=640x360&compression=50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <button class="button1">ID 4</button>
    <button class="button2">edit</button>
  </div>
  <div class="grid-item">
  <iframe width="560" height="315" src="http://127.0.0.1:5000/video_feed?ipaddress=http://camera6.buffalotrace.com/mjpg/video.mjpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <button class="button1">ID 5</button>
    <button class="button2">edit</button>
  </div>
  <div class="grid-item">
  <iframe width="560" height="315" src="http://127.0.0.1:5000/video_feed?ipaddress=http://camera.buffalotrace.com/mjpg/video.mjpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <button class="button1">ID 6</button>
    <button class="button2">edit</button>
  </div>


  
</section>
      </div>
    </div>
  );
}


