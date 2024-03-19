import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="card">
      <h1 className="titleCard">{task.title}</h1>
      <p className="descriptionCard">{task.description}</p>
      <button
        className="buttonCardEliminar"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
