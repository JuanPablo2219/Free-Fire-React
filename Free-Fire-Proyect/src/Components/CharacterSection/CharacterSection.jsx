import { CHARACTERS } from "../../data";
import './CharacterSection.css';

function CharacterSection() {
    return (
        <section id='character'>
            <div className="title">
                <h1>Personajes</h1>
            </div>

            <div className='box'>
                {CHARACTERS.map((ch) => {
                    return (
                        <div className="cards" key={ch.id}>
                            <img src={ch.image} alt="image characters" />
                            <h2>{ch.title}</h2>
                            <p>{ch.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CharacterSection
