import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-blue-950 h-screen">
      <div className="container mx-auto pt-6">
      <TaskForm />
      <TaskList/>
      </div>
      
    </main>
  );
}

export default App;
