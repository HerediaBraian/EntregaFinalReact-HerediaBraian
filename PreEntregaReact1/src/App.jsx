import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import Cart from "./components/cart/Cart";
import CreateOrder from "./pages/orders/CreateOrder";
import './App.css';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/home" exact={true} component={ItemListContainer}/>
      </Switch>
      </Router>
    </>
  )
}

export default App;
