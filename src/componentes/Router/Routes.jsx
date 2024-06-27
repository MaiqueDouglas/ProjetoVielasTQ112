// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MeuCarrinho from "../Pages/Meu Carrinho/MeuCarrinho";
import QuemSomos from "../Pages/Quem Somos/QuemSomos";
import Equipe from "../Pages/Equipe/Equipe";
import Apoie from "../Pages/Apoie/Apoie";
import FaleConosco from "../Pages/Fale Conosco/FaleConosco";
import CollectionPhoto from "../CollectionPhoto/CollectionPhoto";
import Sucess from "../Pages/Sucesso/Sucess";

import { PurchaseProvider } from "../../contexts/PurchaseContext";
import { CartProvider } from "../../contexts/CartContext";
import PlanSelector from "../Pages/PlanSelector/PlanSelector";
import Payment from "../Pages/Pagamento/Payment";
import Register from "../Pages/Auths/Register";
import Login from "../Pages/Auths/Login";
import Profile from "../Pages/Perfil/Profile";


function AppRoutes() {
  return (
    <PurchaseProvider> {/* Envolve todas as rotas com o PurchaseProvider */}
      <CartProvider> {/* Envolve todas as rotas com o CartProvider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meucarrinho" element={<MeuCarrinho />} />
          <Route path="/QuemSomos" element={<QuemSomos />} />
          <Route path="/Equipe" element={<Equipe />} />
          <Route path="/Apoie" element={<Apoie />} />
          <Route path="/FaleConosco" element={<FaleConosco />} />
          <Route path="/Collection/:id" element={<CollectionPhoto />} />
          <Route path="/PlanSelector" element={<PlanSelector />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </CartProvider>
    </PurchaseProvider>
  );
}

export default AppRoutes;