import React from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  const handleLogout = () => {
    onClose(); 
};

    return (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Bem Vindo ;)</h2>
            <input className="input-modal"type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" required />
            <div className="checkbox-container">
              <input type="checkbox" id="manterConectado" />
              <label htmlFor="manterConectado">me mantenha conectado</label>
            </div>
            <button>Entrar</button>
            <p>Esqueceu a senha? <a href="#">Clique aqui</a></p>
          </div>
          <button className="logout-button" onClick={handleLogout}>
               <i className="fas fa-times"></i>
            </button>
        </div>
      );
      
};

export default LoginModal;
