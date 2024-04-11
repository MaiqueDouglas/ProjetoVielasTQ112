import React, { useState } from 'react';
import './Header.css';
import usuario from "../../assets/usuario.png"
import LoginModal from "../LoginModal/LoginModal";
import { Link } from 'react-router-dom';




function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      
      <div className={`container ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
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
        <div className="menu-items" style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/MeuCarrinho">Meu Carrinho</Link></li>
            <li><Link to="/QuemSomos">Quem Somos </Link></li>
            <li><Link to="/Equipe">Equipe</Link></li>
            <li><Link to="/Apoie">Apoie</Link></li>
            <li><Link to="/FaleConosco">Fale Conosco</Link></li>
          </ul>
        </div>
        {isModalOpen && <LoginModal onClose={closeModal} />}
      </div>
    </div>
  );
}

export default Header;
