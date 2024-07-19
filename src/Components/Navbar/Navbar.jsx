import React from "react";
import '../Navbar/Navbar.css';
import logoNavbar from '../../img/juniorRowWhite.png';
import CartWidget from '../CartWidget/CartWidget.jsx';

function Navbar() {
    return (
        <nav className="navbar-contenedor">

            <div className="logo-links-navbar-contenedor">

               <a href="#">
               <img 
                    className="logo-navbar"
                    src={logoNavbar} 
                    alt="logo e-commerce" 
                />
               </a>

            

                <div className="links-navbar-contenedor">
                    <ul className="liks-ul-contenedor">
                        <li className="link-item"><a href="">Deportes</a></li>
                        <li className="link-item"><a href="">Moda</a></li>
                        <li className="link-item"><a href="">Contacto</a></li>
                        <li className="link-item"><a href="">BlackFriday</a></li>
                    </ul>
                </div>

            </div>    

           
            <CartWidget />
            

        </nav>
    )
}

export default Navbar;