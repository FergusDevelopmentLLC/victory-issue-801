import React from "react";
import { VictoryScatter } from "./victory-scatter/src/index";
import { VictoryBar } from "./victory-bar/src/index";
import { VictoryTooltip } from "./victory-tooltip/src/index";
import { VictoryLabel } from "./victory-core/src";

export const App = () => {
  
  return (
    <div style={{width:"500px"}}>
      <hr/>
      <a name="test01"></a>
      <h4>Test #1</h4>
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

      <a name="test02"></a>
      <h4>Test #2</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  horizontal={false}
/>

(No labelComponent, horizontal = false, so VictoryLabel on top)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          horizontal={false}
        />
      </div>
      <hr/>

      <a name="test03"></a>
      <h4>Test #3</h4>
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

      <a name="test04"></a>
      <h4>Test #4</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  horizontal={true}
/>

(No labelComponent, horizontal = true, so VictoryLabel on right)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          horizontal={true}
        />
      </div>
      <hr/>      

      <a name="test05"></a>
      <h4>Test #5</h4>
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

      <a name="test06"></a>
      <h4>Test #6</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryLabel />}
  horizontal={false}
/>

(VictoryLabel labelComponent, horizontal = false, so VictoryLabel on top)`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryLabel />}
          horizontal={false}
        />
      </div>
      <hr/>

      <a name="test07"></a>
      <h4>Test #7</h4>
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

      <a name="test08"></a>
      <h4>Test #8</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
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
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryLabel />}
          horizontal={true}
        />
      </div>
      <hr/>

      <a name="test09"></a>
      <h4>Test #9</h4>
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

      <a name="test10"></a>
      <h4>Test #10</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
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
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryLabel orientation={'left'} />}
          horizontal={false}
        />
      </div>
      <hr/>

      <a name="test11"></a>
      <h4>Test #11</h4>
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

      <a name="test12"></a>
      <h4>Test #12</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
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
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryLabel orientation={'left'} />}
          horizontal={true}
        />
      </div>
      <hr/>      

      <a name="test13"></a>
      <h4>Test #13</h4>
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

      <a name="test14"></a>
      <h4>Test #14</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
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
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip />}
          horizontal={false}
        />
      </div>
      <hr/>       

      <a name="test15"></a>
      <h4>Test #15</h4>
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

      <a name="test16"></a>
      <h4>Test #16</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip />}
  horizontal={true}
/>

(VictoryTooltip provided, no orientation. horizontal = true, so VictoryTooltip on right)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip />}
          horizontal={true}
        />
      </div>
      <hr/>      
      
      <a name="test17"></a>
      <h4>Test #17</h4>
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

      <a name="test18"></a>
      <h4>Test #18</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'top'} />}
  horizontal={false}
/>
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'top'} />}
          horizontal={false}
        />
      </div>
      <hr/>       

      <a name="test19"></a>
      <h4>Test #19</h4>
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

      <a name="test20"></a>
      <h4>Test #20</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'top'} />}
  horizontal={true}
/>
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'top'} />}
          horizontal={true}
        />
      </div>
      <hr/>       

      <a name="test21"></a>
      <h4>Test #21</h4>
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

      <a name="test22"></a>
      <h4>Test #22</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'left'} />}
  horizontal={false}
/>
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'left'} />}
          horizontal={false}
        />
      </div>
      <hr/>      

      <a name="test23"></a>
      <h4>Test #23</h4>
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

      <a name="test24"></a>
      <h4>Test #24</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'left'} />}
  horizontal={true}
/>
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'left'} />}
          horizontal={true}
        />
      </div>
      <hr/>      

      <a name="test25"></a>
      <h4>Test #25</h4>
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

      <a name="test26"></a>
      <h4>Test #26</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'bottom'} />}
  horizontal={false}
/>
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'bottom'} />}
          horizontal={false}
        />
      </div>
      <hr/>      

      <a name="test27"></a>
      <h4>Test #27</h4>
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

      <a name="test28"></a>
      <h4>Test #28</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'bottom'} />}
  horizontal={true}
/>
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'bottom'} />}
          horizontal={true}
        />
      </div>
      <hr/>      

      <a name="test29"></a>
      <h4>Test #29</h4>
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

      <a name="test30"></a>
      <h4>Test #30</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'right'} />}
  horizontal={false}
/>
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'right'} />}
          horizontal={false}
        />
      </div>
      <hr/>      

      <a name="test31"></a>
      <h4>Test #31</h4>
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

      <a name="test32"></a>
      <h4>Test #32</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'right'} />}
  horizontal={true}
/>
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'right'} />}
          horizontal={true}
        />
      </div>
      <hr/>

      <a name="test33"></a>
      <h4>Test #33</h4>
      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'right'} dy={-30}/>}
  horizontal={false}
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
          horizontal={false}
        />
      </div>
      <hr/>

      <a name="test34"></a>
      <h4>Test #34</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'right'} dy={-30}/>}
  horizontal={false}
/>

(dy shift works)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
          style={{ labels: { fill: "black", fontSize: 14} }}
          labels={({ datum }) => `(${datum.x}, ${datum.y})`}
          labelComponent={<VictoryTooltip orientation = {'right'} dy={-30}/>}
          horizontal={false}
        />
      </div>
      <hr/>

      <a name="test35"></a>
      <h4>Test #35</h4>
      <pre>{
        ` 
<VictoryScatter
  data={[{ x: 3, y: 1} , {x: 3, y: 2 } ]}
  size={5}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`} 
  labelComponent={<VictoryTooltip orientation = {'left'} dx={-30}/>}
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

      <a name="test36"></a>
      <h4>Test #36</h4>
      <pre>{
        ` 
<VictoryBar
  data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
  style={{ labels: { fill: "black", fontSize: 14} }}
  labels={({ datum }) => \`(\${datum.x}, \${datum.y})\`}
  labelComponent={<VictoryTooltip orientation = {'left'} dx={-30}/>}
  horizontal={true}
/>

(dx shift works)
`
      }
      </pre>
      <div style={{width:"350px", margin: '20px', border:"1px solid #ccc"}}>
        <VictoryBar
          data={[{ x: 1, y: 1}, { x: 2, y: 2}, {x: 3, y: 3 } ]}
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
