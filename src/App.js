import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./components/topbar/topbar.css";
import "./app.css";
import Home from "./pages/Home";
import UserList from "./pages/userList/UserList";
import Schedule from "./pages/schedule/Schedule";
import MaintainanceTeam from "./pages/maintainanceTeam/MaintainanceTeam";
import Alerts from "./pages/alerts/Alerts";

import Help from "./pages/help/Help";
import Faq from "./pages/Faq/Faq";
import CameraCatlog from "./pages/cameraCatlog/CameraCatlog";
import Billing from "./pages/billing/Billing";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import TestingCamera from "./pages/testingCamera/TestingCamera";
import { ShopContextProvider } from "./context/shopContext";
import MaintainDashboard from "./pages/maintainDashboard/MaintainDashboard";
import ViewCamera from "./pages/viewcameras/ViewCamera";
import DeleteCamera from "./pages/deleteCamera/deleteCamera";
import UpdateCamera from "./pages/updateCamera/UpdateCamera";
import AddCamera from "./pages/addcamera/AddCamera";
import AddUser from "./pages/addUser/AddUser";
import AddSchedule from "./pages/addSchedule/AddSchedule";
import AddMember from "./pages/addMember/AddMember";
import AddAlert from "./pages/addAlert/addAlert";
import EditUser from "./pages/editUser/EditUser";
import EditSchedule from "./pages/editSchedule/EditSchedule";
import EditMaintainanceTeam from "./pages/editMaintainanceTeam/EditMaintainanceTeam";
import EditAlert from "./pages/editAlert/EditAlert";

function Content() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  const showTopbarAndSidebar = !isAuthPage;

  return (
    <>
      {showTopbarAndSidebar &&( 
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <ShopContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/viewcamera" element={<ViewCamera />} />
                <Route path="/updatecamera" element={<UpdateCamera />} />
                <Route path="/deletecamera" element={<DeleteCamera />} />
                <Route path="/addcamera" element={<AddCamera/>} />
                <Route path="/schedules" element={<Schedule />} />
                <Route path="/maintainanceTeam" element={<MaintainanceTeam/>}/>
                <Route path="/alerts" element={<Alerts />} />
        
                <Route path="/help" element={<Help />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/cameraCatlog" element={<CameraCatlog/>}/>
                <Route path="/billing" element={<Billing />} />
                <Route path="/testingCamera" element={<TestingCamera />} />
                <Route path='/maintainDashboard' element={<MaintainDashboard/>} />
                <Route path='/addUser' element={<AddUser/>} />
                <Route path='/addSchedule' element={<AddSchedule/>} />
                <Route path='/addMember' element={<AddMember/>} />
                <Route path='/addAlert' element={<AddAlert/>} />


                <Route path="/editUsers/:userId" element={<EditUser />} />
                <Route path= "/editSchedule/:userId" element={<EditSchedule/>} />
                <Route path= "/editMaintainanceTeam/:userId" element={<EditMaintainanceTeam/>} />
                <Route path= "/editAlert/:userId" element={<EditAlert/>} />

              </Routes>
            </ShopContextProvider>
          </div>
        </>
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;

