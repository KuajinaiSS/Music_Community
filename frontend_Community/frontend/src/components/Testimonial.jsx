import '../css/estilos.css'; // Importa tus estilos CSS
import { face, face2, face3, face4, leftarrow, rightarrow } from '../images';


import React from 'react';

const Testimonial = () => {
  return (
    <section className="testimony">
      <div className="testimony__container container">
        <img src={leftarrow} className="testimony__arrow" id="before" />

        <section className="testimony__body testimony__body--show" data-id="1">
          <div className="testimony__texts">
            <h2 className="subtitle">Mi nombre es Anabel, <span className="testimony__course">usuaria hace más de un año.</span></h2>
            <p className="testimony__review">Gracias a Music Community encuentro mi espacio para cuidar de mi misma escuchando lo que amo y transmitiendo lo que siento.</p>
          </div>

          <figure className="testimony__picture">
            <img src={face} className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body" data-id="2">
          <div className="testimony__texts">
            <h2 className="subtitle">Mi nombre es Alex y Laura, <span className="testimony__course">pareja que se conoció por medio de la app.</span></h2>
            <p className="testimony__review">Al hacernos parte de la comunidad logramos sintonizar y hoy llevamos 2 lindos años de relación.</p>
          </div>

          <figure className="testimony__picture">
            <img src={face2} className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body" data-id="3">
          <div className="testimony__texts">
            <h2 className="subtitle">Mi nombre es María Camila, <span className="testimony__course">usuaria influencer de estilo de vida.</span></h2>
            <p className="testimony__review">Lo que más amo de Music Community es que me permite transmitir mi pasión por los concierto y la música en vivo.</p>
          </div>

          <figure className="testimony__picture">
            <img src={face3} className="testimony__img" />
          </figure>
        </section>

        <section className="testimony__body" data-id="4">
          <div className="testimony__texts">
            <h2 className="subtitle">Mi nombre es Almendra, <span className="testimony__course">estudiante y trabajadora.</span></h2>
            <p className="testimony__review">Music Community me acompaña a todas partes, ya sea la universidad o el trabajo.</p>
          </div>

          <figure className="testimony__picture">
            <img src={face4} className="testimony__img" />
          </figure>
        </section>

        <img src={rightarrow} className="testimony__arrow" id="next" />
      </div>
    </section>
  );
}

export default Testimonial;
