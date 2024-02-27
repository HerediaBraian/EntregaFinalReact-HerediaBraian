import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CartWidget from "./CartWidget";
// import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();


    return (
        <>
        <h1>Lista de productos</h1>
        <div className="item-conteiner">
        <CartWidget/>
        </div>
        </>
    )
}

export default ItemListContainer;

