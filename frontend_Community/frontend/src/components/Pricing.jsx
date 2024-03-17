import '../css/estilos.css'; // Importa tus estilos CSS

import React from 'react';

const Pricing = () => {
  return (
    <section className="price container">
      <h2 className="container__price">Sintoniza con nuestros planes</h2>

      <div className="price__table">
        <div className="price__element">
          <h3 className="price__title">Mensual</h3>
          <div className="price__info">
            <h3 className="price__price">$5/mes</h3>
            <button className="price__cta">Empieza ahora</button>
          </div>
        </div>

        <div className="price__element price__element--best">
          <h3 className="price__title">Anual</h3>
          <div className="price__info">
            <h3 className="price__price">$3/mes</h3>
            <button className="price__cta">Empieza ahora</button>
          </div>
        </div>

        <div className="price__element">
          <h3 className="price__title">Semestral</h3>
          <div className="price__info">
            <h3 className="price__price">$4/mes</h3>
            <button className="price__cta">Empieza ahora</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
