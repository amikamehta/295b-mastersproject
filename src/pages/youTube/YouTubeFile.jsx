import React, { useState } from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import './youTube.css'

export default function YouTubeFile() {
  const [id, setID] = useState("");

  function handleChange(e) {
    setID(getYouTubeID(e.target.value));
  }

  const opts = {
    height: '150',
    width: '440',
    playerVars: {
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    // Do something when the player is ready
    console.log(event.target);
  };

  return (
    <div>
      Browse setup videos -
      <input className="inputYoutube" align="center" type="text" onChange={handleChange} placeholder='Enter URL...'/><br/>
      Home security - https://www.youtube.com/watch?v=luaJYpePwPg<br/>
      CCTV camera - https://www.youtube.com/watch?v=D-52qjKJMqc<br/>
      {id && <YouTube videoId={id} opts={opts} onReady={_onReady} />}
    </div>
  );
}
