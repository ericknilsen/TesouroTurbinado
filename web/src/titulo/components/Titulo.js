import React from 'react';

const Titulo = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.text}</p>
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteTitulo(props.text);
      }}
    >
      remover
      </button>
  </div>
);

export default Titulo;
