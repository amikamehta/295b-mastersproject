import React,{useState} from 'react';
import "./login.css"
import { Email, Person } from '@material-ui/icons';
import { Password } from '@mui/icons-material';

export default function Login({ setUserType }) {

const [action, setAction] = useState('Login');
  return (  
    <div className='logincontainer'>
        <div className='headerLogin'>
            <div className='textLogin'>{action}</div>
            <div className='underlineLogin'></div>
        </div>

        <div className='inputs'>
            {action==="Login" ? <div></div>:<div className='input'>
            <Person className="sidebarIconLogin" />
                <input type='text' placeholder='Name'/>
            </div>}
         

            <div className='input'>
            <Email className="sidebarIconLogin"/>
                <input type='email' placeholder='Email'/>
            </div>

            <div className='input'>
                <Password className="sidebarIconLogin"/>
                <input type='password' placeholder='Password'/>
            </div>
        
        <div className='submitContainer'>
            <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        </div>
    </div>
    </div>

  );
}


