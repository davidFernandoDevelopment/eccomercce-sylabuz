import React from 'react';

const Footer = () => {
    return (
        <footer className="c-footer o-section">
            <div className="c-footer__container o-container o-grid">
                <div className="c-footer__content">
                    <h3 className="c-footer__title">
                        Nuestra información
                    </h3>
                    <ul className="c-footer__list">
                        <li>124 - Peru</li>
                        <li>Lima - Peru</li>
                        <li>123-456-789</li>
                    </ul>
                </div>
                <div className="c-footer__content">
                    <h3 className="c-footer__title">
                        Acerca de nosotros
                    </h3>
                    <ul className="c-footer__links">
                        <li>
                            <a href="#" className="c-footer__link">
                                Centro de soporte
                            </a>
                        </li>
                        <li>
                            <a href="#" className="c-footer__link">
                                Soporte personalizado
                            </a>
                        </li>
                        <li>
                            <a href="#" className="c-footer__link">
                                Conócenos
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="c-footer__content">
                    <h3 className="c-footer__title">
                        Producto
                    </h3>
                    <ul className="c-footer__links">
                        <li>
                            <a href="#" className="c-footer__link">
                                Aceites
                            </a>
                        </li>
                        <li>
                            <a href="#" className="c-footer__link">
                                Arroces
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="c-footer__content">
                    <h3 className="c-footer__title">
                        Redes sociales
                    </h3>
                    <ul className="c-footer__social">
                        <a href="#" className="c-footer__social-link">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#" className="c-footer__social-link">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="#" className="c-footer__social-link">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                    </ul>
                </div>

                <span className="c-footer__copy">
                    &#169;Comercial Sánchez todos los derechos reservados
                </span>
            </div>
        </footer>
    );
};

export default Footer;