import React from 'react';
import ChatBot from 'react-simple-chatbot';
import "./help.css"
import YouTubeFile from '../youTube/YouTubeFile';
import {steps} from "../../chatbotSteps.js"

export default function Help() {
  return (
    <div className='help'>
         <h3 className='titleHelp'>Need to talk to an expert ?</h3>
        <div className='containerHelp'>
            <h3 className='AboutUs'>About Us</h3>
                <div className='contentAboutUs'>

                Location<br/>
                Address: 1 Washington Sq, San Jose, CA 95192<br/>
                Phone: (408) 924-1000<br/><br/>
                <div className='mapAbout'>
                 <span className='serviceHours'>
                Operating Hours<br/>
                Monday 9am-5pm<br/>
                Tuesday 9am-5pm<br/>
                Wednesday 9am-5pm<br/>
                Thursday 9am-5pm<br/>
                Friday 9am-5pm<br/>
                Saturday 9am-1pm<br/>
                 </span>
                 <span className='mapIntegration'>
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Washington%20Sq,%20San%20Jose,%20CA%2095192+(San%20Jose%20State%20University)&amp;t=h&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                 <a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
                 </span>
                </div>
                <div>
                <YouTubeFile/>
                </div>
                </div>
        <ChatBot steps={steps} />
      </div>
    </div>

  );
}
