import React from 'react'
import './estilos.css';
import Modal from './Modal';
import { Button } from 'react-bootstrap';

const Docente = ({ docente }) => {
  return (
    <div>
      <table border="1px" className="col-md-12 tabla">
        <thead>
          <tr>
            <th>PROGRAMA</th>
            <th>CURSO</th>
            <th>NOMBRE</th>
            <th>APELLIDOS</th>
            <th>Total de Horas</th>
            <th>Registrar</th>
          </tr>
        </thead>

        <tbody>
          {docente.map((docente) => (
            <tr>
              <td>{docente.nom_programa}</td>
              <td>{docente.nom_curso}</td>
              <td>{docente.persona_nombres}</td>
              <td>{docente.persona_apaterno} {docente.persona_amaterno}</td>
              <td>{docente.t_horas}</td>
              <td><Modal /><Button variant="outline-danger">VER PDF </Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )

};

export default Docente;