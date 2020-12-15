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

  return (
    <div style={style}>
    <h2>Rank the four statements in order of increasing aggreement in the table below:</h2>
    <ol>
        <h3>
        <ReactSortable list={state} setList={setState}>
            {state.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}

        </ReactSortable>
        </h3>
    </ol>
    </div>
  );
};

export default DraggableFunction;