import React, { useEffect, useRef } from 'react';
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';
import {step1,step2,step3,step4,step5,step6,step7,step8,step9,step10} from './steps';

const VisNetwork = () => {
  // A reference to the div rendered by this component
  const rootNode = useRef(null);
  // A reference to the vis network instance
  const network = useRef(null);

  const stepsList=[step1(),step2(),step3(),step4(),step5(),step6(),step7(),step8(),step9(),step10()]// step list(of each change)
  // An array of nodes
  const nodes = new DataSet(stepsList[0])
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
    edges: {
      smooth: {
        enabled: true,
        type: "cubicBezier",
        roundness: 0.4,
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
        nodeSpacing: 200,
        blockShifting: true,
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
      hover: false,
      hoverConnectedEdges: false,
      keyboard: {
        enabled: false,
        speed: {x: 10, y: 10, zoom: 0.02},
        bindToWindow: false,
        autoFocus: false,
      },
      multiselect: false,
      navigationButtons: false,
      selectable: false,
      selectConnectedEdges: false,
      tooltipDelay: 300,
      zoomSpeed: 1,
      zoomView: true
    },
    nodes:{
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
      size: 20, // px
      face: 'arial',
      },

    },
  };
  
  useEffect(() =>
   {
      network.current = new Network(rootNode.current, data, options);
   },
    [rootNode, network, data, options]
  );

  return (
    <div ref = { rootNode } />
  );
};

export default VisNetwork;