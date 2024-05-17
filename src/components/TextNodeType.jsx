import React from 'react'
import './common.css';
import whatsappIcon from '../assets/whatsappIcon.svg'
import chatIcon from '../assets/chatIcon.svg'

const TextNodeType = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };
  return (
    <div
    className="dndnode"
    onDragStart={(event) => onDragStart(event, 'textNode')}
    draggable
  >
    <div className="text-node">
      <div className="header">
        <img className='chat-icon' src={chatIcon} alt="" />
        Test Node
        <img className='whatsapp-icon' src={whatsappIcon} alt="" />
      </div>
      <div className="body"></div>
    </div>
  </div>
  )
}

export default TextNodeType
