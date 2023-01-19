import { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function useActiveVacancies() {
    const {data, loading, error} = useFetch('http://www.mocky.io/v2/5d6fb6b1310000f89166087b');
    let vacancies = [];

    if (data) {
        vacancies = data.vagas.filter(vacancy => vacancy.ativa);

        vacancies.forEach(vacancy => {
            const location = vacancy.localizacao;
            vacancy.location = location ? `${location.bairro} - ${location.cidade}, ${location.pais}` : "Remoto";
        });
    }

    return {vacancies, loading, error};
}