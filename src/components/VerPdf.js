import React, {Component,useState} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';


import  {Bootstrap, Modal, ButtonToolbar,Button, Grid, Row, Col} from 'react-bootstrap';
import { tsPropertySignature } from '@babel/types';



function VerPdf(props){

  
 
  function obtener(e){
    
    props.obtenerpdf();
  }
 
 


  
    return (
        <Button variant="outline-danger" onClick={obtener}>PDF</Button>
    );
        
}
export default VerPdf;