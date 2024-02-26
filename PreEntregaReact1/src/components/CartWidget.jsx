import IconCart from "../assets/cart.svg";
import { useEffect, useState } from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import CreateOrder from "../pages/orders/CreateOrder";


const CartWidget = () => {
    const [cartVisible, setCartVisible] = useState(false);
    const [products, setProducts] = useState(null); 
    const [cart,setCart] = useState([])

    let show = false;
    useEffect(() => {
      const db = getFirestore();
      const colRef = collection(db, 'Productos');  

    getDocs(colRef).then((snapshot) => {
        const data= snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));    
        setProducts(data);
    })
    }, [])

    if(!products) return <h1>Cargando...</h1>

    const addToCart = (product) => {
        setCart(prevCart=> [...cart, product]);
        console.log(cart);
    }

    if (cart.length === 5) {
        alert('No se pueden agregar mas productos al carrito.');
    }

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };
    return (
        <>
       {cartVisible && <Cart cart={cart}/>}

          {
            products?.map(product => {
                return (
                    <article className='product-card'  key={product.id}>
                    <p className='title'>{product.title}</p>
                    <img className='img' src={product.img}></img>
                    <p className='description'>{product.description}</p>
                    <p className='price'>${product.price}</p>
                    {/* <p className='title'>id: {product.id}</p> */}
                    <Link to={`/products/${product.id}/detail`}><p className='detail-btn'>Detalle</p></Link>
                    {/* <Link to={`/edit/${product.id}`}><p className='edit-btn'>Editar</p></Link> */}
                 
                    {
                       cart.length < 5 ?  <button onClick={() => addToCart(product)}>Agregar</button>
                       :
                       <button disabled>Agregar</button> 
                    }
                    <button onClick={toggleCartVisibility}>Carrito</button>
                    {/* <button onClick={sendOrder}>Comprar</button> */}
                    </article>
            )})
        }
        </>
    )
}

export default CartWidget;