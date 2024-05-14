// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className='container-footer'>
            <h1>VIELAS</h1>
            <div className="social-icons">
                <img width="35" height="35" src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebook-new"/>
                <img width="35" height="35" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>
                <img width="35" height="35" src="https://img.icons8.com/ios/50/twitter-circled--v1.png" alt="twitter-circled--v1"/>
                <img width="35" height="35" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/>
                <img width="35" height="35" src="https://img.icons8.com/ios/50/linkedin-circled--v1.png" alt="linkedin-circled--v1"/>
            </div>
            <div className="footer-links">
                <a onClick={() => navigate("/QuemSomos")} href="#">Quem Somos</a>
                <a onClick={() => navigate("/Equipe")} href="#">Equipe</a>
                <a onClick={() => navigate("/Apoie")} href="#">Apoie</a>
                <a onClick={() => navigate("/Faleconosco")} href="#">Fale Conosco</a>
            </div>
        </footer>
    );
}

export default Footer;
