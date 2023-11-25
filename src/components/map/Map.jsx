// import "./map.css"
// import { ResponsiveContainer } from "recharts";

// export default function Map() {
//   return (
//     <div>
//         <h3 className="mapTitle">Campus Map</h3>
//         <div className="MapBox">
//         <ResponsiveContainer width="100%" aspect={4/2}>
//         {/* <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Charles%20W.%20Davidson%20College%20of%20Engineering+(San%20Jose%20State%20University)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe> */}
//         <iframe width="100%" height="300"
//         // src="https://www.google.com/maps/d/embed?mid=11h794VyOIiBdNOUy2Bn53toWuZ-6G-w&ehbc=2E312F"
//         // src="https://www.google.com/maps/d/u/0/embed?mid=11h794VyOIiBdNOUy2Bn53toWuZ-6G-w&ehbc=2E312F"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58.23932521464303!2d-121.8807844246284!3d37.333456762892276!2m3!1f355.75!2f78.82090262623811!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x808fccb864de43d5%3A0x397ffe721937340e!2sSan%20Jos%C3%A9%20State%20University!5e1!3m2!1sen!2sus!4v1700191221052!5m2!1sen!2sus" 
//         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
//         style={{border:"0px #ffffff none;"}}
//         name="myiFrame" 
//         frameborder="0" 
//         marginheight="0" marginwidth="0" 
//         ></iframe>


//         <iframe src="https://www.google.com/maps/embed?pb=!4v1700192306745!6m8!1m7!1sCAoSLEFGMVFpcFBKWXh1dDlxaEZkeWhXVmp2aG1LNUtnNlVnQmdLdW1oTnpIS1ZR!2m2!1d37.33634691218219!2d-121.8806719779968!3f262.1555819432582!4f-10.047316378346267!5f0.7820865974627469" 
//         width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
//         referrerpolicy="no-referrer-when-downgrade"></iframe>
//         </ResponsiveContainer>

//         {/* <ResponsiveContainer width="50%" aspect={4/2}>
//         <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Charles%20W.%20Davidson%20College%20of%20Engineering+(San%20Jose%20State%20University)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
//         </ResponsiveContainer> */}
//         </div>
//     </div>
//   );
// }


import React from 'react';
import "./map.css"
import { ResponsiveContainer } from 'recharts';

export default function Map() {
  return (
    <div>
      <h3 className="mapTitle">Campus Map</h3>
      
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <iframe
            title="Map 1"
            width="100%"
            height="600"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58.23932521464303!2d-121.8807844246284!3d37.333456762892276!2m3!1f355.75!2f78.82090262623811!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x808fccb864de43d5%3A0x397ffe721937340e!2sSan%20Jos%C3%A9%20State%20University!5e1!3m2!1sen!2sus!4v1700191221052!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            style={{ border: '0px #ffffff none' }}
          ></iframe>
        </ResponsiveContainer>
        <div className="MapBox">
        <ResponsiveContainer width="40%" aspect={4/2} className="mapContainer">
          <iframe
            title="Map 2"
            width="100%"
            height="600"
            src="https://www.google.com/maps/embed?pb=!4v1700192306745!6m8!1m7!1sCAoSLEFGMVFpcFBKWXh1dDlxaEZkeWhXVmp2aG1LNUtnNlVnQmdLdW1oTnpIS1ZR!2m2!1d37.33634691218219!2d-121.8806719779968!3f262.1555819432582!4f-10.047316378346267!5f0.7820865974627469"
            allowFullScreen=""
            loading="lazy"
            style={{ border: '0' }}
          ></iframe>
        </ResponsiveContainer>


        <ResponsiveContainer width="40%" aspect={4/2}>
        <iframe 
         title="Map 2"
         width="100%"
         height="600"
        src="https://www.google.com/maps/embed?pb=!4v1700193286741!6m8!1m7!1sCAoSLEFGMVFpcE41RjREV2RCMHlhZGMyN1J5TDcyN2ZBamJ6anByQjdhRnloX3Jp!2m2!1d37.3367242!2d-121.8800233!3f0.34562277243401063!4f-13.056689244433542!5f0.4000000000000002" 
        allowFullScreen=""
        loading="lazy"
        style={{ border: '0' }}
        ></iframe>
        </ResponsiveContainer>

      </div>
    </div>
  );
}
