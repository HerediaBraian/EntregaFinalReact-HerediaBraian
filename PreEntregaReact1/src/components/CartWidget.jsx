import IconCart from "../assets/cart.svg";

const CartWidget = () => {
    return (

        <button type="button" class="btn btn-primary position-relative">
            <img src={IconCart} alt="carrito" width={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
        </button>
    )
}

export default CartWidget;