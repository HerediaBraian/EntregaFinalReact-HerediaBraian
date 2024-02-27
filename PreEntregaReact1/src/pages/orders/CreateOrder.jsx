import {useState} from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import PropTypes from 'prop-types';

export default function CreateOrder({cart}){
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [payMethod, setPayMethod] = useState('');
    const [showOrder, setShowOrder] = useState(false);
    const [order, setOrder] = useState({});
    
    const handleSubmitName = (e) => {
        setName(e.target.value);
    } 
    const handleSubmitLastName = (e) => {
        setLastName(e.target.value);
    } 
    const handleSubmitEmail = (e) => {
        setEmail(e.target.value);
    } 
    const handleSubmitPayMethod = (e) => {
        setPayMethod(e.target.value);
    } 


   const createOrder = async (e) => {
        e.preventDefault();
        const order = {
            buyer:{
                name,
                lastName,
                email,
                payMethod
            },
            cart: {
                products: cart,
                total: cart.reduce((acc, product) => Number(acc) + Number(product.price), 0),
            }
        }
        const db =  getFirestore();
        const colRef =  collection(db, 'orders');
        await addDoc(colRef, order).then((res)=>res)
        setOrder(order);
        console.log({"order":order});
        cart = [];
        console.log('Orden creada con exito');
        setShowOrder(true)
        console.log(showOrder);
        setTimeout(() => {
            window.location.reload();
        }, 10000);
    } 
    
   const cancelOrder = () => {
        cart = [];
        window.location.reload();
    }

    return (
        <>
        <form className='confirm-form' action="">
        {         !showOrder ? (
        <>
        <h1>Confirma tu compra</h1>
            <input type="text"  placeholder='Nombre' onChange={handleSubmitName}/><input placeholder='Apellido'  onChange={handleSubmitLastName} type="text" />
            <input placeholder='Email' onChange={handleSubmitEmail} type="text" />
            <select onChange={handleSubmitPayMethod}  name="" id="">
                <option value="creditCard">Tarjeta de credito</option>
                <option value="debitCard">Tarjeta de debito</option>
                <option value="mercadoPago">Mercado Pago</option>
            </select>
            <div>
            <button onClick={createOrder}>Confirmar Compra</button>
            <button onClick={cancelOrder}>Cancelar Compra</button>
            </div>
            </>)
 :          (
            <>
            <h1>Orden creada con exito</h1>
            <div>
            <p>Datos Comprador: {order.buyer.name}</p>
            <p>Nombre Completo: {order.buyer.lastName}</p>
            <p>Email: {order.buyer.email}</p>
            <p>Metodo de pago: {order.buyer.payMethod}</p>
            <p>Datos Compra: </p>
            <div className='order-products'>
            {order.cart.products.map(product => {
                return (
                    <div className='order-products-item' key={product.id}>
                    <p>Producto: {product.title}</p>
                    <p>Precio: {product.price}</p>
                    <p>Categoria: {product.category}</p>
                    </div>
                )
            })}
            </div>
            <p>Precio Final: {order.cart.total}</p>

            </div>
            </>
    )        }
        </form>
        </>
    )
}


CreateOrder.propTypes = {
    cart: PropTypes.array.isRequired, 
  };