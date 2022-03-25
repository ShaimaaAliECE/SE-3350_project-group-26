import React, { useEffect, useRef } from 'react';
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';
import {step1,step2,step3,step4,step5,step6,step7,step8,step9,step10,setArray} from './stepsLevel5';

const VisNetwork = (props) => {
  // A reference to the div rendered by this component
  const rootNode = useRef(null);
  // A reference to the vis network instance
  const network = useRef(null);
  const nArray = props.numberArray;
  setArray(nArray)
  const stepsList=[step1(props.count),step2(props.count),step3(props.count),step4(props.count),step5(props.count),step6(props.count),step7(props.count),step8(props.count),step9(props.count),step10(props.count)]// step list(of each change)
  // An array of nodes
  console.log('Count Num:',props.count)
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

    { from: 8, to: 10 },
    { from: 8, to: 11 },

    { from: 10, to: 12 },
    { from: 10, to: 13 },

    { from: 11, to: 14 },
    { from: 11, to: 15 },

    { from: 9, to: 16 },
    { from: 9, to: 17 },

    { from: 16, to: 18 },
    { from: 16, to: 19 },

    { from: 7, to: 20 },
    { from: 7, to: 21 },

    { from: 20, to: 22 },
    { from: 20, to: 23 },

    { from: 22, to: 24 },
    { from: 22, to: 25 },

    { from: 5, to: 26 },
    { from: 5, to: 27 },
    
    { from: 26, to: 28 },
    { from: 26, to: 29 },

    { from: 28, to: 30 },
    { from: 28, to: 31 },

    { from: 30, to: 32 },
    { from: 30, to: 33 },

    { from: 29, to: 34 },
    { from: 29, to: 35 },

    { from: 34, to: 36 },
    { from: 34, to: 37 },

    { from: 27, to: 38 },
    { from: 27, to: 39 },

    { from: 38, to: 40 },
    { from: 38, to: 41 },

    { from: 40, to: 42 },
    { from: 40, to: 43 },

    { from: 39, to: 44 },
    { from: 39, to: 45 },

    { from: 44, to: 46 },
    { from: 44, to: 47 },

    { from: 3, to: 48 },
    { from: 3, to: 49 },

    { from: 48, to: 50 },
    { from: 48, to: 51 },


    { from: 50, to: 52 },
    { from: 50, to: 53 },

    { from: 52, to: 54 },
    { from: 52, to: 55 },

    { from: 54, to: 56 },
    { from: 54, to: 57 },

    { from: 55, to: 58 },
    { from: 55, to: 59 },

    { from: 53, to: 60 },
    { from: 53, to: 61 },

    { from: 60, to: 62 },
    { from: 60, to: 63 },

    { from: 51, to: 64 },
    { from: 51, to: 65 },

    { from: 64, to: 66 },
    { from: 64, to: 67 },

    { from: 66, to: 68 },
    { from: 66, to: 69 },

    { from: 65, to: 70 },
    { from: 65, to: 71 },

    { from: 70, to: 72 },
    { from: 70, to: 73 },

    { from: 49, to: 74 },
    { from: 49, to: 75 },

    { from: 74, to: 76 },
    { from: 74, to: 77 },

    { from: 76, to: 78 },
    { from: 76, to: 79 },

    { from: 78, to: 80 },
    { from: 78, to: 81 },

    { from: 75, to: 82 },
    { from: 75, to: 83 },

    { from: 82, to: 84 },
    { from: 82, to: 85 },

    { from: 84, to: 86 },
    { from: 84, to: 87 },

    { from: 83, to: 88 },
    { from: 83, to: 89 },

    { from: 88, to: 90 },
    { from: 88, to: 91 },


    /*
    { from: 5, to: 12 },
    { from: 5, to: 13 },
    { from: 12, to: 14 },
    { from: 12, to: 15 },
    { from: 14, to: 16 },
    { from: 14, to: 17 },
    { from: 13, to: 18 },
    { from: 13, to: 19 },


    { from: 3, to: 20 },
    { from: 3, to: 21 },
    { from: 20, to: 22 },
    { from: 20, to: 23 },
    { from: 22, to: 24 },
    { from: 22, to: 25 },

    { from: 24, to: 26 },
    { from: 24, to: 27 },

    { from: 23, to: 28 },
    { from: 23, to: 29 },

    { from: 21, to: 30 },
    { from: 21, to: 31 },

    { from: 30, to: 32 },
    { from: 30, to: 33 },

    { from: 32, to: 34 },
    { from: 32, to: 35 },

    { from: 31, to: 36 },
    { from: 31, to: 37 },

   /* 
    { from: 12, to: 14 },
    { from: 12, to: 15 },
    { from: 14, to: 16 },
    { from: 14, to: 17 },

    { from: 16, to: 18 },
    { from: 16, to: 19 },

/*
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
*/
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
        nodeSpacing: 1250,
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
     // console.log("USE EFFECT")
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
