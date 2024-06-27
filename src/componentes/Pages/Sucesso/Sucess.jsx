import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import './Sucess.css'; // Importando o arquivo CSS para estilos da página

const Success = () => {
    const location = useLocation();
    const { purchasedPhotos = [], remainingPhotos = 0 } = location.state || {};

    console.log('Purchased Photos:', purchasedPhotos); // Log para verificar os dados

    return (
        <div>
            <Header />
            <div className="success-container">
                <h1 className="success-title">Download realizado com sucesso!</h1>
                <p className="success-subtitle">Você realizou o download das seguintes fotos:</p>
                <div className="photos-container">
                    {purchasedPhotos.map(photo => (
                        <div key={photo.id} className="photo-item">
                            <img 
                                src={photo.imageUrl} // Usando a propriedade imageUrl corretamente
                                alt={`Photo ${photo.id}`} 
                                className="photo-image" 
                                onError={(e) => {e.target.onerror = null; e.target.src="https://seu-servidor.com/imagens/fallback.jpg";}} 
                            />
                            <div className="photo-details">
                                <h2 className="photo-title">{photo.title}</h2>
                                <p className="photo-description">{photo.description}</p>
                                <a href={photo.imageUrl} download className="download-button">Baixar imagem</a>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="remaining-downloads">Downloads restantes: {remainingPhotos === Infinity ? 'Ilimitado' : remainingPhotos}</h2>
            </div>
            <Footer />
        </div>
    );
};

export default Success;
