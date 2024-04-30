import React, { useState } from 'react';
import './Header.css';
import usuario from "../../assets/usuario.png"
import LoginModal from "../LoginModal/LoginModal";
import { Link } from 'react-router-dom';




function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  
  return (
    <div>
      
      <div className="container">
        <div className="container-component">
        <div className="menu-icon">
          <div className="linha"></div>
          <div className="linha"></div>
          <div className="linha"></div>
        </div>
        <Link to="/">
          <h1 className='Titulo-Vielas'>VIELAS</h1>
        </Link>
        <div className="login" onClick={openModal}>
          <span>Login</span>
          <img src={usuario} alt="User Icon" />   
        </div>
        
        {isModalOpen && <LoginModal onClose={closeModal} />}
      </div>
      </div>
    </div>
  );
}

export default Header;
