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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Character</a></li>
                    <li><a href="#">Esports</a></li>
                    <li><a href="#">Service</a></li>
                </ul>
                <div className="btn">
                    <a href="#">Download</a>
                </div>
            </nav>

            <div className="tag_line">
                <div className="gareena_logo">
                    <img src={image_garena} alt="" />
                        <p>Garena</p>
                </div>
                <h2>The Best Game</h2>
                <h1>Free Fire</h1>
            </div>
        </div>
    )
}

export default Header
