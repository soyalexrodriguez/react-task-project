import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../task";

export const TaskContext = createContext();

export function TaskContentProvider(props) {
  const [tasks, setTask] = useState([]);

  function createTask(taskObject) {
    setTask([
      ...tasks,
      {
        title: taskObject.title,
        id: tasks.length + 1,
        description: taskObject.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
