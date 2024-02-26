import {useState} from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import PropTypes from 'prop-types';

export default function CreateOrder({cart}){
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [payMethod, setPayMethod] = useState('');
    console.log({"Carringui???": cart});
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
        cart = [];
        console.log('Orden creada con exito');
        window.location.reload();
    } 
    
   const cancelOrder = () => {
        cart = [];
        window.location.reload();
    }

    return (
        <>
        <form className='confirm-form' action="">
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
        </form>
        </>
    )
}


CreateOrder.propTypes = {
    cart: PropTypes.array.isRequired, 
  };