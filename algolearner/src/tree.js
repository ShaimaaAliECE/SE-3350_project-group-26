import React, { useEffect, useRef } from 'react';
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';

const VisNetwork = () => {
  // A reference to the div rendered by this component
  const domNode = useRef(null);

  // A reference to the vis network instance
  const network = useRef(null);

  // An array of nodes
  const nodes = new DataSet([
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' }
  ]);

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

  const options = {
    autoResize: true,

    edges: {
      smooth: {
        enabled: true,
        type: "dynamic",
        roundness: 0.5
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
      hierarchical: {
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
  };;
  
  useEffect(
    () => {
      network.current = new Network(domNode.current, data, options);
    },
    [domNode, network, data, options]
  );

  return (
    <div ref = { domNode } />
  );
};

export default VisNetwork;