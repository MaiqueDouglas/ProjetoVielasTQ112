import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MeuCarrinho from "../Pages/Meu Carrinho/MeuCarrinho";
import QuemSomos from "../Pages/Quem Somos/QuemSomos";
import Equipe from "../Pages/Equipe/Equipe";
import Apoie from "../Pages/Apoie/Apoie";
import FaleConosco from "../Pages/Fale Conosco/FaleConosco";
import CollectionPhoto from "../CollectionPhoto/CollectionPhoto";
import PlanSelector from "../Pages/PlanSelector/PlanSelector";


function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meucarrinho/:id" element= {<MeuCarrinho/>} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="/Apoie" element={<Apoie />} />
        <Route path="/FaleConosco" element={<FaleConosco />} />
        <Route path="/Collection/:id" element={<CollectionPhoto />} />
        <Route path="/plan-select" element={<PlanSelector/>} />
      </Routes>
    
  );
}

export default AppRoutes;
