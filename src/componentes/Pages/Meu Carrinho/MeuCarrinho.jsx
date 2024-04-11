import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import './MeuCarrinho.css';
import Usuario1 from '../../../assets/imagem-carrinho.jpeg';

function MeuCarrinho() {
  
  return (
    
      
           <div>
           <Header/>
           <div className="h1">
                <h1>Carrinho de compras</h1>
                <p>Itens selecionados para compra:1</p>
           </div>
           <div className="container-car">
                <img src={Usuario1} alt="User Icon" /> 
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
                    Subtotal:R$ xx,xx
                </h1>
                <button className="button">PROSSEGIR COM A COMPRA</button>
           </div>
           <Footer/>
           </div>
           
    
       
   
  );
}

export default MeuCarrinho;
