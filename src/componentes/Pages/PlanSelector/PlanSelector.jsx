import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePurchase } from '../../../contexts/PurchaseContext';
import './PlanSelector.css';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const PlanSelector = () => {
  const navigate = useNavigate();
  const { setPurchaseData } = usePurchase();

  const selectPlan = (plan) => {
    setPurchaseData(prevData => ({
      ...prevData,
      selectedPlan: plan
    }));
    navigate('/payment');
  };

  return (
    <div>
      <Header/>
    <div className="plan-selector">
      <h1>5. ESCOLHA DO PLANO</h1>
      <div className="plans">
        <div className="plan" onClick={() => selectPlan('GRATUITO')}>
          <h2>PARA<br></br>
              COMEÇAR</h2>
          <h3>GRATUITO</h3>
          <p>Todos os meses, disponibilizamos uma coleção de fotos gratuitas;<br></br><br></br>
          Disponível para veículos hiperlocais e sem fins lucrativos, estudantes e professores;<br></br><br></br>
          Mediante a solicitação e aprovação de cadastro.</p>
        </div>
        <div className="plan" onClick={() => selectPlan('10 FOTOS')}>
          <h2>10 FOTOS<br />POR MÊS</h2>
          <h3>R$ 50</h3>
          <p>Cadastro rápido; 10 fotos disponível para download por 30 dias.</p>
        </div>
        <div className="plan" onClick={() => selectPlan('30 FOTOS')}>
          <h2>30 FOTOS<br />POR MÊS</h2>
          <h3>R$ 99</h3>
          <p>Cadastro rápido; 30 fotos disponível para download por 30 dias.</p>
        </div>
        <div className="plandow" onClick={() => selectPlan('ILIMITADO')}>
          <h2>DOWNLOAD ILIMITADO</h2>
          <h3>[FALE COM NOSSA EQUIPE]</h3>
          <p>Download instantâneo ilimitado de fotos para sua equipe.</p>
        </div>
      </div>
      <div className="note">
        <p>Valores para utilização nos meios digitais. Para livros didáticos ou materiais impressos, entre em contato com nosso time de vendas.</p>
      </div>
      {/* <div className="references">
    <p>Referências: <a href="https://unsplash.com/pt-br/plus" target="_blank" rel="noopener noreferrer">https://unsplash.com/pt-br/plus</a></p>
</div> */}
    </div>
    <Footer/>
    </div>
  );
};

export default PlanSelector;