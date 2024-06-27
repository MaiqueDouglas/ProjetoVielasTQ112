import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Profile.css';

const LoadingSpinner = () => (
    <div className="spinner-container">
        <div className="spinner"></div>
    </div>
);

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [paymentData, setPaymentData] = useState(null);
    const [purchasedPhotos, setPurchasedPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState(auth.currentUser);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        const fetchUserData = async () => {
            if (currentUser) {
                try {
                    setLoading(true);
                    const userDoc = getDoc(doc(db, 'users', currentUser.uid));
                    const photosSnapshot = getDocs(collection(db, 'users', currentUser.uid, 'purchasedPhotos'));

                    const [userDocSnap, photosSnap] = await Promise.all([userDoc, photosSnapshot]);

                    if (userDocSnap.exists()) {
                        setUserData(userDocSnap.data());
                        console.log('User Data:', userDocSnap.data());
                    } else {
                        console.log('No user data found');
                    }

                    const paymentDocsSnap = await getDocs(collection(db, 'pagamentos'));
                    const paymentDoc = paymentDocsSnap.docs.find(doc => doc.data().email === currentUser.email);

                    if (paymentDoc) {
                        setPaymentData(paymentDoc.data());
                        console.log('Payment Data:', paymentDoc.data());
                    } else {
                        console.log('No payment data found for current user email');
                    }

                    const paymentDocsSnapp = await getDocs(collection(db, 'purchases'));
                    const paymentDocp = paymentDocsSnapp.docs.find(doc => doc.data().email === currentUser.email);

                    if (paymentDocp) {
                        setPaymentData(paymentDocp.data());
                        console.log('foto Data:', paymentDocp.data());
                    } else {
                        console.log('No foto data found for current user email');
                    }

                    ////////////////////////////////////
                    const photos = photosSnap.docs.map(doc => doc.data());
                    setPurchasedPhotos(photos);
                    console.log('Purchased Photos:', photos);
                } catch (err) {
                    console.error("Erro ao buscar dados:", err);
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [currentUser]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div>
            <Header />
            <div className="profile-container">
                <h1 className="profile-title">Perfil do Usuário</h1>
                {userData && (
                    <div className="user-info">
                        <h2>Informações do Usuário</h2>
                        <p><strong>Nome:</strong> {userData.name}</p>
                        <p><strong>Email:</strong> {currentUser.email}</p>
                        <p><strong>Plano:</strong> {userData.plan}</p>
                        <p><strong>Fotos Disponíveis:</strong> {userData.availablePhotos === Infinity ? 'Ilimitado' : userData.availablePhotos}</p>
                    </div>
                )}
                {paymentData && (
                    <div className="payment-info">
                        <h2>Informações de Pagamento</h2>
                        <p><strong>Endereço:</strong> {paymentData.endereco}</p>
                        <p><strong>Cidade:</strong> {paymentData.cidade}</p>
                        <p><strong>Estado:</strong> {paymentData.estado}</p>
                        <p><strong>Código Postal:</strong> {paymentData.codigoPostal}</p>
                        <p><strong>Nome do Titular:</strong> {paymentData.nomeTitular}</p>
                        <p><strong>Número do Cartão:</strong> {paymentData.numeroCartao}</p>
                        <p><strong>Validade:</strong> {paymentData.validade}</p>
                        <p><strong>CVC:</strong> {paymentData.cvc}</p>
                    </div>
                )}
                {purchasedPhotos.length > 0 && (
                    <div className="photos-info">
                        <h2>Fotos Compradas</h2>
                        <div className="photos-container">
                            {purchasedPhotos.map((photo, index) => (
                                <div key={index} className="photo-item">
                                    <img src={photo.imageUrl} alt={photo.title} />
                                    <h3>{photo.title}</h3>
                                    <p>{new Date(photo.timestamp).toLocaleDateString()}</p>
                                    <p>{photo.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Profile;