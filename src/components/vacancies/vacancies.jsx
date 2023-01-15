import useActiveVacancies from "../../hooks/useActiveVacancies";
import './vacancies.css'
import bottomImage from "./../../images/foto-bottom.png";

export default function Vacancies() {
    const {vacancies, loading, error} = useActiveVacancies();

    return (
        <section id="vacancies" className="vacancies">
            <img src={bottomImage} alt="Evento da elo7." />
            <h1>Vagas em aberto</h1>
            {loading ? <h2>Carregando...</h2>: null}
            {error ? <h2>Erro ao carregar as vagas!</h2> : null}
            {vacancies.length > 0 && <>
                <h2>Desenvolvimento</h2>
                <table> 
                    <tbody>{
                        vacancies.map((vacancy, index) => 
                            <tr key={index}>
                                <td><a href={vacancy.link}>{vacancy.cargo}</a></td>
                                <td>{vacancy.location}</td>
                            </tr>
                        )
                    }</tbody>
                </table>
            </>
            }
        </section>
    );
}