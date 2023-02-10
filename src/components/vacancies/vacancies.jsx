import useActiveVacancies from "../../hooks/useActiveVacancies";
import './vacancies.css'
import bottomImage from "./../../images/foto-bottom.png";

export default function Vacancies() {
    const {vacancies, loading, error} = useActiveVacancies();

    return (
        <section id="vacancies" className="vacancies">
            <img src={bottomImage} alt="Evento da elo7." />
            <h2>Vagas em aberto</h2>
            {loading ? <h3>Carregando...</h3>: null}
            {error ? <h3>Erro ao carregar as vagas!</h3> : null}
            {vacancies.length > 0 && <>
                <h3>Desenvolvimento</h3>
                <ul>{
                    vacancies.map((vacancy, index) => 
                        <li key={index}>
                            <span><a href={vacancy.link}>{vacancy.cargo}</a></span>
                            <span>{vacancy.location}</span>
                        </li>
                    )
                }</ul>
            </>
            }
        </section>
    );
}