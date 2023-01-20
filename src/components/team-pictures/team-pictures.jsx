import camilaImage from '../../images/camila.png';
import gutoImage from '../../images/guto.png';
import davidImage from '../../images/david.png';
import beatrizImage from '../../images/beatriz.png';

import './team-pictures.css';

export default function TeamPictures() {
    return (
        <article className='team-pictures'>
            <h1>Conheça nosso time fora de série</h1>
            <div>
                <img src={camilaImage} alt="Camila" />
                <img src={gutoImage} alt="Guto" />
                <img src={davidImage} alt="David" />
                <img src={beatrizImage} alt="Beatriz" />
            </div>
        </article>
    );
}
