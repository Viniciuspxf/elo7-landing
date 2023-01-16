import './benefit-card.css'

export default function BenefitCard( {image, heading, text} ) {
    return (
        <article className="benefit-card">
            <img src={image} alt={"Ícone " + heading} />
            <h1>{heading}</h1>
            <p>{text}</p>
        </article>
    );
}