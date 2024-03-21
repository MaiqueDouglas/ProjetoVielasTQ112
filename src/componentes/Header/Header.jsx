import React from "react";
import './Header.css';



function Header() {
  return (
    <div>
      <div className="container">
        <div className="menu">
          <div className="linha"></div>
          <div className="linha"></div>
          <div className="linha"></div>
        </div>
        <h1>VIELAS</h1>
     
        <div className="login">
          <span>Login</span>
{/*          <img src={usuario} alt="User Icon" />   */}
        </div>
     
      </div>

      <form>
        <div className='input-container'>
          <input type="text" placeholder='BUSCA' />
          <img
            src="https://img.icons8.com/material-rounded/24/search.png"
            alt="search"
          />
        </div>
      </form>
   </div>
  );
}

export default Header;
