import React from "react";
import './Banner.css';
import imagem from '../../assets/banner-imagem.jpg'


function Banner() {
  return (
    <div className="banner">
      <h1>VIELAS</h1>
      <p>
         Um banco de imagens pensado<br/>
         para mostrar a diversidade das<br/>
         periferias de São Paulo.<br/> 
         Nascido nas quebradas e<br/>
         fomentado por quem vive e<br/> 
         pensa nelas.
      </p>
        <div className="banner-imagem">
          <img 
          src={imagem} 
          alt="Imagem 1"
          height={350}
          width={650}
          />
        </div>
      </div>
   
  );
}

export default Banner;
