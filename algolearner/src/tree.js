import React, { useEffect, useRef } from 'react';
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';

const VisNetwork = () => {
  // A reference to the div rendered by this component
  const domNode = useRef(null);

  // A reference to the vis network instance
  const network = useRef(null);

  // An array of nodes
<<<<<<< Updated upstream
  const nodes = new DataSet([
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' }
  ]);
=======
  const nodes = new DataSet(stepsList[props.treeForm])
  const nArray = props.numberArray;
  
  // it doesnt accept input but what we could do is that after each step we'd add our own textbox asking them to enter the next step and check if theyre right
    // if they are we display the next step in the tree otherwise tell them to try again
>>>>>>> Stashed changes

  // An array of edges
  const edges = new DataSet([
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 }
  ]);

  const data = {
    nodes,
    edges
  };

<<<<<<< Updated upstream
  const options = {};
=======
 
  const options = 
  {
    autoResize: true,
  height: '500px',
  width: '100%',
    edges: {
      length:50,
      physics:false,
      smooth: {
        enabled: true,
        type: "cubicBezier",
        roundness: 0.5,
        forceDirection:"vertical"
      },
      color: {
        color:'#a80000',
        highlight:'#a80000',
        hover: '#848484',
        inherit: 'from',
        opacity:1.0
      },
      dashes: false,
      font:
      {
        color: '#4bde31',
      },

    },
    layout: {
      improvedLayout:true,
      hierarchical: {
        direction: 'UD', 
        parentCentralization: true,
        nodeSpacing: 400,
        treeSpacing: 700,
        blockShifting: true,
        edgeMinimization: true,
        sortMethod: 'directed',
        shakeTowards: 'roots'
>>>>>>> Stashed changes

  useEffect(
    () => {
      network.current = new Network(domNode.current, data, options);
    },
<<<<<<< Updated upstream
    [domNode, network, data, options]
=======
    nodes:{
      size:100,
      borderWidth: 1,
      shape:'box',
      shapeProperties:{

      },

      color: {
        border: '#4309b0',
        background: '#395596',
        highlight: {
          border: '#4309b0',
          background: '#4309b0'
        }
      },
      font:{
      color: '#ed6b6b',
      size: 35, // px
      face: 'arial',
      },

    },
  };
  
  
  useEffect(() =>
   {
      network.current = new Network(rootNode.current, data, options);
   },
    [rootNode, network, data, options]
>>>>>>> Stashed changes
  );
  
 

  return (
    <div ref = { domNode } />
  );
};

export default VisNetwork ;
