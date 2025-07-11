import logo_free_fire from '../../img/logo.png';
import image_garena from '../../img/Gareena.png';
import useScrollDirection  from "../../Hooks/useScrollDirection";
import './Header.css';

function Header() {
    const showNavbar = useScrollDirection();

    return (
        <section id="contaner">
            <nav className={showNavbar ? "show" : "hide"}>
                <div className="logo">
                    <img src={logo_free_fire} alt="" />
                </div>
                <ul>
                    <li><a href="#contaner">Inicio</a></li>
                    <li><a href="#about">Acerca de</a></li>
                    <li><a href="#character">Personajes</a></li>
                    <li><a href="#esports">Juegos</a></li>
                    <li><a href="#end_page">Servicio</a></li>
                </ul>
                <div className="btn">
                    <a href="#">Descargar</a>
                </div>
            </nav>

            <div className="tag_line">
                <div className="gareena_logo">
                    <img src={image_garena} alt="" />
                    <p>Garena</p>
                </div>
                <h2>Free Fire</h2>
                <h1>El mejor juego</h1>
            </div>
        </section>
    )
}

export default Header
