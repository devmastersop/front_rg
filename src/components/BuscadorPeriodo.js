import React from 'react';
import './estilos.css'


class BuscadorPeriodo extends React.Component{
 
    /*busquedaRef = React.createRef();
    busquedaRef2=React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();

        //toma el valor del impu y lo envia al componente principal
        const termino = this.busquedaRef.current.value;
        const termino2=this.busquedaRef2.current.value;
        console.log(termino,termino2);
        this.props.datosBusqueda(termino,termino2);
    }*/
    handleOnChange(e) {
    
          
           const termino= e.target.value;
           console.log(termino);
           this.props.periodo(termino);
         
      }
      handleOnChange2(e) {
    
          
        const termino= e.target.value;
        console.log(termino);
        this.props.periodo2(termino);
      
   }
 
     

render(){
    return(
        <form className="buscador " onSubmit={this.props.consultarperiodo}>
        <div>
            <label> Prd. Acádemico </label>
            <select onChange={this.handleOnChange}>
                <option value="">...</option>
                <option  value="2016-1">2016-1</option>
                <option  value="2016-2">2016-2</option>
                <option  value="2017-1">2017-1</option>
                <option  value="2017-2">2017-2</option>
                <option  value="2018-1">2018-1</option>
                <option  value="2018-2">2018-2</option>
                <option  value="2019-1">2019-1</option>
            </select>
            <label> a </label>
            <select onChange={this.handleOnChange2}>
                <option  value="">...</option>
                <option  value="2016-1">2016-1</option>
                <option  value="2016-2">2016-2</option>
                <option  value="2017-1">2017-1</option>
                <option  value="2017-2">2017-2</option>
                <option  value="2018-1">2018-1</option>
                <option  value="2018-2">2018-2</option>
                <option  value="2019-1">2019-1</option>
            </select>

            <button className="col-md-1 ml-5 btn btn-primary"  id='botonBuscar' >Buscar</button>
        </div>
        </form>
    );
}



}
export default BuscadorPeriodo;