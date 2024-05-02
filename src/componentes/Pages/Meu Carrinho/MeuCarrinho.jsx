import React from 'react';
import { useParams } from 'react-router-dom';
import './MeuCarrinho.css'
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


function MeuCarrinho() {
  const { id } = useParams();

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

  return (
    <div>
      <Header/>
      <div className="h1">
        <h1>Carrinho de compras</h1>
        <p>Itens selecionados para compra: 1</p>
      </div>
      <div className="container-car">
        <img src={photoImages[id]} alt="User icon" />
        <h2>
          Tipo de midia:<br></br>
          Resolução:<br></br><br></br>
          Tipo de licença:<br></br><br></br>
          Como posso utilizar:
        </h2>
        <p>
          Imagem do Creative<br></br>
          Resolução 400 x 6000 - 300 dpi . RGB<br></br><br></br>
          Royaly-free I Ver resumo das licenças<br></br><br></br>
          Disponivel para todas as utilizações<br></br>
          permitida ao abrigo dos nossos <a href="#">Termo de Licença</a>
        </p>
        <input type="checkbox" id="SelecionarParaCompra" />
        <label htmlFor="SelecionarParaCompras">Selecionar para compra</label>
        <h1>
          Subtotal: R$ xx,xx
        </h1>
        <button className="button">PROSSEGUIR COM A COMPRA</button>
      </div>
      <Footer/>
    </div>
  );
}

export default MeuCarrinho;
