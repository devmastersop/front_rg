import React from 'react';
import logo from './logo.svg';
import './App.css';

import Buscador from './components/Buscador';
import Titulo from './components/Titulo';
import Docente from './components/Docente'
import BuscadorPeriodo from './components/BuscadorPeriodo';




class App extends React.Component {

  state = {
    termino: '',
    termino2:'',
    docente: []
  }

  consularApi = () => {

    const termino = this.state.termino;
    const url = `http://localhost:3050/regpayroll/v1/teachers/${this.state.termino}`  ;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then((data) => {
        this.setState({ docente: data, busqueda: '' })
      }).catch(console.log)
  }
  consultarApi = () => {

    const termino = this.state.termino;
    const url = `http://localhost:3050/regpayroll/v1/teachers?name=${this.state.termino}`  ;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then((data) => {
        this.setState({ docente: data, busqueda: '' })
      }).catch(console.log)
  }

  datosBusqueda = (termino) => {
    console.log(termino);

    this.setState({
      termino
    }, () => {
      this.consularApi();
    })
  }
  datosBusqueda2 = (termino) => {
    console.log(termino);

    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }
  

  render() {
    return (
      <div>
        <Titulo />
        <Buscador
          inputtipo="NÚMERO DNI"
          datosBusqueda={this.datosBusqueda}
        />
        <Buscador
          inputtipo="APE. PATERNO"
          datosBusqueda={this.datosBusqueda2}
        />
        <BuscadorPeriodo />
        
        <Docente
          docente={this.state.docente}
        />
      </div>
    );
  }
}

export default App;
