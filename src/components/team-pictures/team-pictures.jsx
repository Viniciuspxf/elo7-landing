import camilaImage from '../../images/camila.png';
import gutoImage from '../../images/guto.png';
import davidImage from '../../images/david.png';
import beatrizImage from '../../images/beatriz.png';

import './team-pictures.css';

export default function TeamPictures() {
    const images = [
        { 
            picture: camilaImage,
            alt: 'Camila.'
        
        },
        { 
            picture: gutoImage,
            alt: 'Carlos Augusto.'
        
        },
        { 
            picture: davidImage,
            alt: 'David.'
        
        },
        { 
            picture: beatrizImage,
            alt: 'Beatriz.'
        
        }
    ];

    return (
        <article className='team-pictures'>
            <h2>Conheça nosso time fora de série</h2>
            <div>
                {
                    images.map((image, index) => 
                        <img key={index} src={image.picture} alt={image.alt}/>
                    )
                }
            </div>
        </article>
    );
}
