import "../css/estilos.css";
import { close, Imagotipo_MC, menu } from "../images";
import { Link, Route, Routes, Switch} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="hero">
        <nav className="nav container">
          <div className="logo__container">
            <img src={Imagotipo_MC} alt="Imagotipo MC" />
          </div>

          <ul className="nav__link nav__link--menu">
            <li className="nav__items">
              <button>
                <Link to="/" className="nav__links">
                  Principal
                </Link>
              </button>
            </li>

            <li className="nav__items">
              <button>
                <Link to="#" className="nav__links">
                  Comunity
                </Link>
              </button>
            </li>

            <li className="nav__items">
              <button>
                <Link to="/login" className="nav__links">
                  Log in
                </Link>
              </button>
            </li>

            <li className="nav__items">
              <button>
                <Link to="/register" className="nav__links">
                  Register
                </Link>
              </button>
            </li>

            <img src={close} className="nav__close" />
          </ul>

          <div className="nav__menu">
            <img src={menu} className="nav__img" />
          </div>
        </nav>

        <section className="hero__container container">
          <h1 className="hero__title">Transmite tus emociones a la música</h1>
          <p className="hero__paragraph">
            {" "}
            La música sin transmitir emociones es solo música
          </p>
          <a href="#" className="cta">
            Vibra ahora
          </a>
        </section>
      </header>
    </>
  );
};

export default Header;
