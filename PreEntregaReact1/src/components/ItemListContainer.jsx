

const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="conteiner my-5 col-md-12 text-center" >
            <div className="row ">
                <div className="col text-center">
                    <div className="alert alert-info p-3" role="alert"> {mensaje}</div>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer;

