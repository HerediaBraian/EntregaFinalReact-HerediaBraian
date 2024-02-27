import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import { addDoc, collection, getDoc, getFirestore, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function ProductDetail(){
    let param = useParams();
    console.log(param);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, 'Productos', param.id);
        
        getDoc(docRef).then((snapshot)=>{
            if(snapshot.exists()){
                setProducts({id: param, ...snapshot.data()})
            }
            console.log(snapshot.data());
        })

    }, [])
    
    if (!products) {
        return <div>Cargando...</div>
    }
    return(
        <div className='product-detail'>
        <h1><strong>{products?.title}</strong></h1>
        <article className='product-card-detail' key={products?.id.id}>
        <p className='description'>Descripcion:   <strong>{products?.description}</strong></p>
        <p className='description'>Categoria:   <strong>{products?.category}</strong></p>
        <p className='price'>Precio:   <strong>{products?.price}</strong></p>
        <img className='img' src={products?.img} alt="" />
        <div className='btns'>
        <Link to='/'><p className='back-home'>Volver</p></Link>
        </div>
        </article>
        </div>
    )
}