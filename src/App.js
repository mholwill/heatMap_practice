import './App.css';
import { shuffle } from "lodash"

import HeatMap from "react-heatmap-grid";
// import { readString } from 'react-papaparse'

const xLabels = new Array(25).fill(0).map((_, i) => `${i}`);

const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = ["0", "25", "50", "75", "100", "125", "150", "175"];

let counter = 1;
const data = new Array(yLabels.length).fill(0).map(()=> {
  for (let i=0; i < yLabels.length; i++) {
    const rowArray = [];
    for (let j=0; j < xLabels.length; j++) {
      rowArray.push(counter)
      counter++
    }
    // return rowArray
    return shuffle(rowArray)
  }
})

// const randomNumbers = function() {
//   let newArray = []
//   return newArray = shuffle(data)
// }


const gradient = function(value, max, min) {
  let result = ``; 
  if (value < 41) {
    result =  `rgb(29, 72, 119, ${1 - (max - value) / (max - min)})`
  } else if (value >= 40 && value <= 81) {
    result = `rgb(27, 138, 90, ${1 - (max - value) / (max - min)})`
  } else if (value > 80 && value < 121) {
    result = `rgb(251, 176, 33, ${1 - (max - value) / (max - min)})`
  } else if (value > 120 && value < 161) {
    result = `rgb(246, 136, 56, ${1 - (max - value) / (max - min)})`
  } else {
    result = `rgb(238, 62, 50, ${1 - (max - value) / (max - min)})`
  }
  return result
}

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <h1>Heat Map Example</h1>
        <div style={{ fontSize: "13px" }}>
          <HeatMap
            xLabels={xLabels}
            yLabels={yLabels}
            xLabelsLocation={"bottom"}
            xLabelsVisibility={xLabelsVisibility}
            xLabelWidth={60}
            data={data}
            squares
            height={60}
            onClick={(x, y, event) => {
              alert(`Clicked ${x}, ${y} and the value is ${event.target.textContent}`)
            }}
            cellStyle={(background, value, min, max, data, x, y) => ({
              background: gradient(value, max, min),
              fontSize: "11.5px",
              color: "#444"
            })}
            cellRender={value => value && <div>{value}</div>}
        />
      </div>
      </header>
    </div>
  );
}



export default App;
