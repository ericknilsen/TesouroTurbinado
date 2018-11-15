import React from 'react';

export default class AddTitulo extends React.Component {
    state = {
        error: undefined
    };
    handleAddTitulo = (e) => {
        e.preventDefault();
        const titulo = e.target.elements.titulo.value.trim();
        const error = this.props.handleAddTitulo(titulo);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.titulo.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddTitulo}>
                    <input className="add-option__input" type="text" name="titulo" />
                    <button className="button">Gravar</button>
                </form>
            </div>
        )
    }

}