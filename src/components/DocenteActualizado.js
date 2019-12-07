import React from 'react';

function DocenteActualizado(props){
    return(
        <div>
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
      </div>
    );

}

export default DocenteActualizado;