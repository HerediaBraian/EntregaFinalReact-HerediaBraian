import { useState } from "react";
<<<<<<< HEAD
import arrayProductos from "./json/productos.json";
=======
>>>>>>> 793221a347e6ab3d0b5fefb2bf864f1247918566
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList'
// import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();


    return (
        <>
        <h1>Lista de productos</h1>
        <div className="item-conteiner">
        <ItemList/>
        </div>
        </>
    )
}

export default ItemListContainer;

