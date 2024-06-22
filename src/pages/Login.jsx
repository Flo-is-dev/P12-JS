import { NavLink } from "react-router-dom";
import logo1 from "../assets/img/logo1.svg"
import logo2 from "../assets/img/logo2.svg"
import { useState } from "react";

const Login = () => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

  return (
    <div className="background">
       <div className="loginCardContainer"><div className="logo">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                </div>
            <div className="loginContainer">
                
                <span className="title">Select Profile:</span>
                <div className="btnUserContainer">
                    <NavLink to="/User">
                        <button>User 12</button>
                    </NavLink>
                    <NavLink to="/User">
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
