import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="containerForm" onSubmit={handleSubmit}>
      <h1 className="agregarTarea">Agregar tarea</h1>
      <input
        className="titleForm"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)} //capturo dato de input y la guarda en constante "title"
        value={title}
        autoFocus
      />
      <textarea
        className="descriptionForm"
        placeholder="Ecribe la descpricion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="bottonForm">Guardar</button>
    </form>
  );
}
