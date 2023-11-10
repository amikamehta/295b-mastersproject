import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./components/topbar/topbar.css"
import "./app.css"
import Home from "./pages/Home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Schedule from "./pages/schedule/Schedule";
import MaintainanceTeam from "./pages/maintainanceTeam/MaintainanceTeam";
import Alerts from "./pages/alerts/Alerts";
import EditUser from "./pages/editUser/EditUser";

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
      </Routes>
      </div>
    </Router>
  );
}

export default App;
