import BenefitCard from "../benefit-card/benefit-card";
import relaxationImage from "../../images/descontracao.png";
import qualityImage from "../../images/qualidade.png";
import activitiesImage from "../../images/atividades.png";
import Link from "../link/link";

import './benefits.css'

export default function Benefits() {
    const qualityText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio, " +
    "quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed " +
    "nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in.";

    const activitiesText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio, " +
    "quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed " +
    "nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in. Curabitur consequat " +
    "massa vitae faucibus ullamcorper.";

    const relaxationText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio, " +
    "quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed " +
    "nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in. Curabitur consequat " +
    "massa vitae faucibus ullamcorper. Curabitur ante magna, dictum quis aliquam eu, varius vitae sapien.";

    const benefitsInfo = [
        {
            text: qualityText,
            heading: "qualidade de vida",
            image: qualityImage
        },
        {
            text: relaxationText,
            heading: "ambiente descontraído",
            image: relaxationImage
        },
        {
            text: activitiesText,
            heading: "atividades extras",
            image: activitiesImage
        }
    ];


    return (
        <section className="benefits">
            <div className="benefits-cards">
                {
                    benefitsInfo.map( (benefitInfo, index) =>
                        <BenefitCard key={index} {...benefitInfo}/>
                    )
                }
            </div>
            <Link url="https://www.techtudo.com.br/tudo-sobre/elo7/">saiba mais</Link>
        </section>
    );
}