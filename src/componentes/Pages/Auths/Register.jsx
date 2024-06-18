// src/components/Auth/Register.jsx
import React, { useState } from 'react';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase'; // Import your Firebase database instance
import { setDoc, doc } from 'firebase/firestore'; // Import Firestore methods

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [plan, setPlan] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update the user's profile with the display name
      await updateProfile(user, {
        displayName: name,
      });

      // Determine the number of availablePhotos based on the selected plan
      let availablePhotos;
      switch (plan) {
        case 'GRATUITO':
          availablePhotos = 1;
          break;
        case '10 FOTOS':
          availablePhotos = 10;
          break;
        case '30 FOTOS':
          availablePhotos = 30;
          break;
        case 'ILIMITADO':
          availablePhotos = Infinity; // Represent unlimited availablePhotos
          break;
        default:
          availablePhotos = 0;
      }

      // Save additional user info to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
        plan: plan,
        availablePhotos: availablePhotos, // Initialize availablePhotos count based on the plan
      });

      navigate('/payment');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  const selectPlan = (selectedPlan) => {
    setPlan(selectedPlan);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="plan-selector">
          <h1>Choose a Plan</h1>
          <div className="plans">
            <div className="plan" onClick={() => selectPlan('GRATUITO')}>
              <h2>GRATUITO</h2>
              <p>Todos os meses, disponibilizamos uma coleção de fotos gratuitas;</p>
              <p>Disponível para veículos hiperlocais e sem fins lucrativos, estudantes e professores;</p>
              <p>Mediante a solicitação e aprovação de cadastro.</p>
            </div>
            <div className="plan" onClick={() => selectPlan('10 FOTOS')}>
              <h2>10 FOTOS POR MÊS</h2>
              <h3>R$ 50</h3>
              <p>Cadastro rápido; 10 fotos disponíveis para download por 30 dias.</p>
            </div>
            <div className="plan" onClick={() => selectPlan('30 FOTOS')}>
              <h2>30 FOTOS POR MÊS</h2>
              <h3>R$ 99</h3>
              <p>Cadastro rápido; 30 fotos disponíveis para download por 30 dias.</p>
            </div>
            <div className="plan" onClick={() => selectPlan('ILIMITADO')}>
              <h2>DOWNLOAD ILIMITADO</h2>
              <h3>FALE COM NOSSA EQUIPE</h3>
              <p>Download instantâneo ilimitado de fotos para sua equipe.</p>
            </div>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
