import Slider from "react-slick";
import { NEWS_DATA } from "../../data";
import './NewNotice.css'

function NewNotice() {

    return (
        <section id="news-section">
            <div className="news-header">
                <h1>Noticias y Actualizaciones</h1>
                <p>¡Mantente al día con lo último de Free Fire!</p>
            </div>

            <div className="news-cards">
                {NEWS_DATA.map((news) => (
                    <div key={news.id} className="news-card">
                        <img src={news.image} alt={news.title} />
                        <div className="news-content">
                            <h2>{news.title}</h2>
                            <p>{news.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NewNotice
