import { useLocation } from 'react-router-dom';


const Success = () => {
  const location = useLocation();
  const { paymentDetails } = location.state || {};

  const handleDownloadReceipt = () => {
    // Lógica para download do recibo em PDF
    console.log('Baixar recibo em PDF');
  };

  return (
    <div className="success-container">
      <div className="success-message">
        <h1>Pagamento realizado com sucesso!</h1>
        <h2>IDR 1.000.000</h2>
      </div>
      <div className="payment-details">
        <h3>Detalhes do Pagamento</h3>
        <p><strong>Ref Number:</strong> {paymentDetails?.refNumber}</p>
        <p><strong>Payment Time:</strong> {paymentDetails?.paymentTime}</p>
        <p><strong>Payment Method:</strong> {paymentDetails?.paymentMethod}</p>
        <p><strong>Sender Name:</strong> {paymentDetails?.senderName}</p>
        <p><strong>Amount:</strong> {paymentDetails?.amount}</p>
        <p><strong>Admin Fee:</strong> {paymentDetails?.adminFee}</p>
        <p><strong>Payment Status:</strong> {paymentDetails?.paymentStatus}</p>
      </div>
      <button onClick={handleDownloadReceipt}>Obter Recibo em PDF</button>
      <button onClick={() => window.location.href = '/home'}>Voltar para Home</button>
    </div>
  );
};

export default Success;