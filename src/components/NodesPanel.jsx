import React from 'react';
import './common.css';
import TextNodeType from './TextNodeType';

const NodesPanel = () => {


  return (
    <div className="nodes-panel">
      <h3 className='node-panel-header'>Node Panel</h3>
      <div className="node-type-list">
        <TextNodeType />
      </div>
    </div>
  );
};

export default NodesPanel;
