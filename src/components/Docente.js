import React from 'react'

const Docente = ({ docente }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID DOCENTE</th>
            <th>NOMBRES</th>
            <th>APELLIDO PATERNO</th>
          </tr>
        </thead>

        <tbody>
          {docente.map((docente) => (
            <tr key={docente.id_docente}>
              <td > {docente.id_docente}</td>
              <td> {docente.nombres}</td>
              <td>{docente.apell_pat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )

};

export default Docente;