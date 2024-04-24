import React from 'react';
import { Link } from 'react-router-dom';
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

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='container-photos'>
            <div className="photo">
                <h1>COLEÇÔES</h1>
                <Link to="/Collection/1">
                    <img src={Foto1} alt="Photo 1" onClick={handleClick} />
                </Link>
                <h3>Título</h3>
                <p>Descrição da foto.</p>
            </div>
            <div className="photo">
                <Link to="/Collection/2">
                    <img src={Foto2} alt="Photo 2" onClick={handleClick} />
                </Link>
                <h3>Título</h3>
                <p>Descrição da foto.</p>
            </div>
            <div className="photo">
                <Link to="/Collection/3">
                    <img src={Foto3} alt="Photo 3" onClick={handleClick} />
                </Link>
                <h3>Título</h3>
                <p>Descrição da foto.</p>
            </div>
            <hr className='vertical-line' />
            <div className='photo-container'>
                <div className="photo-">
                    <Link to="/Collection/4">
                        <img src={Foto4} alt="Photo 4" onClick={handleClick} />
                    </Link>
                </div>
                <div className="photo-">
                    <Link to="/Collection/5">
                        <img src={Foto5} alt="Photo 5" onClick={handleClick} />
                    </Link>
                </div>
                <div className="photo-">
                    <Link to="/Collection/6">
                        <img src={Foto6} alt="Photo 6" onClick={handleClick} />
                    </Link>
                </div>
                <div className="photo-">
                    <Link to="/Collection/7">
                        <img src={Foto7} alt="Photo 7" onClick={handleClick} />
                    </Link>
                </div>
                <div className="photo-">
                    <Link to="/Collection/8">
                        <img src={Foto8} alt="Photo 8" onClick={handleClick} />
                    </Link>
                </div>
                <div className="photo-">
                    <Link to="/Collection/9">
                        <img src={Foto9} alt="Photo 9" onClick={handleClick} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Collection;
