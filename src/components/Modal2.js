import React, {Component,useState} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';


import  {Bootstrap, Modal, ButtonToolbar,Button, Grid, Row, Col} from 'react-bootstrap';
import { tsPropertySignature } from '@babel/types';



function Visualizar(props){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  function obtener(e){
    
    props.consulta();
  }
 
 


  
    return (
        <ButtonToolbar>
         
          <Button variant="outline-secondary" onClick={handleShow}> Visualizar </Button>
    
    
          <Modal 
            size="lg"
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            className="modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                    Registro de los Datos 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <table border="1px" className="col-md-12 tabla">
                <thead>
                    <tr>
                    <th>PROGRAMA</th>
                    <th>CURSO</th>
                    <th>NOMBRES</th>
                    
                    <th>Total de Horas</th>
                    <th>Pago x Hora</th>
                    <th>Importe</th>
                    </tr>
                </thead>
        
                <tbody>
                    {props.docente.map((docente) => (
                    
                    <tr key={docente.persona_id}>
                        
                        <td>{docente.nom_programa}</td>
                        <td>{docente.nom_curso}</td>
                        <td>{docente.persona_nombres} {docente.persona_apaterno} {docente.persona_amaterno}</td>
                        
                        <td>{docente.t_horas}</td>
                        <td>{docente.t_unidad}</td>
                        <td>{docente.importe}</td>
                    
                    
                    </tr>
                    ))}
                </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="secondary" onClick={obtener}>
                  Actualizar
                </Button>
                
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>);
}
export default Visualizar;