import React from 'react';
import logo from './logo.svg';
import './App.css';

import Buscador from './components/Buscador';
import Titulo from './components/Titulo';
import Docente from './components/Docente'
import BuscadorPeriodo from './components/BuscadorPeriodo';
import DocenteActualizado from './components/DocenteActualizado';




class App extends React.Component {

  state = {
    termino: '',
    a:'',
    b:'',
    docente: [],
    id:''
  }
  obtenerpdf=()=>{
    const termino = this.state.termino;
    const url = `http://localhost:3050/regpayroll/v1/teachers/${this.state.termino}/pdf`  ;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then((data) => {
        this.setState({ docente: data 
        })
      }).catch(console.log)

  }
  consulta=()=>{
    const termino = this.state.termino;
    const url = `http://localhost:3050/regpayroll/v1/teachers/${this.state.termino}`  ;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then((data) => {
        this.setState({ docente: data 
        })
      }).catch(console.log)

  }
 
  consularApi = () => {

    const termino = this.state.termino;
    const url = `http://localhost:3050/regpayroll/v1/teachers/${this.state.termino}`  ;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then((data) => {
        this.setState({ docente: data },()=>{
          this.actualizarid();
        })
      }).catch(console.log)

    
    
  }
  consultarApi = () => {

    const termino = this.state.termino;
    const url = `http://localhost:3050/regpayroll/v1/teachers?name=${this.state.termino}`  ;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then((data) => {
        this.setState({ docente: data},()=>{
          this.actualizarid();
      })
    }).catch(console.log)
  }
  actualizarid=()=>{
        this.state.docente.map((docente) => (
        this.setState({id:docente.persona_id})
      ))
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
  putDato=()=>{
    //const termino = this.state.id;
    const url = `http://localhost:3050/regpayroll/v1/teachers/${this.state.id}`  ;
    fetch(url, {
    method: 'PUT',
    body: JSON.stringify({
      t_horas:this.state.a,
      t_unidad:this.state.b
      }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

  datosBusquedaid=(a,b)=>{
   console.log(a,b);
  
      this.setState({
        a,
        b
      },()=>{
        this.putDato();
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
        <BuscadorPeriodo funcion={this.consultarperiodo} seleccion={this.periodo} seleccion2={this.periodo2} />
        
        <Docente
          
          consulta={this.consulta}
          busquedaId={this.datosBusquedaid}
          docente={this.state.docente}
          a={this.state.a}
          b={this.state.b}
          obtenerpdf={this.obtenerpdf}
        />
      
        
        
      </div>
    );
  }
}

export default App;
//<DocenteActualizado docente={this.state.docente}/>