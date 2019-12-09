/* 
className="row justify-content-center"
className="col-md-12 btn-block btn btn-success"*/
import React, {Component,useState,Link} from 'react';

import  { Modal, ButtonToolbar, Grid, Row, Col,Button} from 'react-bootstrap';
import './estilos.css'

function Anadir(props){

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const ref1=React.createRef();
    const ref2=React.createRef();

    function obtener(e){
      const termino=ref1.current.value;
      const termino2=ref2.current.value;
      props.guardarhoraypago(termino,termino2);
    }  
    function obtener1(e){
      e.preventDefault();
      const curso=e.target.value;
      props.guardarcurso(curso);
    }
    function obtener2(e){
      e.preventDefault();
      const ciclo=e.target.value;
      props.guardarciclo(ciclo);
    }
      return (
          <ButtonToolbar>
           
            <Button className="row-center" variant="success" onClick={handleShow}> Añadir Registro</Button><Button onClick={props.consularApi} variant="success">Actualizar</Button>
      
      
            <Modal 
              size="xl"
              show={show}
              dialogClassName="modal-100w"
              onHide={handleClose}
              aria-labelledby="example-custom-modal-styling-title"
              
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                      Registro de los Datos 
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <table className="col-md-12" border="1px">
                      <thead>
                          <tr>
                          <th>Curso</th>
                          <th> Horas</th>
                          <th>Pago x H.</th>
                          <th>Ciclo</th>
                          
                          </tr>
                          
                      </thead>
                      <tbody>
                          <tr>
                          <td>
                            <select onChange={obtener1}>
                              <option value="73035">Gestión de Proyectos de TI</option>
                              <option value="72072">Calidad de los productos y de los Servicios de la informacion</option>
                              <option value="73074">Arquitectura y Diseno de Software</option>
                              <option value="91070">Big Dta</option>
                              <option value="5">Gestion Publica II</option>
                            </select>
                          </td>
                          
                          <td><input ref={ref1}type="number" className="campo1"/></td>
                          <td><input ref={ref2}type="number" step="0.01" className="campo1"/></td>
                          <td>
                            <select onChange={obtener2}>
                              <option value="1">2018-I</option>
                              <option value="2">2018-II</option>
                              <option value="4">2017-II</option>
                              <option value="7">2016-II</option>
                            </select>
                          </td>
                        
                          </tr>
                          
                      </tbody>
                      <tfoot>
                          
                      </tfoot>
                  </table>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                  <Button variant="primary" onClick={obtener}>
                    Guardar
                  </Button>
              </Modal.Footer>
            </Modal>
          </ButtonToolbar>);
  }
  export default Anadir;