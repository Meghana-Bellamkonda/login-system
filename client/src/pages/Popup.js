import React from 'react';
import "./Popup.css"
import {
    AiOutlineClose
}from "react-icons/ai";

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}><AiOutlineClose style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
    }}
    size="25px"
    color= "#03045E"/></button>

    <button className='addStudent' onClick={() => props.setTrigger(false)} style={{
      position: 'absolute',
      bottom: '40px',
      right: '80px',
      backgroundColor: '#D61C4E'
    }}> Cancel</button>
    
            {props.children}
        </div>
    </div>
  ):"";
    
}

export default Popup