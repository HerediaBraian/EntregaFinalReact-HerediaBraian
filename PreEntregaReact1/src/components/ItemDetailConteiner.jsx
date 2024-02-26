import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore, collection, getDocs} from "firebase/firestore";
const ItemDetailConteiner = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const [products, setProducts] = useState(null); 

    useEffect(() => {
        
        const db = getFirestore();
        const colRef = collection(db, 'Productos');  

        getDocs(colRef).then((snapshot) => {
        const data= snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));    
        setProducts(data);
    })
    }, [])
    
    if(!products) return <h1>Cargando...</h1>
    console.log(products);
    // const addToCart = (product)=>{
    //     cart.push(product);
    // }
   
            
    return(
        <>
        <h2>Todos los productos</h2>
        {
            products.map((product) => {
                return (
                    <>
                    <h1>{product.title}</h1>
                    </>
                )
            })
        }
        </>
    )
    }


export default ItemDetailConteiner;