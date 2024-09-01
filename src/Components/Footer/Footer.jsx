// Footer.js
import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo para los estilos
import logo from '../../img/logo-travel-devs.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="Logo" className="footer-logo" />
                <div className="footer-info">
                    <h4>Soluciones Reales para Nómadas Digitales</h4>
                    <p>Address: 1234 Street Name, City, Country ( ...y alrededor del mundo!)</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;