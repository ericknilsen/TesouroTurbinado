import React from 'react';
import Titulo from './Titulo';

const Titulos = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Títulos Públicos cadastrados</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteTitulos}
      >
        Limpar
    </button>
    </div>

    {props.titulos.length === 0 && <p className="widget__message">Adicione um novo titulo!</p>}
    {
      props.titulos.map((titulo, index) => (
        <Titulo
          //key={titulo._id}
          key={titulo}
          //id={titulo._id}
          //text={titulo.nome}
          text={titulo}
          count={index + 1}
          handleDeleteTitulo={props.handleDeleteTitulo}
        />
      ))
    }
  </div>
);

export default Titulos;
