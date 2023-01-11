import videoPlaceholder from '../../images/placeholder-video.png';
import camilaImage from '../../images/camila.png';
import gutoImage from '../../images/guto.png';
import davidImage from '../../images/david.png';
import beatrizImage from '../../images/beatriz.png';

export default function Team() {
    return (
        <div>
            <article>
                <video poster={videoPlaceholder} controls></video>
                <div>
                    <h1>PALAVRA DO CEO</h1>
                    <h2>Carlos Curioni</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio,
                        quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed
                        nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in.
                    </p>
                </div>
            </article>
            <article>
                <h1>CONHEÇA NOSSO TIME FORA DE SÉRIE</h1>
                <div>
                    <img src={camilaImage} alt="Camila" />
                    <img src={gutoImage} alt="Guto" />
                    <img src={davidImage} alt="David" />
                    <img src={beatrizImage} alt="Beatriz" />
                </div>
            </article>
        </div>
    );
}