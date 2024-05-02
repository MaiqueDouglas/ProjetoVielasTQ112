  // eslint-disable-next-line no-unused-vars
  import React from 'react';
  import './ResultadoColecoes.css';
  import Imagem1 from '../../assets/Collection1.jpg';
  import Imagem2 from '../../assets/Collection1.jpg';
  import Imagem3 from '../../assets/Collection1.jpg';
  import Imagem4 from '../../assets/Collection1.jpg';
  import Imagem5 from '../../assets/Collection1.jpg';
  import Imagem6 from '../../assets/Collection1.jpg';
  import Imagem7 from '../../assets/Collection1.jpg';
  import Imagem8 from '../../assets/Collection1.jpg';
  import Imagem9 from '../../assets/Collection1.jpg';
  import Imagem10 from '../../assets/Collection1.jpg';

  function ResultadoColecoes() {
    return (
    
  <div className='resultadogeral'>
       <h3 className='tituloresultado'>Resultado em Coleções</h3>
     <div className="quadro1">
       <img src={Imagem1} alt="Descrição da Imagem 1" />
     <div className='paragrafo'>
       <h3>Crise Finaceira</h3>
       <p> Como a alta dos preços impacta as famílias das periferias </p>
     </div>  
   </div>

    <div className="quadro2">
      <h3>Outros Resultados</h3>
    <div className="imagens1">
      <img src={Imagem2} alt="Descrição da Imagem 2" />
      <img src={Imagem3} alt="Descrição da Imagem 3" />
      <img src={Imagem4} alt="Descrição da Imagem 4" />
    </div>
    <div className="imagens2">
      <img src={Imagem5} alt="Descrição da Imagem 5" />
      <img src={Imagem6} alt="Descrição da Imagem 6" />
      <img src={Imagem7} alt="Descrição da Imagem 7" />
    </div>
    <div className="imagens3">
      <img src={Imagem8} alt="Descrição da Imagem 8" />
      <img src={Imagem9} alt="Descrição da Imagem 9" />
      <img src={Imagem10} alt="Descrição da Imagem 10" />
    </div>
  </div> 
</div>
  
    );
  }

  export default ResultadoColecoes;