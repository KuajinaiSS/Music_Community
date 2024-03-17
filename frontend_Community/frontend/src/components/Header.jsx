import '../css/estilos.css'; // Importa tus estilos CSS
import { close, Imagotipo_MC, menu } from '../images';


import React from 'react';

const Header = () => {
  return (
    <header className="hero">
      <nav className="nav container">

        <div className="logo__container">
          <img src={Imagotipo_MC} alt="Imagotipo MC" />
        </div>

        <ul className="nav__link nav__link--menu">
          <li className="nav__items">
            <button><a href="#" className="nav__links">Principal</a></button>
          </li>
          <li className="nav__items">
            <button><a href="#" className="nav__links">Comunity</a></button>
          </li>
          <li className="nav__items">
            <button><a href="#" className="nav__links">Log in</a></button>
          </li>
          <li className="nav__items">
            <button><a href="#" className="nav__links">Register</a></button>
          </li>
          <img src={close} className="nav__close" />
          
        </ul>

        <div className="nav__menu">
          <img src={menu} className="nav__img" />
        </div>
      </nav>

      <section className="hero__container container">
        <h1 className="hero__title">Transmite tus emociones a la música</h1>
        <p className="hero__paragraph"> La música sin transmitir emociones es solo música</p>
        <a href="#" className="cta">Vibra ahora</a>
      </section>
    </header>
  );
}

export default Header;
