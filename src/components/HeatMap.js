import React from 'react';
import '../App.css';
// eslint-disable-next-line
import { shuffle } from "lodash"

import HeatMap from "react-heatmap-grid";

const xLabels = new Array(25).fill(0).map((_, i) => `${i}`);

const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = ["0", "25", "50", "75", "100", "125", "150", "175"];

let counter = 1;
// eslint-disable-next-line
const data = new Array(yLabels.length).fill(0).map(()=> {
  for (let i=0; i < yLabels.length; i++) {
    const rowArray = [];
    for (let j=0; j < xLabels.length; j++) {
      rowArray.push(counter)
      counter++
    }
    return rowArray
    // return shuffle(rowArray)
  }
})

// const randomNumbers = function() {
//   let newArray = []
//   return newArray = shuffle(data)
// }

const COLOUR = {
    BLUE: {r: 29, g: 72, b: 119},
    GREEN: {r: 27, g: 138, b: 90},
    YELLOW: {r: 251, g: 176, b: 33},
    ORANGE: {r: 246, g: 136, b: 56},
    RED: {r: 238, g: 62, b: 50},
}

const getRgba = (colour, opacity) => {
    const {r, b, g} = colour;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}


const dataColour = function(value, max, min) {
  let result = ``; 
  const opacity = 1 - (max - value) / (max - min)
  if (value < 41) {
    result =  getRgba(COLOUR.BLUE, opacity)
  } else if (value >= 40 && value <= 81) {
    result = getRgba(COLOUR.GREEN, opacity)
  } else if (value > 80 && value < 121) {
    result = getRgba(COLOUR.YELLOW, opacity)
  } else if (value > 120 && value < 161) {
    result = getRgba(COLOUR.ORANGE, opacity)
  } else {
    result = getRgba(COLOUR.RED, opacity)
  }
  return result
}

function HeatMapComponent() {
  return (
    <div className="App-header">
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
              background: dataColour(value, max, min),
              fontSize: "11.5px",
              color: "#444"
            })}
            cellRender={value => value && <div>{value}</div>}
        />
      </div>
    </div>
  );
}



export default HeatMapComponent;
