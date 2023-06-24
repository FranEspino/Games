import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">

      <div className="footer1">
        <div className="content-footer">
          <span>Contacto</span>
          <span>FAQ</span>
          <span>Consultar pedido</span>
        </div>
        <div className="content-footer">
          <span>Empresa</span>
          <span>Noticias</span>
          <span>Entregas de pedido</span>
        </div>
      </div>

      <div className="footer2">
            <div className="contact">
                <span>Regístrate y recibe un 15 % de descuento en tu primer pedido</span>
                <button className="btn-contact">Contactar</button>
            </div>
            <p>Copyrigth @2023 Idat</p>
      </div>

    </div>
  );
};

export default Footer;
