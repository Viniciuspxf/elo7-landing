import Link from "../link/link";
import "./header.css";
import headerImage from "../../images/foto-header.png";

export default function Header() {
    return (
        <header className="landing-header">
            <div className="landing-image">
                <img src={headerImage} alt="Todos os membros da equipe." />
                <h1>Trabalhe no Elo7</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit placerat odio,
                quis pretium nulla venenatis sit amet. Sed scelerisque odio in nisl aliquam consequat. Mauris cursus sed
                nulla sed tempor. Aliquam fringilla nibh eros, sit amet elementum purus venenatis in.
            </p>
            <nav>
                <Link url="#vacancies">VAGAS EM ABERTO</Link>
            </nav>
        </header>
    );
}