import { LineStyle, CameraAlt, VideocamOff, CameraRoll,Info, LiveHelp,FlipCameraAndroid, AttachMoney, NewReleases, Report,GroupAdd, Create, MenuBook,Assessment,Schedule,ShowChart, Person  } from "@material-ui/icons";
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div  className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">
                Dashboard
            </h3>
            <ul className="sidebarList">
                <li className="sidebarItemList active">
                    <LineStyle className="sidebarIcon"/>
                    <Link to={"/"}><button className="linkButton">Home</button></Link>
                </li>
                <li className="sidebarItemList">
                    <Schedule className="sidebarIcon"/>
                    <Link to={"/schedules"}><button className="linkButton">Schedule</button></Link>
                </li>
                <li className="sidebarItemList">
                    <Person className="sidebarIcon"/>
                    <Link to={"/users"}><button className="linkButton">Users</button></Link>
                </li>
                <li className="sidebarItemList">
                    <GroupAdd className="sidebarIcon"/>
                    <Link to={"/maintainanceTeam"}><button className="linkButton">Manage Profile</button></Link>
                </li>
            </ul>
        </div>

        <div className="sidebarMenu">
            <h3 className="sidebarTitle">
                Camera
            </h3>
            <ul className="sidebarList">
            
                <li className="sidebarItemList">
                <CameraAlt className="sidebarIcon"/>
                   
                    <Link to={"/addcamera"}><button className="linkButton">Add Camera</button></Link>
                </li>
                <li className="sidebarItemList">
                    <FlipCameraAndroid className="sidebarIcon"/>
                 
                    <Link to={"/updatecamera"}><button className="linkButton">Update Camera</button></Link>
                </li>
                <li className="sidebarItemList">
                    <CameraRoll className="sidebarIcon"/>
                    
                    <Link to={"/viewcamera"}><button className="linkButton"> View Camera</button></Link>
                </li>
                <li className="sidebarItemList">
                <VideocamOff className="sidebarIcon"/>
                    
                    <Link to={"/deletecamera"}><button className="linkButton"> Delete Camera</button></Link>
                </li>
             
            </ul>
        </div>


        <div className="sidebarMenu">
            <h3 className="sidebarTitle">
                Maintainance
            </h3>
            <ul className="sidebarList">
                <li className="sidebarItemList">
                    <Assessment className="sidebarIcon"/>
                    Reports
                </li>
                <li className="sidebarItemList">
                    <NewReleases className="sidebarIcon"/>
                    <Link to={"/alerts"}><button className="linkButton">Alerts</button></Link>
                </li>
                <li className="sidebarItemList">
                    <Create className="sidebarIcon"/>
                    Raise Request
                </li>
                <li className="sidebarItemList">
                    <MenuBook className="sidebarIcon"/>
                    <Link to={"/cameraCatlog"}><button className="linkButton">Camera Catlog</button></Link>
                </li>
            </ul>
        </div>


        <div className="sidebarMenu">
            <h3 className="sidebarTitle">
                Others
            </h3>
            <ul className="sidebarList">
                <li className="sidebarItemList">
                    <AttachMoney className="sidebarIcon"/>
                    <Link to={"/billing"}><button className="linkButton">Billing</button></Link>
                </li>
                <li className="sidebarItemList">
                    <Info className="sidebarIcon"/>
                    <Link to={"/faq"}><button className="linkButton">FAQ</button></Link>
                </li>
                <li className="sidebarItemList">
                    <LiveHelp className="sidebarIcon"/>
                    <Link to={"/help"}><button className="linkButton">Help</button></Link>
                </li>
            </ul>
        </div>


      </div>
    </div>
  );
}
