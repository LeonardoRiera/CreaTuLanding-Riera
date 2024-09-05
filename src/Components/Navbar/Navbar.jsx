import React from "react";
import '../Navbar/Navbar.css';
import logoNavbar from '../../img/logo-travel-devs.png';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { NavLink, Link } from "react-router-dom";



function Navbar() {
    return (
        <nav className="navbar-contenedor">

            <div className="logo-links-navbar-contenedor">

               <Link to='/'>    
                    <img 
                            className="logo-navbar"
                            src={logoNavbar} 
                            alt="logo e-commerce" 
                        />    
               </Link>

                <div className="Categories">
                    <NavLink to={`/categoria/mochilas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>Mochilas</NavLink>
                    <NavLink to={`/categoria/tecnologia`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>Tecnología</NavLink>
                    <NavLink to={`/categoria/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>Accesorios</NavLink>
                </div>

            </div>    
            <Link to="/cart/Cart" className="anchoCart" >
                <CartWidget />
            </Link>
            
            
        </nav>
    )
}

export default Navbar;