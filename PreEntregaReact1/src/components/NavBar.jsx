import {NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-ligth-tertiary shadow p-4 col-md-12">
            <div className="container-fluid">
                <div>
                    <Logo/>
                </div>
                <NavLink className="navbar-brand" to={"/"} >Miura</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/productos"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/urbanas"}>Remeras Urbanas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/oversizes"}>Remeras Oversize</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/musculosas"}>Musculosas</NavLink>
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