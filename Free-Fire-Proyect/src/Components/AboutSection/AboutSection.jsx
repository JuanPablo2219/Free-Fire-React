import image_group from '../../img/group.png';
import './AboutSection.css'

function AboutSection() {
    return (
        <section id="about">
        <h1 className="tag">Acerca de</h1>
        <div className="main">
            <img src={image_group} alt="Image Group" />
            <div className="about_text">
                <h1>
                    FFWS 2025 SENTOSA
                </h1>
                <p>
                    Free Fire es el juego de disparos de supervivencia definitivo disponible para móviles.
                    Cada partida de 10 minutos te sitúa en una isla remota donde te enfrentas a otros 49 jugadores,
                     todos en busca de supervivencia.
                </p>
                <button>Mas Información</button>
            </div>
        </div>
    </section>
    )
}

export default AboutSection
