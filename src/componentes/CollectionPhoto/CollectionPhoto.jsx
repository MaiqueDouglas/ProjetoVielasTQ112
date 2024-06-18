// src/Pages/CollectionPhoto/CollectionPhoto.jsx
// import React, { useState } from 'react'; // Remove this line if it's not used
import { useState } from 'react'; // Keep this line
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './CollectionPhoto.css';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Link2 from '../Link2/Link2';
import Footer from '../Footer/Footer';
import photo1 from '../../assets/Collection1.jpg';
import photo2 from '../../assets/Collection2.jpg';
import photo3 from "../../assets/Collection3.jpg";
import photo4 from "../../assets/Collection4.jpg";
import photo5 from "../../assets/Collection5.jpg";
import photo6 from "../../assets/Collection6.jpg";
import photo7 from "../../assets/Collection7.jpg";
import photo8 from "../../assets/Collection8.jpg";
import photo9 from "../../assets/Collection9.jpg";

function CollectionPhoto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const photos = [
        { id: 1, title: 'Título 1', description: 'Descrição da foto 1', imageUrl: photo1, smallDescription: 'Descrição pequena da foto 1', smallTitle: 'Título pequeno 1' },
        { id: 2, title: 'Título 2', description: 'Descrição da foto 2', imageUrl: photo2, smallDescription: 'Descrição pequena da foto 2', smallTitle: 'Título pequeno 2' },
        { id: 3, title: 'Título 3', description: 'Descrição da foto 3', imageUrl: photo3, smallDescription: 'Descrição pequena da foto 3', smallTitle: 'Título pequeno 3' },
        { id: 4, title: 'Título 4', description: 'Descrição da foto 4', imageUrl: photo4, smallDescription: 'Descrição pequena da foto 4', smallTitle: 'Título pequeno 4' },
        { id: 5, title: 'Título 5', description: 'Descrição da foto 5', imageUrl: photo5, smallDescription: 'Descrição pequena da foto 5', smallTitle: 'Título pequeno 5' },
        { id: 6, title: 'Título 6', description: 'Descrição da foto 6', imageUrl: photo6, smallDescription: 'Descrição pequena da foto 6', smallTitle: 'Título pequeno 6' },
        { id: 7, title: 'Título 7', description: 'Descrição da foto 7', imageUrl: photo7, smallDescription: 'Descrição pequena da foto 7', smallTitle: 'Título pequeno 7' },
        { id: 8, title: 'Título 8', description: 'Descrição da foto 8', imageUrl: photo8, smallDescription: 'Descrição pequena da foto 8', smallTitle: 'Título pequeno 8' },
        { id: 9, title: 'Título 9', description: 'Descrição da foto 9', imageUrl: photo9, smallDescription: 'Descrição pequena da foto 9', smallTitle: 'Título pequeno 9' },
    ];

    const [selectedPhoto] = useState(photos.find(photo => photo.id === parseInt(id)));

    const handleAddToCart = () => {
        addToCart(selectedPhoto);
        navigate(`/meucarrinho`);
    };

    return (
        <div>
            <Header />
            <Input />
            <div className="photo-details">
                <img src={selectedPhoto.imageUrl} alt={`Photo ${selectedPhoto.id}`} />
                <h3>{selectedPhoto.title}</h3>
                <p>{selectedPhoto.description}</p>
                <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
            </div>
            <div className="small-photo-details">
                <h3>{selectedPhoto.smallTitle}</h3>
                <p>{selectedPhoto.smallDescription}</p>
                <img src={selectedPhoto.imageUrl} alt={`Small Photo ${selectedPhoto.id}`} />
            </div>
            <Link2 />
            <div className='photos'>
                <h3>Fotos semelhantes</h3>
            </div>
            <div className="similar-photos">
                {photos.map(p => (
                    <img key={p.id} src={p.imageUrl} alt={`Similar Photo ${p.id}`} onClick={() => navigate(`/collection/${p.id}`)} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default CollectionPhoto;
