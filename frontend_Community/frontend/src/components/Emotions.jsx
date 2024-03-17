import React from 'react';
import '../css/estilos.css'; // Importa tus estilos CSS
import { Alegria, Impresion, Ira, Tristeza } from '../images';

const Emotions = () => {
  return (
    <section className="container about">
      <h2 className="about__paragraph">¿Qué emoción te está haciendo vibrar hoy?</h2>

      <div className="container__emociones">
        <div className="image-container">
          <img src={Alegria} alt="alegria" />
          <div className="overlay">
            <button>Alegría</button>
          </div>
        </div>

        <div className="image-container">
          <img src={Ira} alt="ira" />
          <div className="overlay">
            <button>Disgusto</button>
          </div>
        </div>

        <div className="image-container">
          <img src={Impresion} alt="sorpresa" />
          <div className="overlay">
            <button>Sorpresa</button>
          </div>
        </div>

        <div className="image-container">
          <img src={Tristeza} alt="tristeza" />
          <div className="overlay">
            <button>Tristeza</button>
          </div>
        </div>
      </div>
      <h2>No solo escucha, vibra con tus emociones y tu comunidad junto a MUSSIC COMMUNITY </h2>
    </section>
  );
}

export default Emotions;