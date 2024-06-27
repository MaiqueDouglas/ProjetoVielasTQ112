import React, { useState } from 'react';
import { auth, db } from '../../../firebase'; // Importar 'db' do firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore'; // Importar setDoc e doc do firestore
import './Register.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

      // Cria um documento de usuário no Firestore
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        name: name,
        email: email,
        availablePhotos: 10, // Exemplo: número de fotos disponíveis no início
        purchasedPhotos: []
      });

      // Navega para a página de seleção de planos após o registro bem-sucedido
      navigate('/PlanSelector');
    } catch (error) {
      console.error('Error registering:', error);
      // Lógica para exibir mensagens de erro ao usuário
    }
  };

  return (
    <div>
      <Header/>
    <div className='container-register'>
      <div className="register-container">
        <h1>Cadastrar</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Register;
