import React from 'react'
import './estilos.css';
import Modal from './Modal';
import DocenteVer from './DocenteVer'

import { Button } from 'react-bootstrap';
import Visualizar from './Modal2'
import VerPdf from './VerPdf';


function Docente(props) {
  return (
    <div>
      <table border="1px" className="col-md-12 tabla">
        <thead>
          <tr>
            <th>PROGRAMA</th>
            <th>CURSO</th>
            <th>NOMBRES</th>
          
           
            <th>Registrar</th>
          </tr>
        </thead>

        <tbody>
          {props.docente.map((docente) => (
            
            <tr key={docente.persona_id}>
              
              <td>{docente.nom_programa}</td>
              <td>{docente.nom_curso}</td>
              <td>{docente.persona_nombres} {docente.persona_apaterno} {docente.persona_amaterno}</td>
              
            
             
              <td><Modal datosBusquedaid={props.busquedaId}/><Visualizar consulta={props.consulta} docente={props.docente} /><VerPdf obtenerpdf={props.obtenerpdf} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )

};

export default Docente;