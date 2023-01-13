import Link from "../link/link";
import "./header.css";

export default function Header() {
    return (
        <div className="landing-header">
            <header>
                <h1>Trabalhe no Elo7</h1>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio,
                quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed
                nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in.
            </p>
            <Link url="#vacancies">VAGAS EM ABERTO</Link>
        </div>
    );
}