import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();

        //toma el valor del impu y lo envia al componente principal
        const termino = this.busquedaRef.current.value;

        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div>
                    <input id="ingresarDatos" ref={this.busquedaRef}  placeholder="DNI" type="text" name="cuadro" />
                    <button id='botonBuscar' >Buscar</button>
                </div>
            </form>
        );
    }
}

export default Buscador;