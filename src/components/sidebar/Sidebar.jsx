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
                    Add Camera
                </li>
                <li className="sidebarItemList">
                    <FlipCameraAndroid className="sidebarIcon"/>
                    Update Camera
                </li>
                <li className="sidebarItemList">
                    <CameraRoll className="sidebarIcon"/>
                    View Camera
                </li>
                <li className="sidebarItemList">
                    <VideocamOff className="sidebarIcon"/>
                    Delete Camera
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
                    Camera Catlog
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
                    Billing
                </li>
                <li className="sidebarItemList">
                    <Info className="sidebarIcon"/>
                    FAQ
                </li>
                <li className="sidebarItemList">
                    <LiveHelp className="sidebarIcon"/>
                    Help
                </li>
            </ul>
        </div>


      </div>
    </div>
  );
}
