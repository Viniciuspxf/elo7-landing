import qualityImage from "../../images/qualidade.png";

export default function BenefitCard() {
    return (
        <div>
            <img src={qualityImage} />
            <h1>QUALIDADE DE VIDA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio,
                quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed
                nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in.
            </p>
        </div>
    );
}