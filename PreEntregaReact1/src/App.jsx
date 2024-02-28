import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import './App.css';
import {Cloudinary} from "@cloudinary/url-gen";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Categorys from "./pages/categorys/Categorys";

const App = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'da1xik5zn'}});
  
  
  
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={ItemListContainer}/>
        <Route path="/products/:id/detail" exact={true} component={ItemDetailConteiner}/>
        <Route path="/category/:category" exact={true} component={Categorys}/>
      </Switch>
      </Router>
    </>
  )
}

export default App;
