import React, { useEffect, useRef } from 'react';
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';
import {step1,step2,step3,step4,step5,step6,step7,step8,step9,step10,setArray} from './stepsLevel2';

const VisNetwork = (props) => {
  // A reference to the div rendered by this component
  const rootNode = useRef(null);
  // A reference to the vis network instance
  const network = useRef(null);
  const nArray = props.numberArray;
  setArray(nArray)
  const stepsList=[step1(props.count),step2(props.count),step3(props.count),step4(props.count),step5(props.count),step6(props.count),step7(props.count),step8(props.count),step9(props.count),step10(props.count)]// step list(of each change)
  // An array of nodes
  const nodes = new DataSet(stepsList[props.treeForm])
  // it doesnt accept input but what we could do is that after each step we'd add our own textbox asking them to enter the next step and check if theyre right
    // if they are we display the next step in the tree otherwise tell them to try again

  // An array of edges
  const edges = new DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 4, to: 6 },
    { from: 4, to: 7 },
    { from: 6, to: 8 },
    { from: 6, to: 9 },
    { from: 5, to: 10 },
    { from: 5, to: 11 },
    { from: 3, to: 12 },
    { from: 3, to: 13 },
    { from: 12, to: 14 },
    { from: 12, to: 15 },
    { from: 14, to: 17 },
    { from: 14, to: 16 },
    { from: 13, to: 18 },
    { from: 13, to: 19 },

  ]);
  
  const data = {
    nodes,
    edges
  };

 
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

      },
    },
    physics: false,
    interaction:{
      dragNodes:false,
      dragView: false,
      hideEdgesOnDrag: false,
      hideEdgesOnZoom: false,
      hideNodesOnDrag: false,
      hover: true,
      hoverConnectedEdges: false,
      keyboard: {
        enabled: false,
        speed: {x: 10, y: 10, zoom: 0.02},
        bindToWindow: false,
        autoFocus: false,
      },
      multiselect: false,
      navigationButtons: false,
      selectable: true,
      selectConnectedEdges: true,
      tooltipDelay: 300,
      zoomSpeed: 1,
      zoomView: false
    },
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
    const timeout = setTimeout(() => {
      network.current = new Network(rootNode.current, data, options);
      
    }, 500);
      
   },
    [rootNode, network, data, options]
  );
  
 

  return (
    <div ref = { rootNode } />
  );
  module.exports = {nArray};

};

export default VisNetwork ;
