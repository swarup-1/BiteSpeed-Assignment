import React from 'react';
import "./common.css"
import backArrow from "../assets/back-arrow.svg"
const SettingsPanel = ({ selectedNode, setSelectedNode, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const handleInputBlur = () => {
    setSelectedNode(null);
  };
  const handleClick = () => {
    setSelectedNode(null);
  };
  return (
    <div className="settings-panel">
      <h3 className='setting-panel-header'>Setting Panel</h3>
      <input
        type="text"
        value={selectedNode.data.label}
        onChange={handleChange}
        onBlur={handleInputBlur}
      />
      <p className='back-to-nodes' onClick={handleClick}><img src={backArrow} alt="" /> Nodes Panel</p>
    </div>
  );
};

export default SettingsPanel;
