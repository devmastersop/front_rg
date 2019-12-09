import React, {Component,useState} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';


import  {Bootstrap, Modal, ButtonToolbar,Button, Grid, Row, Col} from 'react-bootstrap';
import { tsPropertySignature } from '@babel/types';



function Example(props){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ref1=React.createRef();
  const ref2=React.createRef();
  function obtener(e){
    const termino=ref1.current.value;
    const termino2=ref2.current.value;
    props.datosBusquedaid(termino,termino2);
  }
 
 


  
    return (
        <ButtonToolbar>
         
          <Button variant="outline-primary" onClick={handleShow}> Editar </Button>
    
    
          <Modal 
            size="lg"
            show={show}
            dialogClassName="modal-90w"
            onHide={handleClose}
            aria-labelledby="example-custom-modal-styling-title"
            className="modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                    Registro de los Datos 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table border="1px">
                    <thead>
                        <tr>
                        <th>Horas</th>
                        <th>Pago por Horas</th>
                        
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                        <td><input ref={ref1}type="number" className="campo1"/></td>
                        <td><input ref={ref2}type="number" step="0.01" className="campo1"/></td>
                      
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
export default Example;
/*
function MyVerticallyCenteredModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App() {
   
  
    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  
  render(<App />);*/