import React from "react";
import './Input.css';

function Input() {
  return (
    <div>
      
        <div className='input-container'>
          <input type="text" placeholder='BUSCA' />
          <img
            src="https://img.icons8.com/material-rounded/24/search.png"
            alt="search"
          />
        </div>
      
   </div>
  );
}

export default Input;
