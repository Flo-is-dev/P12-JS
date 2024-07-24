import { NavLink } from "react-router-dom";
import logo1 from "../assets/img/logo1.svg"
import logo2 from "../assets/img/logo2.svg"
import { useState } from "react";
import { ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';

const Login = () => {

    const {toggleCallData,callApi } = useContext(ThemeContext)
    console.log("is Switch ON?",callApi);
    const [checked, setChecked] = useState(callApi);


    const handleChange = () => {
        setChecked(!checked);
        toggleCallData()
    };
    
  return (
    <div className={`background ${checked ? 'active' : ''}`}>
        <div className={`backgroundApi ${checked ? 'active' : ''}`}></div>
        <div className="loginCardContainer"><div className="logo">
                            <img src={logo1} alt="logo sportsee" />
                            <img src={logo2} alt="logo sportsee text" />
                        </div>
                    <div className="loginContainer">
                        
                        <span className="title">Select Profile:</span>
                        <div className="btnUserContainer">
                            <NavLink to="/User/12">
                                <button>User 12</button>
                            </NavLink>
                            <NavLink to="/User/18">
                                <button>User 18</button>
                            </NavLink>
                        </div>
                        <span className="title">Select Data:</span>
                        <label className="switch">
                            <input type="checkbox" checked={checked} onChange={handleChange} />
                            <span className="slider"></span>
                        </label>
                    </div>
        </div>
    </div>
  );
};
export default Login;
