import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="Nohaytareasaun">No hay tareas aun</h1>;
  }

  return (
    <div className="contenedorDeCards">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
