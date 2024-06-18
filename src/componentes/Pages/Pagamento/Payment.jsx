// src/Pages/Payment/Payment.jsx

import { useNavigate } from 'react-router-dom';
import { usePurchase } from '../../../contexts/PurchaseContext';
import { db, auth } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import visaImg from '../../../assets/credit-cards/credit-card.svg';
import stripeImg from '../../../assets/credit-cards/credit-card (1).svg';
import paypalImg from '../../../assets/credit-cards/credit-card (2).svg';
import mastercardImg from '../../../assets/credit-cards/credit-card (3).svg';
import googlePayImg from '../../../assets/credit-cards/credit-card (4).svg';
import './Payment.css'; // Certifique-se de criar e importar um arquivo CSS para os estilos

const Payment = () => {
  const navigate = useNavigate();
  const { purchaseData } = usePurchase();
  const [formData, setFormData] = useState({
    endereco: '',
    cidade: '',
    estado: '',
    codigoPostal: '',
    nomeTitular: '',
    numeroCartao: '',
    validade: '',
    cvc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      console.error('Usuário não autenticado');
      return;
    }

    try {
      const purchaseDoc = {
        ...purchaseData.photoDetails,
        selectedPlan: purchaseData.selectedPlan,
        userId: user.uid,
        userEmail: user.email,
        timestamp: new Date(),
      };

      // Adicionar documento na coleção 'purchases'
      const purchaseRef = await addDoc(collection(db, 'purchases'), purchaseDoc);

      const paymentDoc = {
        email: user.email,
        ...formData,
        purchaseId: purchaseRef.id,
        userId: user.uid,
      };

      // Adicionar documento na coleção 'pagamentos'
      await addDoc(collection(db, 'pagamentos'), paymentDoc);

      console.log('Dados da compra:', purchaseDoc);
      console.log('Dados do pagamento:', paymentDoc);
      navigate('/', { state: { paymentDetails: paymentDoc, purchaseDetails: purchaseDoc } });
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-logo">
        <h1>Gateway de Pagamento</h1>
        <p>Insira os detalhes da localização da escola!</p>
      </div>
      <div className="payment-form">
        <h2>Completar pagamento de inscrição</h2>
        <form onSubmit={handlePayment}>
          <div className="personal-details">
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
            <input
              type="text"
              name="estado"
              placeholder="Estado"
              value={formData.estado}
              onChange={handleChange}
            />
            <input
              type="text"
              name="codigoPostal"
              placeholder="Código Postal"
              value={formData.codigoPostal}
              onChange={handleChange}
            />
          </div>
          <div className="payment-methods">
            <img src={visaImg} alt="Visa" />
            <img src={stripeImg} alt="Stripe" />
            <img src={paypalImg} alt="PayPal" />
            <img src={mastercardImg} alt="MasterCard" />
            <img src={googlePayImg} alt="Google Pay" />
          </div>
          <div className="card-details">
            <input
              type="text"
              name="nomeTitular"
              placeholder="Nome do Titular"
              value={formData.nomeTitular}
              onChange={handleChange}
            />
            <input
              type="text"
              name="numeroCartao"
              placeholder="Número do Cartão"
              value={formData.numeroCartao}
              onChange={handleChange}
            />
            <input
              type="text"
              name="validade"
              placeholder="Validade (MM/AA)"
              value={formData.validade}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Confirmar Pagamento</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
