import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Categorys() {
    const category = useParams().category.toLowerCase();
    console.log(category);


    const [products, setProducts] = useState(null); 

    useEffect(() => {
      const db = getFirestore();
      const colRef = collection(db, 'Productos');  

    getDocs(colRef).then((snapshot) => {
        let data= snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));  
        data = data.filter(product => product.category === category);  
        setProducts(data);
    })
    }, [category])
    console.log({"PPPP:": products});

    if(!products) return <h1>Cargando...</h1>
    return (
        <div>
            <h1>{category.toUpperCase()}</h1>
            {
                products.map(product => {
                    return (
                        <article className='product-card'  key={product.id}>
                         
                        <p className='title'>{product.title}</p>
                        <img className='img' src={product.img}></img>
                        <p className='price'>${product.price}</p>
                        <Link to={`/products/${product.id}/detail`}><p className='detail-btn'>Detalle</p></Link>
               
                        </article>
                )})
            }
        </div>
    )
}