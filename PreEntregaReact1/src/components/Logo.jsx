import LogoEmpresa from "../assets/logo entrega.jpeg";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
    <Link to={"/"}>
        <img src= {LogoEmpresa} alt="logo Empresa" width={80}/>
    </Link>   
    )
}

export default Logo; 
