import React,{useState} from 'react';
import "./login.css"
import { Email, Person } from '@material-ui/icons';
import { Password } from '@mui/icons-material';
import datatransmit from '../../services';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login({ setUserType }) {

    const regInput = React.useRef();
      // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    
    // prevent the form from refreshing the whole page
    console.log(email);
    console.log(password);
    const configuration = {
        
        method: "post",
        url: "http://localhost:4000/login/user/",
        data: {
          email,
          password,
        },
      };
  
      // make the API call
      axios(configuration)
        .then((result) => {
          console.log(result.data)
          var size = Object.keys(result.data).length;
          console.log(size)
          if(size === 1){

          }
          else{

            navigate('/')

          }
        })
        .catch((error) => {
          error = new Error();
        });

        setAction("Login")
  };
  const hanldeSIngup = (e) => {
    // prevent the form from refreshing the whole page
   
    // set configurations
    
    const configuration = {
      method: "post",
      url: "http://localhost:4000/login/",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        
      })
      .catch((error) => {
        error = new Error();
      });
      setAction("Sing up")
  };

  
const [action, setAction] = useState('Login');
  return (  
    <div className='logincontainer'>
        <div className='headerLogin'>
            <div className='textLogin'>{action}</div>
            <div className='underlineLogin'></div>
        </div>

        <div className='inputs'>
            {action==="Login" ? <div></div>:<div className='input'> 
            <Person   className="sidebarIconLogin"  />
                <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
            </div>}
         

            <div className='input'>
            <Email className="sidebarIconLogin" />
                <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className='input' >
                <Password className="sidebarIconLogin" />
                <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>

            </div>
        
        <div className='submitContainer'>
        
            <div className={action === "Login"?"submit gray":"submit"}  onClick={(e) => handleSubmit(e)}>Login</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={(e) => hanldeSIngup(e)}>Sign Up</div>
        </div>
    </div>
    </div>

  );
}


