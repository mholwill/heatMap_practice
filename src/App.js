import './App.css';
import CSVReader from './components/CSVReader'
import HeatMap from './components/HeatMap'

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <h1>Heat Map Example</h1>
        <CSVReader></CSVReader>
        <HeatMap></HeatMap>
      </header>
    </div>
  );
}



export default App;
