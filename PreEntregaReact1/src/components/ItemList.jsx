import IconCart from "../assets/cart.svg";
import { useEffect, useState } from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";
import CartWidget from"./CartWidget";
import {Cloudinary} from "@cloudinary/url-gen";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import { FaShoppingCart } from "react-icons/fa";

const ItemList = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'da1xik5zn'}});
  const MySwal = withReactContent(Swal)

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

    if (cart.length === 6) {
      Swal.fire({
        title: "Capacidad maxima!",
        text: "Tu carrito esta lleno, no puedes agregar mas productos!",
        icon: "error"
      });
    }
    console.log(products);
  const toggleCartVisibility = () => {
     (cart.length > 0) ? setCartVisible(!cartVisible)
    : Swal.fire({
      title: "Carrito vacio!",
      text: "Tu carrito se encuentra vacio",
      icon: "error"
    });
  };
    return (
        <>
       {cartVisible && <CartWidget cart={cart}/>}
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
                       cart.length < 6 ?  <button className="add" onClick={() => addToCart(product)}>Agregar</button>
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

export default ItemList;