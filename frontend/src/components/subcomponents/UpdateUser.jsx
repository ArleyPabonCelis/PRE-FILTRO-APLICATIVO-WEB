import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import '../../App.css';

const UpdateUser = ({ isOpen, onClose, onUpdateUser, user }) => {
  const [editedUser, setEditedUser] = useState(user);
  const [generos, setGeneros] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/generos/all')
      .then((response) => {
        setGeneros(response.data);
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
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = () => {
    onUpdateUser(editedUser); 
    onClose();
  };

  useEffect(() => {
    // Actualizar el estado de editedUser cuando cambia el usuario prop
    setEditedUser(user);
  }, [user]);

  return (
    <Modal open={isOpen} onClose={onClose} className="modal">
      <Modal.Header>Editar Usuario</Modal.Header>
      <Modal.Content className="modal-content">
        <Form className="formato">
            <div>
                
                <Form.Field className="custom-form-field">
                    <label>Nombre de Usuario</label>
                    <Input
                    name="nombreUsuario"
                    value={editedUser.nombreUsuario || ''}
                    onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field className="custom-form-field">
                    <label>Cedula</label>
                    <Input
                    name="cedula"
                    value={editedUser.cedula || ''}
                    onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field className="custom-form-field">
                    <label>Nombre</label>
                    <Input
                    name="nombre"
                    value={editedUser.nombre || ''}
                    onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field className="custom-form-field">
                    <label>Apellido</label>
                    <Input
                    name="apellido"
                    value={editedUser.apellido || ''}
                    onChange={handleChange}
                    />
                </Form.Field>
            </div>
            <div>


                <Form.Field className="custom-form-field">
                    <label>Correo</label>
                    <Input
                    name="correo"
                    value={editedUser.correo || ''}
                    onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field className="custom-form-field">
                    <label>Genero</label>
                    <select
                    name="genero"
                    value={editedUser.genero || ''}
                    onChange={handleChange}
                    >
                    <option value="">Seleccione un género</option>
                    {generos.map((genero) => (
                        <option key={genero._id} value={genero._id}>
                        {genero.genero}
                        </option>
                    ))}
                    </select>
                </Form.Field>
                <Form.Field className="custom-form-field">
                    <label>Rol</label>
                    <select
                    name="rol"
                    value={editedUser.rol || ''}
                    onChange={handleChange}
                    >
                    <option value="">Seleccione un rol</option>
                    {roles.map((rol) => (
                        <option key={rol._id} value={rol._id}>
                        {rol.rol}
                        </option>
                    ))}
                    </select>
                </Form.Field>
            </div>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleSubmit}>
          Guardar
        </Button>
        <Button onClick={onClose}>
          Cancelar
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UpdateUser;
