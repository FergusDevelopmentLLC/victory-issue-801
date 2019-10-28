import React from "react";
import { VictoryScatter } from "./victory-scatter/src/index";
import { VictoryTooltip } from "./victory-tooltip/src/index";

export const App = () => {
  
  return (
    
    <div style={{width:"350px", margin: '100px', border:"1px solid #ccc"}}>
      <VictoryScatter
        size={5}
        labelComponent={<VictoryTooltip orientation={'left'} />}
        labels={({ datum }) => `(${datum.x}, ${datum.y})`}
        data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
        horizontal={false}
      />
    </div>
    
  )
}
