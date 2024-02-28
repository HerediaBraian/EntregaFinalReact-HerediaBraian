<<<<<<< HEAD
import { useContext } from "react";
// import {iconCart} from "..//assets/cart.svg";
import { CartContext } from "./CartContex";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ? <Link to={"/cart"} className="btn btn-warning position-relative">
            {/* { <img src={iconCart} alt="Carrito" width={24} /> } */}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> : ""
=======
import {useState} from 'react';
import PropTypes from 'prop-types';
import Checkout from '../pages/orders/Checkout';

export default function Cart(props){
    let { cart } = props;
    const [cartVisible, setCartVisible] = useState(false);

    const cancel = () => {
        cart = [];
        console.log(cart);
        window.location.reload()
    }
    console.log({"cartitooooooo":cart});
    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
      };
      
    return(
        <>
        {cartVisible && <Checkout cart={cart}/>}
    {!cartVisible &&
        <>
        <h1>Estas viendo tu carrito</h1>
        <div className='cart-modal'>
        { 
            cart.map((product)=>{
                return(
                    <article className='product-to-buy' key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.category}</p>
                        <p>${product.price}</p>
                    </article>
                )
            })
        }
    
                   <strong>Total:{cart.reduce((acc, product) => Number(acc) + Number(product.price), 0)}</strong>
          
        <div>
        <button onClick={cancel}>Cancelar</button>
        <button onClick={toggleCartVisibility}>Confirmar</button>
        </div>
        </div>
        </>
        }
        </>

>>>>>>> 793221a347e6ab3d0b5fefb2bf864f1247918566
    )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired, 
  };