import '../css/estilos.css'; // Importa tus estilos CSS
import { compartir, comunidad, vibrar } from '../images';

import React from 'react';

const Features = () => {
  return (
    <section className="knowledge">
      <section>
        <div className="about__main">
          <article className="about__article">
            <img src={vibrar} alt="vibrar" />
            <h3 className="about__title">Vive la Música</h3>
            <p className="about__paragrah">Descubre la música vibrante que encienda tu alma</p>
          </article>

          <article className="about__article">
            <img src={compartir} alt="vibrar" />
            <h3 className="about__title"> Comparte tus Emociones</h3>
            <p className="about__paragrah">Comparte la música que inspira tu corazón</p>
          </article>

          <article className="about__article">
            <img src={comunidad} alt="vibrar" />
            <h3 className="about__title"> Haz Comunidad</h3>
            <p className="about__paragrah">Únete a la comunidad de la música que te inspira</p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Features;