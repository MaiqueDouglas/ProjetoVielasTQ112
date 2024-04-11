import React from 'react';
import './Collection.css';
import Foto1 from "../../assets/Collection1.jpg";
import Foto2 from "../../assets/Collection2.jpg";
import Foto3 from "../../assets/Collection3.jpg";
import Foto4 from "../../assets/Collection4.jpg";
import Foto5 from "../../assets/Collection5.jpg";
import Foto6 from "../../assets/Collection6.jpg";
import Foto7 from "../../assets/Collection7.jpg";
import Foto8 from "../../assets/Collection8.jpg";
import Foto9 from "../../assets/Collection9.jpg";

function Collection() {
    return (
        <div className='container-photos'>
                <h1>COLEÇÔES</h1>
                <div className="photo">
                    <img src={Foto1} alt="Photo 1" />
                    <h3>Título</h3>
                    <p>Descrição da foto.</p>
                </div>
                <div className="photo">
                    <img src={Foto2} alt="Photo 2" />
                    <h3>Título</h3>
                    <p>Descrição da foto.</p>
                </div>
                <div className="photo">
                    <img src={Foto3} alt="Photo 3" />
                    <h3>Título</h3>
                    <p>Descrição da foto.</p>
                </div>
                <hr className='vertical-line' />
                <div className='photo-container'>
                    <div className="photo">
                        <img src={Foto4} alt="Photo 4" />    
                    </div>
                    <div className="photo">
                        <img src={Foto5} alt="Photo 5" />  
                    </div>
                    <div className="photo">
                        <img src={Foto6} alt="Photo 6" />
                    </div>
                    <div className="photo">
                        <img src={Foto7} alt="Photo 7" />    
                    </div>
                    <div className="photo">
                        <img src={Foto8} alt="Photo 8" />  
                    </div>
                    <div className="photo">
                        <img src={Foto9} alt="Photo 9" />
                    </div>
                </div>
        </div>
        
    );
}

export default Collection;
