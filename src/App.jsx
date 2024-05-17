import React from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import FlowBuilder from './FlowBuilder';
import './App.css'
const App = () => {
  return (
    <ReactFlowProvider>
      <FlowBuilder />
    </ReactFlowProvider>
  );
};

export default App;
