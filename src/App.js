import GlobalSalesChart from './Component/GlobalSalesChart/GlobalSalesChart';
import './App.css';
import GameSearch from './Component/GameSearch/GameSearch';
import GenreSales from './Component/GenreSales/GenreSales';

function App() {
  return (
    <div>
      <GameSearch />
      <GlobalSalesChart />
      <GenreSales/>
    </div>
  );
}

export default App;
