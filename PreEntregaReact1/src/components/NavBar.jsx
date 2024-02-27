import {Link} from "react-router-dom";
import logo from '../assets/logo entrega.jpeg';

const NavBar = () => {
    return (
        <header>
            <img src={logo} className="logo" alt="" />
        <nav id='nav'>
          <h1 id='brand'></h1>
          <ul id='nav-list'>
          <Link to='/'> <li className='list-item'>Home</li></Link>
            <Link to='/category/urban'><li>Urbanas</li></Link>
            <Link to='/category/oversize'><li>Oversize</li></Link>
            <Link to='/category/musculosa'><li>Musculosas</li></Link> 
          </ul>
       
      </nav>
      </header>
    )
}

export default NavBar;