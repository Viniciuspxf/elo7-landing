import CEOTestimonial from '../ceo-testimonial/ceo-testimonial';
import TeamPictures from '../team-pictures/team-pictures';

import './team.css';


export default function Team() {
    return (
        <section className='team'>
            <CEOTestimonial/>
            <TeamPictures/>
        </section>
    );
}