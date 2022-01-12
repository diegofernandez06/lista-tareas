import React, { useState } from "react";
//import Form from 'react-bootstrap/Form'
//import Buttom from 'react-bootstrap/Button'
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  //aqui va la logica
  //aqui creo los state
  const [listaTareas, setListaTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // guardar el contenido del state tarea dentro del arreglo listatareas
    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombre) =>{
    //filtramos el state sacando el elemento que quiero borrar
    let arregloModificado = listaTareas.filter((valor)=> valor !== nombre)
    //actualizar state
    setListaTareas(arregloModificado);
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value.trimStart())}
            value={tarea}
          />
          <Button variant="primary">Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTareas arregloTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
    </div>
  );
};

export default FormTareas;
