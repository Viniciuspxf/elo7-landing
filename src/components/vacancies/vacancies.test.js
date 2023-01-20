import { render, screen } from '@testing-library/react';
import { AxiosError } from 'axios';
import useActiveVacancies from "../../hooks/useActiveVacancies";
import Vacancies from './vacancies';

jest.mock('../../hooks/useActiveVacancies');


const vacanciesData = [
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
    
    it('should render the component with vacancies', () => {

      useActiveVacancies.mockReturnValue({vacancies: vacanciesData, loading: false, error: false});
      
      render(<Vacancies />);

      const listItems = screen.getAllByRole("listitem");
      const vacancyName = screen.getAllByText("Desenvolvedor Java Junior");
      const vacancyLocation = screen.getAllByText("Remoto");

      expect(listItems).toHaveLength(2);
      expect(vacancyName[0]).toBeVisible();
      expect(vacancyLocation[0]).toBeVisible();
    });


    it('should render the component with loading message', () => {

      useActiveVacancies.mockReturnValue({vacancies: [], loading: true, error: false});
      
      render(<Vacancies />);

      const loadingElement = screen.getByText("Carregando...");
      
      expect(()=>screen.getAllByRole("listitem")).toThrowError();
      expect(loadingElement).toBeVisible();
    });


    it('should render the component with error message', () => {

      useActiveVacancies.mockReturnValue({vacancies: [], loading: false, error: new AxiosError()});
      
      render(<Vacancies />);

      const errorElement = screen.getByText("Erro ao carregar as vagas!");
      
      expect(()=>screen.getAllByRole("listitem")).toThrowError();
      expect(errorElement).toBeVisible();
    });
  });