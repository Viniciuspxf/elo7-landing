import './benefit-card.css'

export default function BenefitCard( {benefitImage, benefitHeading, benefitText} ) {
    return (
        <article className="benefit-card">
            <img src={benefitImage} alt={"ÍCONE " + benefitHeading} />
            <h1>{benefitHeading}</h1>
            <p>{benefitText}</p>
        </article>
    );
}