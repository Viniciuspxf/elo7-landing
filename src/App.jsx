import './App.css';
import Benefits from './components/benefits/benefits';
import Header from './components/header/header';
import Team from './components/team/team';
import Vacancies from './components/vacancies/vacancies';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Team/>
        <Benefits/>
        <Vacancies/>
      </main>
    </>
  );
}

export default App;
