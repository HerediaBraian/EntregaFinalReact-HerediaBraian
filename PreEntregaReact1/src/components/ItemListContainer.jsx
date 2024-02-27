import { useState } from "react";
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

