import { useEffect, useState } from "react";
import "./styles/app.css";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(task));
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTask((currentTask) => {
      return [
        ...currentTask,
        { id: crypto.randomUUID(), title: newTask, completed: false },
      ];
    });

    setNewTask("");
  };

  const toggleTask = (id, completed) => {
    setTask((currentTask) => {
      return currentTask.map((rTask) => {
        if (rTask.id === id) {
          return { ...rTask, completed };
        }

        return rTask;
      });
    });
  };

  const deleteTask = (id) => {
    setTask((currentTask) => {
      return currentTask.filter((rTask) => rTask.id !== id);
    });
  };

  return (
    <>
      <div className="main">
        <div className="mainContainer">
          <div className="formContainer">
            <form onSubmit={handleSubmit} className="newItemForm">
              <div className="formContent">
                <label htmlFor="item">New Task</label>
                <input
                  value={newTask}
                  onChange={(event) => setNewTask(event.target.value)}
                  type="text"
                  name="newItem"
                  id="item"
                />
                <button type="submit">Add Task</button>
              </div>
            </form>
          </div>
          <div className="listContainer">
            <h2>Task List</h2>
            <hr />
            <ul className="taskList">
              {task.length === 0 && "No Task  ^.^ .!."}
              {task.map((rTask) => {
                return (
                  <li key={rTask.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={rTask.completed}
                        onChange={(event) =>
                          toggleTask(rTask.id, event.target.checked)
                        }
                      />
                      {rTask.title}
                    </label>
                    <button
                      className="deleteTask"
                      onClick={() => {
                        deleteTask(rTask.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
