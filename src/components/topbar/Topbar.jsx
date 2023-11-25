import React from 'react';
import {NotificationsNone, Settings, Person, Search} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topbarLeft'>
                <span className='logo'>
                    SYSTEM DASHBOARD
                </span>
            </div>
            <div className='topbarRight'>
                <div className='topBarIconContainer'>
                    <Settings/>
                </div>
                <div className='topBarIconContainer'>
                    <Person/>
                </div>
                <div className='topBarIconContainer'>
                    <NotificationsNone/>
                    <span className='topIconBadge'>
                        2
                    </span>
                </div>
                <div>
                    <img src="http://digitalcommunications.wp.st-andrews.ac.uk/files/2019/04/JPEG_compression_Example.jpg" alt="" className="Image"/>
                </div>
            </div>
        </div>
    </div>
  );
}
