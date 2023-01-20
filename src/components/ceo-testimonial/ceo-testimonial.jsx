import videoPlaceholder from '../../images/placeholder-video.png';

import './ceo-testimonial.css';

export default function CEOTestimonial() {
    return (
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
    );
}