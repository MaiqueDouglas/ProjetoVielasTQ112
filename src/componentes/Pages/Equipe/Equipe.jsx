import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import './Equipe.css';
import Anderson from '../../../assets/img-Anderson.jpeg';
import Tamires from '../../../assets/img-Tamires.jpeg';
import Leu from '../../../assets/img-Leu.jpeg';
import Magno from '../../../assets/img-Magno.jpeg';
import QRcode from '../../../assets/img-Qr.jpeg';

function Equipe() {
  return (
    <div>
      <Header />
      <div className="container-equipe">
        <h1>EQUIPE</h1>
        <div className="equipe">
          <div className="membro-equipe">
            <img src={Anderson} alt="User Icon" />
            <h2>Anderson<br />Meneses</h2>
          </div>
          <div className="membro-equipe">
            <img src={Tamires} alt="User Icon" />
            <h2>Tamires<br />Gomes</h2>
          </div>
          <div className="membro-equipe">
            <img src={Leu} alt="User Icon" />
            <h2>Léu<br />Brito</h2>
          </div>
          <div className="membro-equipe">
            <img src={Magno} alt="User Icon" />
            <h2>Magno<br />Borges</h2>
          </div>
          <div className="containerQR">
            <img src={QRcode} alt="User Icon" />
            <h1>angenciamural.org.br</h1><br></br>
            <h2>@agenciamural</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Equipe;
