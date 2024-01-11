import CartWidget from "./CartWidget";
import Logo from "./Logo";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-ligth-tertiary shadow p-4 col-md-12">
            <div className="container-fluid">
                <div>
                    <Logo/>
                </div>
                <a className="navbar-brand" href="#" >Miura</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;