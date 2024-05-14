// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from "../../Header/Header";
import Input from "../../Input/Input";
import ResultadoColecoes from "../../ResultadoColecoes/ResultadoColecoes";
import Footer from "../../Footer/Footer";
import './PageResultadoColecoes.css';

const PageResultadoColecoes = () => {
  return (
    <div> 
    <Header/>
    <Input/>

    <div className='margem'><ResultadoColecoes/> </div>
    
    <Footer/>
    </div>
  )
}

export default PageResultadoColecoes