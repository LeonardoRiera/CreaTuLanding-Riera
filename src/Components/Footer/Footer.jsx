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
                    <p>Dirección: Hipolito Irigoyen 1234, Córdoba, Argentina ( ...y alrededor del mundo!)</p>
                    <p>Celular: +358 456 7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;