import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Table} from 'semantic-ui-react';


function Equipos() {
  const [ApiEquipos, setApiEquipos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/equipos/all`)
        .then((response) => {
            console.log(response.data);
            setApiEquipos(response.data)
        })
  }, [])

/*   const getDataEquipos = () => {
    axios.get(`http://localhost:5050/equipos/all`)
      .then((response) => {
        setApiEquipos(response.data)
      })
  } */

  return (
    <>
      <div>
        <h1>Equipos</h1>
        {/* Contenido específico de la página de Equipos */}
      </div>
      <div className="table-container">
        <Table singleLine className="custom-table">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>NOMBRE</Table.HeaderCell>
                    <Table.HeaderCell>ESTADO</Table.HeaderCell>
                    <Table.HeaderCell>TORRE</Table.HeaderCell>
                    <Table.HeaderCell>MONITOR</Table.HeaderCell>
                    <Table.HeaderCell>TECLADO</Table.HeaderCell>
                    <Table.HeaderCell>RATON</Table.HeaderCell>
                    <Table.HeaderCell>OTRO</Table.HeaderCell>
                </Table.Row>  
            </Table.Header>

            <Table.Body>
                {
                    ApiEquipos.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>{data.nombre}</Table.Cell>            
                                <Table.Cell>{data.estado}</Table.Cell>            
                                <Table.Cell>{data.torre}</Table.Cell> 
                                <Table.Cell>{data.monitor}</Table.Cell> 
                                <Table.Cell>{data.teclado}</Table.Cell> 
                                <Table.Cell>{data.raton}</Table.Cell> 
                                <Table.Cell>{data.otro}</Table.Cell> 
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
      </div>
    
    </>
  );
}

export default Equipos;
