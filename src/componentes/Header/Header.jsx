import React, { useState } from 'react';
import './Header.css';
import usuario from "../../assets/usuario.png"
import LoginModal from "../LoginModal/LoginModal";

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
        <div className="menu">
          <div className="linha"></div>
          <div className="linha"></div>
          <div className="linha"></div>
        </div>
        <h1>VIELAS</h1>
     
        <div className="login" onClick={openModal}>
          <span>Login</span>
          <img src={usuario} alt="User Icon" />   
        </div>
        {isModalOpen && <LoginModal onClose={closeModal} />}
      </div>
   </div>
  );
}

export default Header;
