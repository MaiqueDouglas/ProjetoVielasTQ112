import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import { auth, db } from '../../../firebase';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import photo1 from '../../../assets/Collection1.jpg';
import photo2 from '../../../assets/Collection2.jpg';
import photo3 from "../../../assets/Collection3.jpg";
import photo4 from "../../../assets/Collection4.jpg";
import photo5 from "../../../assets/Collection5.jpg";
import photo6 from "../../../assets/Collection6.jpg";
import photo7 from "../../../assets/Collection7.jpg";
import photo8 from "../../../assets/Collection8.jpg";
import photo9 from "../../../assets/Collection9.jpg";
import './MeuCarrinho.css';

function MeuCarrinho() {
    const navigate = useNavigate();
    const { cart, removeFromCart } = useCart(); 

    const photoImages = {
        1: photo1,
        2: photo2,
        3: photo3,
        4: photo4,
        5: photo5,
        6: photo6,
        7: photo7,
        8: photo8,
        9: photo9,
    };

    const handlePurchase = async () => {
        const user = auth.currentUser;
        if (!user) {
            navigate('/login', { state: { from: `/meucarrinho` } });
            return;
        }

        try {
            const userRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();
                console.log('User data:', userData);  // Adicionado para depuração
                const availablePhotos = userData.availablePhotos;

                if (availablePhotos >= cart.length || availablePhotos === Infinity) {
                    const remainingPhotos = availablePhotos === Infinity ? Infinity : availablePhotos - cart.length;

                    await updateDoc(userRef, {
                        availablePhotos: remainingPhotos,
                        purchasedPhotos: arrayUnion(...cart.map(item => ({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            imageUrl: photoImages[item.id]
                        })))
                    });

                    navigate('/Sucess', { state: { purchasedPhotos: cart, remainingPhotos } });
                } else {
                    alert('Você não tem fotos suficientes disponíveis no seu plano.');
                }
            } else {
                console.error('User data not found');
                alert('Dados do usuário não encontrados. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
            alert('Ocorreu um erro ao buscar os dados do usuário. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container">
            <Header />
            <main className="main-content">
                <div className="header">
                    <h1 className="title">Carrinho de compras</h1>
                    <p className="subtitle">Itens selecionados para compra: {cart.length}</p>
                </div>
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={photoImages[item.id]} alt={`Photo ${item.id}`} className="item-image" />
                            <div className="item-details">
                                <h2 className="item-title">{item.title}</h2>
                                <p className="item-description">{item.description}</p>
                                <p><strong>Tipo de mídia:</strong> Imagem do Creative</p>
                                <p><strong>Resolução:</strong> 4000 x 6000 - 300 dpi - RGB</p>
                                <p><strong>Tipo de licença:</strong> Royalty-free | <a href="#" className="license-link">Ver resumo das licenças</a></p>
                                <p><strong>Como posso utilizar:</strong> Disponível para todas as utilizações permitidas ao abrigo dos nossos <a href="#" className="license-link">Termos de Licença</a></p>
                                <div className="select-item">
                                  
                                </div>
                            </div>
                            <button 
                                onClick={() => removeFromCart(item.id)} 
                                className="remove-button"
                            >
                                Remover
                            </button>
                        </div>
                    ))}
                </div>
                <div className="subtotal">
                    <h2></h2>
                </div>
                <div className="checkout">
                    <button 
                        className="checkout-button"
                        onClick={handlePurchase}
                    >
                        PROSSEGUIR COM DOWNLOAD
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MeuCarrinho;
