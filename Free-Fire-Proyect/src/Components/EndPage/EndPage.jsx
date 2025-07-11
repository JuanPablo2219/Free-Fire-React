import image_play_store from '../../img/playstore.png';
import image_app_store from '../../img/app store.png';
import './EndPage.css';

function EndPage() {
    return (
        <section id='end_page'>
            <div className="download_app">
                <div className="app_store">
                    <img src={image_play_store} alt="App Store" />
                </div>
                <div className="play_store">
                    <img src={image_app_store} alt="Play Store" />
                </div>
            </div>
        </section>
    )
}

export default EndPage
