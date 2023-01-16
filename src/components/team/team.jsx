import videoPlaceholder from '../../images/placeholder-video.png';
import camilaImage from '../../images/camila.png';
import gutoImage from '../../images/guto.png';
import davidImage from '../../images/david.png';
import beatrizImage from '../../images/beatriz.png';

import './team.css';

export default function Team() {
    return (
        <section className='team'>
            <article className='testimonial'>
                <video poster={videoPlaceholder} controls></video>
                <div>
                    <h1>Palavra do CEO</h1>
                    <h2><em>Carlos Curioni</em></h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio,
                        quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed
                        nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in.
                    </p>
                </div>
            </article>
            <article className='know-our-team'>
                <h1>Conheça nosso time fora de série</h1>
                <div>
                    <img src={camilaImage} alt="Camila" />
                    <img src={gutoImage} alt="Guto" />
                    <img src={davidImage} alt="David" />
                    <img src={beatrizImage} alt="Beatriz" />
                </div>
            </article>
        </section>
    );
}