import { useNavigate } from 'react-router-dom';
import { usePurchase } from '../../../contexts/PurchaseContext';
import { db, auth } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import logopagamento from '../../../assets/Left side.png';

import './Payment.css'; 

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
      navigate('/success', { state: { paymentDetails: paymentDoc, purchaseDetails: purchaseDoc } });
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
    }
  };

  return (
    <div className="payment-form-container">
  <div className="payment-form-left">
    <img src={logopagamento} alt="Gateway de Pagamento" className="logo" />
  </div>
  <div className="payment-form-right">
    <h2>Concluir pagamento de registro</h2>
    <form onSubmit={handlePayment}>
      <div className="form-section">
        <h3>Detalhes pessoais</h3>
        <div className="form-group">
          <div className="form-field">
            <label>Endereço</label>
            <input
              type="text"
              name="endereco"
              placeholder="P.O.Box 1223"
              value={formData.endereco}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label>Cidade</label>
            <input
              type="text"
              name="cidade"
              placeholder="Arusha"
              value={formData.cidade}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label>Estado</label>
            <input
              type="text"
              name="estado"
              placeholder="Arusha, Tanzânia"
              value={formData.estado}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label>Código Postal</label>
            <input
              type="text"
              name="codigoPostal"
              placeholder="9090"
              value={formData.codigoPostal}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-section">
        <h3>Métodos de Pagamento</h3>
        <div className="payment-methods">
          <img src="visa.png" alt="Visa" />
          <img src="stripe.png" alt="Stripe" />
          <img src="paypal.png" alt="PayPal" />
          <img src="mastercard.png" alt="Mastercard" />
          <img src="gpay.png" alt="Google Pay" />
        </div>
      </div>
      <div className="form-section">
        <h3>Detalhes do Cartão</h3>
        <div className="form-group">
          <div className="form-field">
            <label>Nome do Titular</label>
            <input
              type="text"
              name="nomeTitular"
              placeholder="Como visto no cartão"
              value={formData.nomeTitular}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label>Número do Cartão</label>
            <input
              type="text"
              name="numeroCartao"
              placeholder="Como visto no cartão"
              value={formData.numeroCartao}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label>Validade</label>
            <input
              type="text"
              name="validade"
              placeholder="20/23"
              value={formData.validade}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              placeholder="654"
              value={formData.cvc}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="next-button">Próximo</button>
      <div className="footer-links">
            <ul>
            <li><a href="#">Instruções</a></li>
            <li><a href="#">Licença</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Privacidade</a></li>
            </ul>
      </div>
    </form>
  </div>
  <div className="footer">
    <p>© 2024, Todos os direitos reservados. Feito por Switcher.faisl</p> 
  </div>
</div>

  );
};

export default Payment;
