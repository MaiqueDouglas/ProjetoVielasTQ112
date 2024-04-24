
import './Footer.css';

function Footer() {
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
        <a href="#">Quem Somos</a>
        <a href="#">Equipe</a>
        <a href="#">Apoie</a>
        <a href="#">Fale Conosco</a>
      </div>
    </footer>
  );
}



export default Footer;