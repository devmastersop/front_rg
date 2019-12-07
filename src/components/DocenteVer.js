import React from 'react';
import { Button } from 'react-bootstrap';
import DocenteAc from './DocenteActualizado'
import DocenteActualizado from './DocenteActualizado';
 class DocenteVer extends React.Component{
    state={}

    obtener=()=>{
            

    }
    render(){
        return(
            
            <div>
                 <Button onclick={<DocenteActualizado/>} variant="outline-secondary"  id='botonVisualizar'>Visualizar</Button> 
                 
            </div>
               
            
        
            
            
        );
    }
 }
 export default DocenteVer;