import IconCart from "../assets/cart.svg";
import { useEffect, useState } from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import CreateOrder from "../pages/orders/CreateOrder";
import {Cloudinary} from "@cloudinary/url-gen";

// import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'da1xik5zn'}});

    const [cartVisible, setCartVisible] = useState(false);
    const [products, setProducts] = useState(null); 
    const [cart,setCart] = useState([])

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
        setCart(prevCart=> [...prevCart, product]);
        console.log(cart);
    }

    if (cart.length === 5) {
        alert('No se pueden agregar mas productos al carrito.');
    }
    console.log(products);
  const toggleCartVisibility = () => {
     (cart.length > 0) ? setCartVisible(!cartVisible)
    : alert('No hay productos en el carrito');
  };
    return (
        <>
       {cartVisible && <Cart cart={cart}/>}

          {
            products?.map(product => {
                return (
                    <article className='product-card'  key={product.id}>
                      <div className="header-card">
                    <p className='title'>{product.title}</p>
                   
                    <button onClick={toggleCartVisibility}> <img src={IconCart} alt="" /></button>
                      </div>
                    <img className='img' src={product.img}></img>
                    <p className='price'>${product.price}</p>
                    <Link to={`/products/${product.id}/detail`}><p className='detail-btn'>Detalle</p></Link>
                    {
                       cart.length < 5 ?  <button className="add" onClick={() => addToCart(product)}>Agregar</button>
                       :
                       <button disabled>Agregar</button> 
                    }
                    {/* <button onClick={sendOrder}>Comprar</button> */}
                    </article>
            )})
        }
        </>
    )
}

export default CartWidget;