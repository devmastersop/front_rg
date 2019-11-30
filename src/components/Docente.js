import React from 'react'
import './estilos.css';
import Modal from './Modal';
import { Button } from 'react-bootstrap';

const Docente = ({ docente }) => {
  return (
    <div>
      <table border="1px" className="col-md-8 tabla">
        <thead>
          <tr>
            <th>ID DOCENTE</th>
            <th>NOMBRES</th>
            <th>APELLIDO PATERNO</th>
            <th>Registrar</th>
          </tr>
        </thead>

        <tbody>
          {docente.map((docente) => (
            <tr key={docente.id_docente}>
              <td > {docente.id_docente}</td>
              <td> {docente.nombres}</td>
              <td>{docente.apell_pat}</td>
              <td><Modal /><Button variant="outline-danger">VER PDF </Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )

};

export default Docente;