import logo_free_fire from '../../img/logo.png';
import image_garena from '../../img/Gareena.png';
import './Header.css';

function Header() {
    return (
        <div id="contaner">
            <nav>
                <div className="logo">
                    <img src={logo_free_fire} alt="" />
                </div>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Personajes</a></li>
                    <li><a href="#">Juegos</a></li>
                    <li><a href="#">Servicio</a></li>
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
        </div>
    )
}

export default Header
