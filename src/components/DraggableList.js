import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

function DraggableFunction() {

  const [state, setState] = useState([
    { id: 1, name: "With coaching everyone can change" },
    { id: 2, name: "Change programmes rarely deliver the intended benefits" },
    { id: 3, name: "Change comes through empowerment within the worksforce" },
    { id: 4, name: "Change is essential for companies to grow" },
  ]);

  const style = { width: 600, margin: 50 };

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    margin: "10px"
  };

  return (
    <div style={style}>
    <h2>Rank the four statements in order of increasing aggreement in the table below:</h2>
    <h3>Most agrrement to least agreement</h3>
    <ol>
        <h3>
        <ReactSortable list={state} setList={setState}>
            {state.map((item) => (
                <li style={myStyle} key={item.id}>{item.name}</li>
            ))}

        </ReactSortable>
        </h3>
    </ol>
    </div>
  );
};

export default DraggableFunction;