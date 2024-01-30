import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

const ItemDetailConteiner = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id === id);
                resolve(producto);
            }, 2000);
    })
    promesa.then(data => {
        setItem(data);
    })
    }, {id});
            
    return(
        <ItemDetail item={item}/>
    )
    }


export default ItemDetailConteiner;