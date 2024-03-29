import React from 'react';
import logo from './logo.svg';
import './App.css';

import Buscador from './components/Buscador';
import Titulo from './components/Titulo';
import Docente from './components/Docente'
import BuscadorPeriodo from './components/BuscadorPeriodo';
import Anadir from './components/Modal3';
import swal from 'sweetalert'





class App extends React.Component {

  state = {
    termino: '',
    a:'',
    b:'',
    docente: [],
    id:'',
    curso:null,
    ciclo:null,
    hora:null,
    phora:null

  }
  /*obtenerpdf=()=>{
    //const termino = this.state.termino;
    const url = `http://localhost:3050/regpayroll/v1/teachers/${this.state.termino}/pdf`  ;

    fetch(url,{ headers : { 
      "Content-Type": "application/json; charset=utf-8",
      "Accept": "application/json"
     }})
      .then(respuesta => respuesta.download())
      .then(text=> console.log(text)).catch(console.error)
      /*.then((data) => {
        this.setState({ docente: data 
        })
      }).catch(console.log)

  }*/
  anadirpago=(e)=>{
    
    const url = process.env.REACT_APP_API+`regpayroll/v2/teachers/${this.state.id}/tramites`  ;
    fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      id_curso: this.state.curso,
      id_ciclo:this.state.ciclo,
      t_horas: this.state.hora,
      t_unidad: this.state.phora,
      
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((resp)=>{
    console.log(resp);
    if(resp){
      swal("guardado exitoso...!","","success")
      console.log("funciona beneficio");


    }else{
      swal("Oops, el beneficio no fue editado", "","error");
    }
  }).catch(error => {

    swal("Oops, Algo salió mal!!", "","error")
    console.error(error)
    })
  /*.then(response => response.json())
  .then(json => console.log(json))*/
  }
  consulta=(e)=>{
    e.preventDefault();
    const termino = this.state.termino;
    const url = process.env.REACT_APP_API+`regpayroll/v1/teachers/${this.state.termino}`  ;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then((data) => {
        this.setState({ docente: data 
        })
      }).catch(console.log)

  }
   //const termino = this.state.termino;
  consularApi = () => {
    console.log(this.state.docente.length);
    
      const url = process.env.REACT_APP_API+`regpayroll/v2/teachers/${this.state.termino}/tramites`  ;
      //const url=`https://registro-planilla-teamx.herokuapp.com/regpayroll/v2/teachers/${this.state.termino}/tramites`  ;
      fetch(url)
        .then(respuesta => respuesta.json())
        .then((data) => {
          if(data.length>0){
            swal("Existen Registros de este Profesor","","success").then(
              this.setState({ docente: data },()=>{
                this.actualizarid();
               }))
          }else{
            swal("No hay Registro de este profesor.\n"+" Presione NUEVO PROFESOR\n","","info").then(
              this.setState({
               
                docente: [],
                id:'',
                
              })
            )

          }
         
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
  queryid=()=>{
    if(this.state.docentr&& this.state.docente.length){
      this.setState({
        docente:[]
      });
      const url = process.env.REACT_APP_API+`regpayroll/v2/teachers/${this.state.termino}`  ;
      //const url=`https://registro-planilla-teamx.herokuapp.com/regpayroll/v2/teachers/${this.state.termino}/tramites`  ;
      fetch(url)
        .then(respuesta => respuesta.json())
        .then((data) => {
          this.setState({ docente: data },()=>{
            this.actualizarid();
          })
        }).catch(console.log)
    }else{
      const url = process.env.REACT_APP_API+`regpayroll/v2/teachers/${this.state.termino}`  ;
      //const url=`https://registro-planilla-teamx.herokuapp.com/regpayroll/v2/teachers/${this.state.termino}/tramites`  ;
      fetch(url)
        .then(respuesta => respuesta.json())
        .then((data) => {
          this.setState({ docente: data },()=>{
            this.actualizarid();
          })
        }).catch(console.log)

  }}
  dataBusqueda=(termino)=>{
    console.log(termino);
    this.setState({
      termino
    },()=>{
      this.queryid();
    })
  }
  guardarcurso = (termino) => {
    console.log(termino);

    this.setState({
      curso:termino
    })
  }
  guardarciclo = (termino) => {
    console.log(termino);

    this.setState({
      ciclo:termino
    })
  }
  guardarhoraypago=(termino,termino2)=>{
    this.setState({
      hora:termino,
      phora:termino2

    },()=>{
      this.anadirpago();
    })
  }
  consultarApi = () => {

    const termino = this.state.termino;
    const url = process.env.REACT_APP_API+`regpayroll/v2/teachers?name=${this.state.termino}`  ;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then((data) => {
        this.setState({ docente: data},()=>{
          this.actualizarid();
      })
    }).catch(console.log)
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
    const url = process.env.REACT_APP_API+`regpayroll/v1/teachers/${this.state.id}`  ;
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
    .then(json => console.log(json),()=>{
      this.consularApi();
    })
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
  
  /*<BuscadorPeriodo funcion={this.consultarperiodo} seleccion={this.periodo} seleccion2={this.periodo2} />*/ 
  render() {
    return (
      <div>
        <Titulo />
        <Buscador
          inputtipo="NÚMERO DNI"
          datosBusqueda={this.datosBusqueda}
          dataBusqueda={this.dataBusqueda}
        />
       
        
        <Anadir consulta={this.consulta}
                guardarcurso={this.guardarcurso}
                guardarciclo={this.guardarciclo}
                guardarhoraypago={this.guardarhoraypago}
                consularApi={this.consularApi}
        />
        
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
/*<Buscador
inputtipo="APE. PATERNO"
datosBusqueda={this.datosBusqueda2}
/>*/