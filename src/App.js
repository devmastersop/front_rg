import React from 'react';
import logo from './logo.svg';
import './App.css';

import Buscador from './components/Buscador';
import Titulo from './components/Titulo';
import Docente from './components/Docente'



class App extends React.Component {

  state = {
    termino: '',
    docente: []
  }

  consularApi = () => {

    const termino = this.state.termino;
    const url = 'http://localhost:3050/regpayroll/v1/teachers/' + termino;

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

  render() {
    return (
      <div>
        <Titulo />
        <Buscador
          datosBusqueda={this.datosBusqueda}
        />

        <Docente
          docente={this.state.docente}
        />
      </div>
    );
  }
}

export default App;
