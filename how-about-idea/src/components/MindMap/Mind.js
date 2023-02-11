import React, { useEffect } from "react";
import styled from "styled-components";
import * as go from "./go.js";

// cdn
<script src="https://cdnjs.cloudflare.com/ajax/libs/gojs/1.7.15/go.js" integrity="sha512-kXHN1AOrS2dtCHVW78WNft0tHWfScHTivmPRZVmY9uKF8DEWP9pT5gBLoyAGvNVg6f6GK2u3fPQkW/up2aZisA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

const MindCss = styled.div`
  /* width:100vw;
height:100vh; */
  background: red;

  .diagram-component {
    width: 100%;
    height: 500px;
    border: solid 1px black;
    background-color: white;
  }
`;

/* Go.js */
// function initDiagram() {
//     const $ = go.GraphObject.make;
//     // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
//     const diagram =
//       $(go.Diagram,
//         {
//           'undoManager.isEnabled': true,  // must be set to allow for model change listening
//           // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
//           'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
//           model: new go.GraphLinksModel(
//             {
//               linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
//             })
//         });

//     // define a simple Node template
//     diagram.nodeTemplate =
//       $(go.Node, 'Auto',  // the Shape will go around the TextBlock
//         new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
//         $(go.Shape, 'RoundedRectangle',
//           { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
//           // Shape.fill is bound to Node.data.color
//           new go.Binding('fill', 'color')),
//         $(go.TextBlock,
//           { margin: 8, editable: true },  // some room around the text
//           new go.Binding('text').makeTwoWay()
//         )
//       );

//     return diagram;
//   }

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */
function handleModelChange(changes) {
  console.log("GoJS model changed!");
}

// var diagram = new go.Diagram("myDiagramDiv");
// Sample 1
//   diagram.model = new go.GraphLinksModel(
//     [{ key: "Hello" },   // two node data, in an Array
//      { key: "World!" }],
//     [{ from: "Hello", to: "World!"}]  // one link data, in an Array
//   );

// Sample 2
// the node template describes how each Node should be constructed
// diagram.nodeTemplate = new go.Node("Auto") // the Shape will go around the TextBlock
//   .add(
//     new go.Shape("RoundedRectangle")
//       // Shape.fill is bound to Node.data.color
//       .bind("fill", "color")
//   )
//   .add(
//     new go.TextBlock({ margin: 8 }) // Specify a margin to add some room around the text
//       // TextBlock.text is bound to Node.data.key
//       .bind("text", "key")
//   );

// // the Model holds only the essential information describing the diagram
// diagram.model = new go.GraphLinksModel(
//   [
//     // a JavaScript Array of JavaScript objects, one per node;
//     // the "color" property is added specifically for this app
//     { key: "Alpha", color: "lightblue" },
//     { key: "Beta", color: "orange" },
//     { key: "Gamma", color: "lightgreen" },
//     { key: "Delta", color: "pink" },
//   ],
//   [
//     // a JavaScript Array of JavaScript objects, one per link
//     { from: "Alpha", to: "Beta" },
//     { from: "Alpha", to: "Gamma" },
//     { from: "Beta", to: "Beta" },
//     { from: "Gamma", to: "Delta" },
//     { from: "Delta", to: "Alpha" },
//   ]
// );
// // enable Ctrl-Z to undo and Ctrl-Y to redo
// diagram.undoManager.isEnabled = true;

// Sample 3
let nodeDataArray = [
  { key: 0, text: "Alpha", color: "lightblue", loc: "0 0" },
  { key: 1, text: "Beta", color: "orange", loc: "150 0" },
  { key: 2, text: "Gamma", color: "lightgreen", loc: "0 150" },
  { key: 3, text: "Delta", color: "pink", loc: "150 150" },
];

let linkDataArray = [
  { key: -1, from: 0, to: 1 },
  { key: -2, from: 0, to: 2 },
  { key: -3, from: 1, to: 1 },
  { key: -4, from: 2, to: 3 },
  { key: -5, from: 3, to: 0 },
];

function initDiagram() {
  const $ = go.GraphObject.make;
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram = $(go.Diagram, "myDiagramDiv", {
    "undoManager.isEnabled": true, // must be set to allow for model change listening
    // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
    "clickCreatingTool.archetypeNodeData": {
      text: "new node",
      color: "lightblue",
    },
    model: new go.GraphLinksModel(nodeDataArray, linkDataArray),
  });

  // define a simple Node template
  diagram.nodeTemplate = $(
    go.Node,
    "Auto", // the Shape will go around the TextBlock
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    $(
      go.Shape,
      "RoundedRectangle",
      { name: "SHAPE", fill: "white", strokeWidth: 0 },
      // Shape.fill is bound to Node.data.color
      new go.Binding("fill", "color")
    ),
    $(
      go.TextBlock,
      { margin: 8, editable: true }, // some room around the text
      new go.Binding("text").makeTwoWay()
    )
  );
}

function Mind() {
  useEffect(initDiagram, []);
  
  return (
    <MindCss>
      <div id="myDiagramDiv" className="diagram-component" />
    </MindCss>
  );
}

export default Mind;
