import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Table} from 'semantic-ui-react';


function Talleres() {
  const [ApiTalleres, setApiTalleres] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/talleres/all`)
        .then((response) => {
            console.log(response.data);
            setApiTalleres(response.data)
        })
  }, [])

/*   const getDataTalleres = () => {
    axios.get(`http://localhost:5050/talleres/all`)
      .then((response) => {
        setApiTalleres(response.data)
      })
  } */


  return (
    <>
      <div>
        <h1>Talleres</h1>
      </div>
      <div className="table-container">
        <Table singleLine className="custom-table">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>USUARIO</Table.HeaderCell>
                    <Table.HeaderCell>ACTIVIDAD_ID</Table.HeaderCell>
                    <Table.HeaderCell>TIPO</Table.HeaderCell>
                    <Table.HeaderCell>FECHA</Table.HeaderCell>
                    <Table.HeaderCell>ORIGEN</Table.HeaderCell>
                    <Table.HeaderCell>LOCALIDAD</Table.HeaderCell>
                    <Table.HeaderCell>PROCESO</Table.HeaderCell>
                    <Table.HeaderCell>DESCRIPCION</Table.HeaderCell>
                </Table.Row>  
            </Table.Header>

            <Table.Body>
                {
                    ApiTalleres.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>{data.usuario}</Table.Cell>            
                                <Table.Cell>{data.actividad}</Table.Cell>            
                                <Table.Cell>{data.tipo}</Table.Cell> 
                                <Table.Cell>{data.fecha}</Table.Cell> 
                                <Table.Cell>{data.origen}</Table.Cell> 
                                <Table.Cell>{data.localidad}</Table.Cell> 
                                <Table.Cell>{data.proceso}</Table.Cell> 
                                <Table.Cell>{data.descripcion}</Table.Cell>  
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

export default Talleres;
