import React, { useState } from "react";
import '../Navbar/Navbar.css';
import logoNavbar from '../../img/logo-travel-devs.png';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { NavLink, Link } from "react-router-dom";



function Navbar() {
    return (
       
        <nav class="navbar navbar-expand-lg navbar-contenedor ">
            <div class="container-fluid">
                <Link to='/' class="navbar-brand" href="#">
                    <img 
                        className="logo-navbar"
                        src={logoNavbar} 
                        alt="logo e-commerce" 
                    /> 
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="material-symbols-outlined iconColor">menu</span>
                </button>
                <div class="collapse navbar-collapse contLink " id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <NavLink to={`/categoria/mochilas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>Mochilas</NavLink>
                        <NavLink to={`/categoria/tecnologia`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>Tecnología</NavLink>
                        <NavLink to={`/categoria/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>Accesorios</NavLink>
                    </div>
                    <Link to="/cart/Cart" className="anchoCart" >
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;