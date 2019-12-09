import React from 'react'
import './estilos.css';
import Modal from './Modal';


import { Button } from 'react-bootstrap';
import Visualizar from './Modal2'
import VerPdf from './VerPdf';
/*<VerPdf descargar={props.obtenerpdf} />
<Modal datosBusquedaid={props.busquedaId}/>
*/

function Docente(props) {
  return (
    <div>
      <table border="1px" className="col-md-12 tabla">
        <thead>
          <tr>
            <th>Ciclo</th>
            <th>PROGRAMA</th>
            <th>CURSO</th>
            <th>NOMBRES</th>
            
            <th>Horas</th>
            <th>Pago x Hora</th>
            <th>Importe</th>
            <th>N° SIAF</th>
            <th>Registrar</th>
          </tr>
        </thead>

        <tbody>
          {props.docente.map((docente) => (
            
            <tr key={docente.persona_id}>
              <td>{docente.nom_ciclo}</td>
              <td >{docente.nom_programa}</td>
              <td>{docente.nom_curso}</td>
              <td>{docente.persona_nombres} {docente.persona_apaterno} {docente.persona_amaterno}</td>
              <td>{docente.t_horas}</td>
              <td>{docente.t_unidad}</td>
              <td>{docente.importe}</td>
              <td>{docente.n_siaf}</td>
            
             
              <td>Editar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )

};

export default Docente;