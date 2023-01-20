import useActiveVacancies from "./useActiveVacancies";
import useFetch from "./useFetch";

jest.mock('./useFetch');

const fetchedData = 
{ vagas: [
  {
    cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
    ativa: true,
    link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
    localizacao: {
      bairro: "Vila Olímpia",
      cidade: "São Paulo",
      pais: "Brasil"
    }
  },
  {
    cargo: "Desenvolvedor Mobile Junior (Android)",
    ativa: false,
    link: "http://elo7.dev/vaga/desenvolvedor-mobile-junior",
    localizacao: {
      bairro: "Vila Olímpia",
      cidade: "São Paulo",
      pais: "Brasil"
    }
  },
  {
    cargo: "Desenvolvedor Java Junior",
    ativa: true,
    link: "http://elo7.dev/vaga/desenvolvedor-java-jr"
  }
]};

const expectedResult = [
  {
    cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
    ativa: true,
    link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
    localizacao: {
      bairro: "Vila Olímpia",
      cidade: "São Paulo",
      pais: "Brasil"
    },
    location: "Vila Olímpia - São Paulo, Brasil"
  },
  {
    cargo: "Desenvolvedor Java Junior",
    ativa: true,
    link: "http://elo7.dev/vaga/desenvolvedor-java-jr",
    location: "Remoto"
  }
];

describe('useActiveVacancies', () => {
  
  it('should return active vacancies with location processing', () => {
    useFetch.mockReturnValue({data: fetchedData, loading: false, error: false});
  
    const {vacancies} = useActiveVacancies();
  
    expect(vacancies).toEqual(expectedResult);
  });
});
