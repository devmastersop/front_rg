import React, { Component } from 'react';
import './estilos.css'
import {Button} from 'react-bootstrap'

class Buscador extends Component {

    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();

        //toma el valor del impu y lo envia al componente principal
        const termino = this.busquedaRef.current.value;

        this.props.datosBusqueda(termino);
    }
    obtenerDatos2=(e)=>{
        e.preventDefault();
        const termino =this.busquedaRef.current.value;
        this.props.dataBusqueda(termino);
    }

    render() {
        return (
            <div className="todo">
                 <form className="buscador " >
                <div>
                    <label  className="cod-md-1" for="info">{this.props.inputtipo}    :</label>
                    <input className="col-md-2  " id="ingresarDatos" ref={this.busquedaRef}  placeholder={this.props.inputtipo} type="text"  id="info" name="info" />
                    <Button variant="primary" onClick={this.obtenerDatos}>Buscar</Button>
                    <Button variant="warning" onClick={this.obtenerDatos2}>Nuevo Profesor</Button>
                    
                    
                </div>
            </form>
            
            </div>
           
        );
    }
}

export default Buscador;