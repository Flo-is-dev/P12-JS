import logo1 from "../assets/img/logo1.svg"
import logo2 from "../assets/img/logo2.svg"

const Navigation = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
        </div>
        <nav>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Profil</a></li>
                <li><a href="#">Réglage</a></li>
                <li><a href="#">Communauté</a></li>
            </ul>
        </nav>
    </header>
  )
}
export default Navigation