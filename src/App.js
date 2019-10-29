import React from "react";
import { VictoryScatter } from "./victory-scatter/src/index";
import { VictoryTooltip } from "./victory-tooltip/src/index";
import { VictoryLabel } from "./victory-core/src";

export const App = () => {
  
  return (
    <div style={{width:"500px"}}>
      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  horizontal={false}
/>

(No labelComponent, horizontal = false, so VictoryLabel on top)
        `
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          horizontal={false}
        />
      </div>
      <hr/>

      <pre>{
` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  horizontal={true}
/>

(No labelComponent, horizontal = true, so VictoryLabel on right)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          horizontal={true}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryLabel />}
  horizontal={false}
/>

(VictoryLabel labelComponent, horizontal = false, so VictoryLabel on top)`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryLabel />}
          horizontal={false}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryLabel />}
  horizontal={true}
/>

(VictoryLabel labelComponent, horizontal = true, so VictoryLabel on right)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryLabel />}
          horizontal={true}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryLabel orientation={'left'} />}
  horizontal={false}
/>

(VictoryLabel ignores orientation prop)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryLabel orientation={'left'} />}
          horizontal={false}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryLabel orientation={'left'} />}
  horizontal={true}
/>

(VictoryLabel ignores orientation prop)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryLabel orientation={'left'} />}
          horizontal={true}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip />}
  horizontal={false}
/>

(VictoryTooltip provided, no orientation. horizontal = false, so VictoryTooltip on top)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip />}
          horizontal={false}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip />}
  horizontal={true}
/>
(VictoryTooltip provided, no orientation. horizontal = true, so VictoryTooltip on right)`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip />}
          horizontal={true}
        />
      </div>
      <hr/>
      
      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'top'} />}
  horizontal={false}
/>`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'top'} />}
          horizontal={false}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'top'} />}
  horizontal={true}
/>`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'top'} />}
          horizontal={true}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'left'} />}
  horizontal={false}
/>`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'left'} />}
          horizontal={false}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'left'} />}
  horizontal={true}
/>`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'left'} />}
          horizontal={true}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'bottom'} />}
  horizontal={false}
/>`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'bottom'} />}
          horizontal={false}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'bottom'} />}
  horizontal={true}
/>`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'bottom'} />}
          horizontal={true}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'right'} />}
  horizontal={false}
/>`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'right'} />}
          horizontal={false}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'right'} />}
  horizontal={true}
/>`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'right'} />}
          horizontal={true}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'right'} dy={-30}/>}
  horizontal={true}
/>

(dy shift works)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'right'} dy={-30}/>}
          horizontal={true}
        />
      </div>
      <hr/>

      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'right'} dx={-30}/>}
  horizontal={true}
/>

(dx shift works)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryScatter
          data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
          size={5}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'left'} dx={-30}/>}
          horizontal={true}
        />
      </div>
      <hr/>

</div>
    
  )
}
