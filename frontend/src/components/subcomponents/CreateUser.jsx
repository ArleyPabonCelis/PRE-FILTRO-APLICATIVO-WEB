import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import '../../App.css'

const CreateUser = ({ isOpen, onClose, onUserCreated }) => {
    const [userData, setUserData] = useState({
        nombreUsuario: '',
        cedula: '',
        nombre: '',
        apellido: '',
        correo: '',
        genero: '',
        rol: '',
    });
    
    const [generos, setGeneros] = useState([]);
    const [roles, setRoles] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5050/generos/all')
            .then((response) => {
                setGeneros(response.data); // Almacenar los géneros en el estado
            })
            .catch((error) => {
                console.error('Error al cargar géneros:', error);
            });
    }, []); 

    useEffect(() => {
        axios.get('http://localhost:5050/roles/all')
          .then((response) => {
            setRoles(response.data); 
          })
          .catch((error) => {
            console.error('Error al cargar roles:', error);
          });
      }, []);
      


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
      

    const handleSubmit = () => {
        axios.post('http://localhost:5050/usuarios/add', userData)
        .then((response) => {
            console.log('Usuario agregado con éxito:', response.data);
            onUserCreated(response.data); // Llamar a la función para notificar la creación del usuario
            onClose(); // Cerrar el modal
        })
        .catch((error) => {
            console.error('Error al agregar usuario:', error);
        });
    };

    return (
        <Modal open={isOpen} onClose={onClose} className="modal">
            <Modal.Header>Agregar Usuario</Modal.Header>
            <Modal.Content className="modal-content">
                <Form className='formato'>
                    <div>
                        <Form.Field>
                            <label>Nombre de Usuario</label>
                            <Input
                            name="nombreUsuario"
                            value={userData.nombreUsuario}
                            onChange={handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Cedula</label>
                            <Input
                            name="cedula"
                            value={userData.cedula}
                            onChange={handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Nombre</label>
                            <Input
                            name="nombre"
                            value={userData.nombre}
                            onChange={handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Apellido</label>
                            <Input
                            name="apellido"
                            value={userData.apellido}
                            onChange={handleChange}
                            />
                        </Form.Field>
                    </div>
                    <div>
                        <Form.Field>
                            <label>Correo</label>
                            <Input
                            name="correo"
                            value={userData.correo}
                            onChange={handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Género</label>
                            <select
                                name="genero"
                                value={userData.genero}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Seleccione un género</option>
                                {generos.map((genero) => (
                                <option key={genero._id} value={genero._id}>
                                    {genero.genero}
                                </option>
                                ))}
                            </select>
                        </Form.Field>

                        <Form.Field>
                            <label>Rol</label>
                            <select
                                name="rol"
                                value={userData.rol}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Seleccione un rol</option>
                                {roles.map((rol) => (
                                <option key={rol.id} value={rol._id}>
                                    {rol.rol}
                                </option>
                                ))}
                            </select>
                        </Form.Field>
                    </div>
                </Form>
            </Modal.Content>
            <Modal.Actions  className="modal-actions">
                <Button primary onClick={handleSubmit}>
                Crear
                </Button>
                <Button onClick={onClose}>
                Cancelar
                </Button>
            </Modal.Actions>
        </Modal>
  );
};

export default CreateUser;
