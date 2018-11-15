import React from 'react';
import Header from './util/component/Header'
import AddTitulo from './titulo/components/AddTitulo'
import Titulos from './titulo/components/Titulos'

export default class TesouroTurbinado extends React.Component {

    state = {
        titulos: [],
        selectedTitulo: undefined
    }

    handleAddTitulo = (titulo) => {
        if (!titulo) {
            return 'Digite um valor válido para adicionar um item';
        }

        this.setState((prevState) => ({
            titulos: prevState.titulos.concat(titulo)
        }));
    }
    handleDeleteTitulos = () => {
        this.setState(() => ({ titulos: [] }));
    }

    handleDeleteTitulo = (tituloToRemove) => {
        this.setState((prevState) => ({
            titulos: prevState.titulos.filter((titulo) => tituloToRemove !== titulo)
        }));
    };

    render() {
        const subtitle = 'Cadastro de Títulos Públicos';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <div className="widget">
                        <Titulos
                            titulos={this.state.titulos}
                            handleDeleteTitulos={this.handleDeleteTitulos}
                            handleDeleteTitulo={this.handleDeleteTitulo}
                        />

                        <AddTitulo handleAddTitulo={this.handleAddTitulo}
                        />

                    </div>
                </div>
            </div>
        )
    }

}