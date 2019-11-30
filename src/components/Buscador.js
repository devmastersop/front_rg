import React, { Component } from 'react';
import './estilos.css'

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
            <form className="buscador " onSubmit={this.obtenerDatos}>
                <div>
                    <label  className="cod-md-1" for="info">{this.props.inputtipo}    :</label>
                    <input className="col-md-2  " id="ingresarDatos" ref={this.busquedaRef}  placeholder={this.props.inputtipo} type="text"  id="info" name="info" />
                    <button className="col-md-1 ml-5 btn btn-primary"  id='botonBuscar' >Buscar</button>
                </div>
            </form>
        );
    }
}

export default Buscador;