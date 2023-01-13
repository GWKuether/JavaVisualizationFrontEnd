import GlobalSalesChart from './Component/GlobalSalesChart/GlobalSalesChart';
import GameSearch from './Component/GameSearch/GameSearch';
import GenreSales from './Component/GenreSales/GenreSales';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <div className='main-background'>
      <GameSearch />
      <GlobalSalesChart />
      <GenreSales/>
    </div>
  );
}

export default App;
