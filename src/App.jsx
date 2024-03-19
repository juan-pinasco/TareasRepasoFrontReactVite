import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <main>
      <div className="contenedor">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
