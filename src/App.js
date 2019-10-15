import React from "react";
import { VictoryScatter } from "./victory-scatter/src/index";
import { VictoryTooltip } from "./victory-tooltip/src/index";

export const App = () => {
  
  const parentStyle = { border: "1px solid #ccc", margin: "2%", maxWidth: "40%" };

  return (
    <div>
      <VictoryScatter
        style={{ parent: parentStyle }}
        labelComponent={
          <VictoryTooltip 
            //dy={0} 
            orientation={'left'}
            />
        }
        labels={({ datum }) => `hi #${datum.x}`}
        size={({ active }) => (active ? 5 : 3)}
        data={[{ x: 3, y: 3 }]}
      />
    </div>
  );
};
