import {Link} from "react-router-dom";
import logo from '../assets/logo entrega.jpeg';

const NavBar = () => {
    return (
        <header>
            <img src={logo} className="logo" alt="" />
        <nav id='nav'>
          <h1 id='brand'></h1>
          <ul id='nav-list'>
          <Link to='/home'> <li className='list-item'>Home</li></Link>
          <Link to='/create'><li className='list-item'>Crear Producto</li></Link>
              <ul className='show'>
            {/* <Link to='/category/Urbanas'><li>Urbanas</li></Link>
            <Link to='/category/Oversize'><li>Oversize</li></Link>
            <Link to='/category/Musculosas'><li>Musculosas</li></Link> */}
              </ul>
          </ul>
       
      </nav>
      </header>
    )
}

export default NavBar;