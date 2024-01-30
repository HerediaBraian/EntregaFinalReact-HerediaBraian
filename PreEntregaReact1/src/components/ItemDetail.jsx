import ItemCount from "./ItemCount";

const  ItemDetail = ({item}) => {
return(
    <div className="conteiner">
        <div className="row">
            <div className="col-md-4">
                <img src={item.image} alt={item.title} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <ItemCount/>
            </div>
        </div>
    </div>
)

}
export default ItemDetail;