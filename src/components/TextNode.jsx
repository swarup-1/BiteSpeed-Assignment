import React from 'react';
import { Handle } from 'react-flow-renderer';
import './common.css';
import whatsappIcon from '../assets/whatsappIcon.svg'
import chatIcon from '../assets/chatIcon.svg'
const TextNode = ({ id, data }) => {
  return (
    <div className="text-node">
      <div className="header">
        <img className='chat-icon' src={chatIcon} alt="" />
        Send Message
        <img className='whatsapp-icon' src={whatsappIcon} alt="" />
      </div>
      <div className="body">
        {id && data &&
        <>
          <Handle type="source" position="top" id={`${id}-source`} />
          <div className='node-content'>{data.label}</div>
          <Handle type="target" position="bottom" id={`${id}-target`} />
        </>
        }
      </div>
    </div>
  );
};

export default TextNode;
