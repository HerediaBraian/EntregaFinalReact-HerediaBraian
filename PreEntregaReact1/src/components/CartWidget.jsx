import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CreateOrder from '../../pages/orders/CreateOrder';

export default function Cart(props){
    let { cart } = props;
    const [cartVisible, setCartVisible] = useState(false);
    const confirm = () => {
        
    }
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
        {cartVisible && <CreateOrder cart={cart}/>}
    {!cartVisible &&
        <>
        <h1>Estas viendo tu carrito</h1>
        <div className='cart-modal'>
        { 
            cart.map((product)=>{
                return(
                    <article className='product-to-buy' key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </article>
                )
            })
        }
        <button onClick={cancel}>Cancelar</button>
        <button onClick={toggleCartVisibility}>Confirmar</button>
        </div>
        </>
        }
        </>

    )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired, 
  };