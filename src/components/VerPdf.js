import React, {Component,useState} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';


import  {Button} from 'react-bootstrap';




function VerPdf(props){

  
 
  function obtener(){
    
    props.descargar();
  }
 
 


  
    return (
        <Button variant="outline-danger" onClick={obtener}>PDF</Button>
    );
        
}
export default VerPdf;