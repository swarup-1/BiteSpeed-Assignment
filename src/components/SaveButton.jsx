import React from 'react';

const SaveButton = ({ onSave }) => {
  return (
    <button onClick={onSave} className="save-button">
      Save Flow
    </button>
  );
};

export default SaveButton;
