import image_group from '../../img/group.png';
import './AboutSection.css'

function AboutSection() {
    return (
        <section id="about">
        <h1 className="tag">About</h1>
        <div className="main">
            <img src={image_group} alt="Image Group" />
            <div className="about_text">
                <h1>
                    FFWS 2022 SENTOSA
                </h1>
                <p>
                    Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places
                    you on a remote island where you are pit aganinst 49 other players, all seeking survival
                </p>
                <button>GO TO</button>
            </div>
        </div>
    </section>
    )
}

export default AboutSection
