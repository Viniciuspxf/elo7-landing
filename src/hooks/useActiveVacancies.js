import { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function useActiveVacancies() {
    const {data, loading, error} = useFetch('http://www.mocky.io/v2/5d6fb6b1310000f89166087b');
    const [vacancies, setVacancies] = useState([]);

    useEffect(()=> {
        if (data) {
            let vacanciesData = data.vagas;
            vacanciesData = vacanciesData.filter(vacancy => vacancy.ativa);
            vacanciesData.forEach(vacancy => {
                const location = vacancy.localizacao;
                vacancy.location = location ? `${location.bairro} - ${location.cidade}, ${location.pais}` : "Remoto";
            });
            setVacancies(vacanciesData);
        }
    }, [data]);


    return {vacancies, loading, error};
}