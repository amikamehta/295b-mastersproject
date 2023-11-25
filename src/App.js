import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
<<<<<<< HEAD
import "./components/topbar/topbar.css";
import "./app.css";
import Home from "./pages/Home";
=======
import "./components/topbar/topbar.css"
import "./App.css"
import Home from "./pages/Home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
>>>>>>> 2259f1dc20038b7f743313bcffabb3ef49503096
import UserList from "./pages/userList/UserList";
import Schedule from "./pages/schedule/Schedule";
import MaintainanceTeam from "./pages/maintainanceTeam/MaintainanceTeam";
import Alerts from "./pages/alerts/Alerts";
import EditUser from "./pages/editUser/EditUser";
<<<<<<< HEAD
import Help from "./pages/help/Help";
import Faq from "./pages/Faq/Faq";
import CameraCatlog from "./pages/cameraCatlog/CameraCatlog";
import Billing from "./pages/billing/Billing";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import TestingCamera from "./pages/testingCamera/TestingCamera";
import { ShopContextProvider } from "./context/shopContext";
import MaintainDashboard from "./pages/maintainDashboard/MaintainDashboard";

function Content() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  const showTopbarAndSidebar = !isAuthPage;

=======
import AddCamera from "./pages/addcamera/AddCamera";
import UpdateCamera from "./pages/updateCamera/UpdateCamera";
import ViewCamera from "./pages/viewcameras/ViewCamera";
import DeleteCamera from "./pages/deleteCamera/deleteCamera";
function App() {
>>>>>>> 2259f1dc20038b7f743313bcffabb3ef49503096
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
                <Route path="/schedules" element={<Schedule />} />
                <Route path="/maintainanceTeam" element={<MaintainanceTeam/>}/>
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/editUsers/:userId" element={<EditUser />} />
                <Route path="/help" element={<Help />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/cameraCatlog" element={<CameraCatlog/>}/>
                <Route path="/billing" element={<Billing />} />
                <Route path="/testingCamera" element={<TestingCamera />} />
                <Route path='/maintainDashboard' element={<MaintainDashboard/>} />
              </Routes>
            </ShopContextProvider>
          </div>
        </>
      )}

      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
=======
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
>>>>>>> 2259f1dc20038b7f743313bcffabb3ef49503096
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
