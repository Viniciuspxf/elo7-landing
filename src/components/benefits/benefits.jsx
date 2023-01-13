import BenefitCard from "../benefit-card/benefit-card";
import relaxationImage from "../../images/descontracao.png";
import qualityImage from "../../images/qualidade.png";
import activitiesImage from "../../images/atividades.png";
import Link from "../link/link";

import './benefits.css'

export default function Benefits() {
    const qualityText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio, \
    quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed \
    nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in.";

    const activitiesText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio, \
    quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed \
    nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in. Curabitur consequat \
    massa vitae faucibus ullamcorper.";

    const relaxationText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio, \
    quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed \
    nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in. Curabitur consequat \
    massa vitae faucibus ullamcorper. Curabitur ante magna, dictum quis aliquam eu, varius vitae sapien.";


    return (
        <div className="benefits">
            <div className="benefits-cards">
                <BenefitCard benefitImage={qualityImage} benefitHeading="QUALIDADE DE VIDA" benefitText={qualityText}/>
                <BenefitCard benefitImage={activitiesImage} benefitHeading="AMBIENTE DESCONTRAÍDO" benefitText={activitiesText}/>
                <BenefitCard benefitImage={relaxationImage} benefitHeading="ATIVIDADES EXTRAS" benefitText={relaxationText}/>
            </div>
            <Link url="https://www.techtudo.com.br/tudo-sobre/elo7/">SAIBA MAIS</Link>
        </div>
    );
}