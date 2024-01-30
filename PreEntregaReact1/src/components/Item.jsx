const Item = ({item}) => {
    return(
        <div className="col-md-3 text-center">
            <div className="card border -0">
                <Link>
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <p className="card-text">{item.title}</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;