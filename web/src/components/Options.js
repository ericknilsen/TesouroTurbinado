import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Lista de empregados</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Limpar
    </button>
    </div>

    {props.options.length === 0 && <p className="widget__message">Adicione um novo empregado!</p>}
    {
      props.options.map((option, index) => (
        <Option
          key={option._id}
          id={option._id}
          optionText={option.nome}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;
