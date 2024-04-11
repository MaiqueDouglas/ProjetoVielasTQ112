import Header from "../../Header/Header";
import Input from "../../Input/Input";
import Banner from "../../Banner/Banner"
import Footer from "../../Footer/Footer";
import Atalho from "../../Atalho/Atalho";
import Collection from "../../Collection/Collection";





function home() {
  return (
    <div>
    <Header/>
    <Input/>
    <Atalho/>
    <Banner/>
    <Collection/>
    <Footer/>
    </div>
  );
}

export default home;
