import './App.css';
import CSVReader from './components/CSVReader'
import HeatMap from './components/HeatMap'
import SliderComponent from './components/Slider'
import DraggableFunction from './components/DraggableList'

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <h1>Heat Map Example</h1>
      </header>
      {/* <CSVReader></CSVReader>
      <HeatMap className="Map"></HeatMap> */}
      <SliderComponent />
      <DraggableFunction />
    </div>
  );
}



export default App;
