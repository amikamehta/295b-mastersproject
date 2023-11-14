import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./components/topbar/topbar.css"
import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Schedule from "./pages/schedule/Schedule";
import MaintainanceTeam from "./pages/maintainanceTeam/MaintainanceTeam";
import Alerts from "./pages/alerts/Alerts";
import EditUser from "./pages/editUser/EditUser";
import AddCamera from "./pages/addcamera/AddCamera";
import UpdateCamera from "./pages/updateCamera/UpdateCamera";
import ViewCamera from "./pages/viewcameras/ViewCamera";
import DeleteCamera from "./pages/deleteCamera/deleteCamera";
function App() {
  return (
    <Router>
      <Topbar/> 
      <div className="container">
      <Sidebar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/schedules" element={<Schedule/>}/>
      <Route path="/maintainanceTeam" element={<MaintainanceTeam/>}/>
      <Route path="/alerts" element={<Alerts/>}/>
      <Route path="/editUsers/:userId" element={<EditUser/>}/>
      <Route path="/AddCamera" element={<AddCamera/>}/>
      <Route path="/updateCamera" element={<UpdateCamera/>}/>
      <Route path="/viewCameras" element={<ViewCamera/>}/>
      <Route path="/deleteCamera" element={<DeleteCamera/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
