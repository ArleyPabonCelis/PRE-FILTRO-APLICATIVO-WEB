import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Link} from 'react-router-dom';
import {Table, Button} from 'semantic-ui-react';
/* import {Link, useActionData} from 'react-router-dom'; */
import CreateUser from './subcomponents/CreateUser.jsx'; 
import UpdateUser from './subcomponents/UpdateUser.jsx'; 

function Usuarios() {
  const [ApiUsers, setApiUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(true);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState({});


  useEffect(() => {
    axios.get(`http://localhost:5050/usuarios/all`)
        .then((response) => {
            console.log(response.data);
            setApiUsers(response.data)
        })
  }, [])

  /* Leer */
  const getDataUsers = () => {
    axios.get(`http://localhost:5050/usuarios/all`)
      .then((response) => {
        setApiUsers(response.data)
      })
  }

  /* Eliminar */
  const onDeleteUser = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
    
    if (confirmDelete) {
      axios.delete(`http://localhost:5050/usuarios/del/${id}`)
        .then(() => {
          getDataUsers();
        })
        .catch((error) => {
          console.error('Error al eliminar usuario:', error);
        });
    }
  }

  /* Crear */
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsTableVisible(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsTableVisible(true);
  };

  const handleUserCreated = (newUser) => { 
    setApiUsers((prevUsers) => [...prevUsers, newUser]);
    handleCloseModal();
  };

  //Actualizar
  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
    setIsTableVisible(false);
  };

  const handleSaveUserChanges = (editedUser) => {
    axios.patch(`http://localhost:5050/usuarios/upd/${editedUser._id}`, editedUser)
      .then((response) => {
        console.log('Usuario actualizado con éxito:', response.data);
        getDataUsers();
        setIsEditModalOpen(false);
        setIsTableVisible(true);
      })
      .catch((error) => {
        console.error('Error al actualizar usuario:', error);
      });
  };
  
  return (
    <>
      <div>
        <h1>Usuarios</h1>
      </div>
      <div className='modaAgregar'>
        <Button className="button-agregar" onClick={handleOpenModal}>Agregar</Button>
        <CreateUser isOpen={isModalOpen} onClose={handleCloseModal} onUserCreated={handleUserCreated} />
      </div>
      {isTableVisible && (
      <div className="table-container">
        <Table singleLine className="custom-table">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>NOMBRE USUARIO</Table.HeaderCell>
                    <Table.HeaderCell>CORREO</Table.HeaderCell>
                    <Table.HeaderCell>GENERO</Table.HeaderCell>
                    <Table.HeaderCell>ROL</Table.HeaderCell>
                    <Table.HeaderCell>ELIMINAR</Table.HeaderCell>
                    <Table.HeaderCell>EDITAR</Table.HeaderCell>
                </Table.Row>  
            </Table.Header>

            <Table.Body>
                {
                    ApiUsers.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>{data.nombreUsuario}</Table.Cell>            
                                <Table.Cell>{data.correo}</Table.Cell>            
                                <Table.Cell>{data.genero}</Table.Cell> 
                                <Table.Cell>{data.rol}</Table.Cell> 
                                <Table.Cell>
                                    <Button onClick={() => onDeleteUser(data._id)}>Eliminar</Button>
                                </Table.Cell>  
                                <Table.Cell>
                                  <Button onClick={() => handleEditUser(data)}>Editar</Button> 
                                </Table.Cell>    
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
      </div>
      )}
      {editingUser && (
        <UpdateUser
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false)
            setIsTableVisible(true)
          }}
          onUpdateUser={handleSaveUserChanges}
          user={editingUser}
        />
      )}

    </>
    
  );
}

export default Usuarios;
