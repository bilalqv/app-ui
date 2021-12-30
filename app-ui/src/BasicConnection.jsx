import './App.css';
import createEngine, { DefaultNodeModel, DiagramModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';

const BasicConnection = () => {

  //1) setup the diagram engine
  const engine = createEngine();
  // node 1
  const node1 = new DefaultNodeModel({
    name: 'Source',
    color: 'rgb(0,192,255)',
  });
  node1.setPosition(110, 110);
  let port1 = node1.addOutPort('Out');

  // node 2
  const node2 = new DefaultNodeModel({
    name: 'Destination',
    color: 'rgb(204, 195, 33)',
  });
  node2.setPosition(400, 200);
  let port2 = node2.addInPort('In');
  
  // link them and add a label to the link
  const link = port1.link(port2);

  const model = new DiagramModel();
  let models = model.addAll(node1, node2, link);
  engine.setModel(model);

  node1.registerListener({
    positionChanged: (event)=>{
      console.log( "Source Dragged -", event);
    } 
  })

  node2.registerListener({
  positionChanged: (event)=>{
    console.log( "Destination Dragged -", event);
  } 
  })

  return (
  <CanvasWidget className="srd-demo-canvas" engine={engine} />
  );
};

export default BasicConnection ;