import React from "react";
import { VictoryScatter } from "./victory-scatter/src/index";
import { VictoryBar } from "./victory-bar/src/index";
import { VictoryTooltip } from "./victory-tooltip/src/index";
import { VictoryLabel } from "./victory-core/src";

export const App = () => {
  
  return (
    <div style={{width:"500px"}}>
      <hr/>
      <a href="/#test01" name="test01"><h4>Test #1</h4></a>
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

      <a href="/#test02" name="test02"><h4>Test #2</h4></a>
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

      <a href="/#test03" name="test03"><h4>Test #3</h4></a>
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

      <a href="/#test04" name="test04"><h4>Test #4</h4></a>
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

      <a href="/#test05" name="test05"><h4>Test #5</h4></a>
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

      <a href="/#test06" name="test06"><h4>Test #6</h4></a>
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

      <a href="/#test07" name="test07"><h4>Test #7</h4></a>
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

      <a href="/#test08" name="test08"><h4>Test #8</h4></a>
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

      <a href="/#test09" name="test09"><h4>Test #9</h4></a>
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

      <a href="/#test10" name="test10"><h4>Test #10</h4></a>
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

      <a href="/#test11" name="test11"><h4>Test #11</h4></a>
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

      <a href="/#test12" name="test12"><h4>Test #12</h4></a>
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

      <a href="/#test13" name="test13"><h4>Test #13</h4></a>
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

      <a href="/#test14" name="test14"><h4>Test #14</h4></a>
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

      <a href="/#test15" name="test15"><h4>Test #15</h4></a>
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

      <a href="/#test16" name="test16"><h4>Test #16</h4></a>
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
      
      <a href="/#test17" name="test17"><h4>Test #17</h4></a>
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

      <a href="/#test18" name="test18"><h4>Test #18</h4></a>
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

      <a href="/#test19" name="test19"><h4>Test #19</h4></a>
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

      <a href="/#test20" name="test20"><h4>Test #20</h4></a>
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

      <a href="/#test21" name="test21"><h4>Test #21</h4></a>
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

      <a href="/#test22" name="test22"><h4>Test #22</h4></a>
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

      <a href="/#test23" name="test23"><h4>Test #23</h4></a>
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

      <a href="/#test24" name="test24"><h4>Test #24</h4></a>
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

      <a href="/#test25" name="test25"><h4>Test #25</h4></a>
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

      <a href="/#test26" name="test26"><h4>Test #26</h4></a>
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

      <a href="/#test27" name="test27"><h4>Test #27</h4></a>
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

      <a href="/#test28" name="test28"><h4>Test #28</h4></a>
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

      <a href="/#test29" name="test29"><h4>Test #29</h4></a>
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

      <a href="/#test30" name="test30"><h4>Test #30</h4></a>
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

      <a href="/#test31" name="test31"><h4>Test #31</h4></a>
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

      <a href="/#test32" name="test32"><h4>Test #32</h4></a>
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

      <a href="/#test33" name="test33"><h4>Test #33</h4></a>
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

      <a href="/#test34" name="test34"><h4>Test #34</h4></a>
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

      <a href="/#test35" name="test35"><h4>Test #35</h4></a>
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

      <a href="/#test36" name="test36"><h4>Test #36</h4></a>
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
