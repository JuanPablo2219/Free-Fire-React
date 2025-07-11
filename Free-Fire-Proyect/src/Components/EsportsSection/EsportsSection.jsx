import image_Esports_1 from '../../img/esport1.webp';
import image_Esports_2 from '../../img/esports2.webp';
import image_Esports_3 from '../../img/esport3.webp';
import image_Esports_4 from '../../img/esports4.webp';
import './EsportsSection.css'

function EsportsSection() {
    return (
        <section id='esports'>
            <div className='esports_tag'>
                <h1>Esports</h1>
            </div>
            <div className='boxer'>
                <div className='box_image'>
                    <img src={image_Esports_1} alt="" />
                    <img src={image_Esports_2} alt="" />
                </div>
                <div className='box_image'>
                    <img src={image_Esports_3} alt="" />
                    <img src={image_Esports_4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default EsportsSection