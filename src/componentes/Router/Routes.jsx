// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MeuCarrinho from "../Pages/Meu Carrinho/MeuCarrinho";
import QuemSomos from "../Pages/Quem Somos/QuemSomos";
import Equipe from "../Pages/Equipe/Equipe";
import Apoie from "../Pages/Apoie/Apoie";
import FaleConosco from "../Pages/Fale Conosco/FaleConosco";
import CollectionPhoto from "../CollectionPhoto/CollectionPhoto";
import ResultadoColecoes from "../ResultadoColecoes/ResultadoColecoes";
import PlanSelect from "../Pages/Planos/PlanSelector";  // Adicione esta linha
import Payment from "../Pages/Pagamento/Payment";  // Adicione esta linha
import Success from "../Pages/Sucesso/Sucess";
import { PurchaseProvider } from "../../contexts/PurchaseContext";  // Adicione esta linha
import Register from '../Pages/Auths/Register';
import Login from '../Pages/Auths/Login';

function AppRoutes() {
  return (
    <PurchaseProvider> {/* Envolva as rotas com o PurchaseProvider */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meucarrinho/:id" element={<MeuCarrinho />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="/Apoie" element={<Apoie />} />
        <Route path="/FaleConosco" element={<FaleConosco />} />
        <Route path="/Collection/:id" element={<CollectionPhoto />} />
        <Route path="/ResultadoColecoes" element={<ResultadoColecoes />} />
        <Route path="/plan-select" element={<PlanSelect />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </PurchaseProvider>
  );
}

export default AppRoutes;
