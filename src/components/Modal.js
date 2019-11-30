import React, {Component,useState} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';


import  {Bootstrap, Modal, ButtonToolbar,Button, Grid, Row, Col} from 'react-bootstrap';
function Example(props) {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
  
    return (
        <ButtonToolbar>
         
          <Button variant="outline-primary" onClick={() => setLgShow(true)}> Registrar </Button>
    
    
          <Modal {...props}
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
            className="modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                    Registro de los Datos 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table border="1px">
                    <thead>
                        <tr>
                        <th>Horas</th>
                        <th>Cantidad de Alumnos</th>
                        <th>Pago por horas</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                        <td><input type="text" className="campo1"/></td>
                        <td><input type="text" className="campo1"/></td>
                        <td><input type="text" className="campo1"/></td>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        
                    </tfoot>
                </table>
            </Modal.Body>
            <Modal.Footer>
                    <Button onClick={props.onHide}>Enviar</Button>
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