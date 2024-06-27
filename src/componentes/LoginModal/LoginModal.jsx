// src/components/Auth/LoginModal.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose(); // Close modal on successful login
      navigate(from); // Redirect to the previous page
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register', { state: { from } });
    onClose(); // Close modal on redirect to register
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      onClose();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {user ? (
          <div>
            <h2>Bem Vindo ;)</h2>
            <p>Conectado como: {user.email}</p>
            <button onClick={handleLogout}>Desconectar</button>
          </div>
        ) : (
          <div>
            <h2>Bem Vindo ;)</h2>
            <form onSubmit={handleLogin}>
              <input
                className="input-Email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input-Password"
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="checkbox-container">
                <input type="checkbox" id="manterConectado" />
                <label htmlFor="manterConectado">me mantenha conectado</label>
              </div>
              <button type="submit">Entrar</button>
            </form>
            <p>Esqueceu a senha? <a href="#">Clique aqui</a></p>
            <button onClick={handleRegisterRedirect}>Registrar-se</button>
          </div>
        )}
      </div>
      <button className="logout-button" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default LoginModal;