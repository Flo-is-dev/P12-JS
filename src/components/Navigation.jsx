import logo1 from "../assets/img/logo1.svg"
import logo2 from "../assets/img/logo2.svg"
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">
                        <button>Accueil</button>
                    </NavLink></li>
                <li><a href="#">Profil</a></li>
                <li><a href="#">Réglage</a></li>
                <li><a href="#">Communauté</a></li>
            </ul>
        </nav>
    </header>
  )
}
export default Navigation