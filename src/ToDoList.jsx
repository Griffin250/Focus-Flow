import { useState } from "react";
import Footer from "./Footer";
import dateString from './currentDate'

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Go to school",
    "Learn React JS",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask(" ");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h2 className="header-text"> FOCUS FLOW </h2>

        <div className="user-profile">
          <img src="./Images/user.png" alt="user" className="user-icon" />
          <h2 className="greeting">
            Hey, <span className="user-name"> Isiah!</span>
         
          </h2>
        </div>
        <div> 
                
                <p>{dateString}</p>
                <currentDate />
                <dateString />
        </div>
      </div>
      <div className="input">
        <input
          className="input-area"
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          {" "}
          Add
        </button>
      </div>

      <ol className="tasks">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task} </span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button
              className="move-up-btn move"
              onClick={() => moveTaskUp(index)}
            >
              {" "}
              ⏫{" "}
            </button>
            <button
              className="move-down-btn move"
              onClick={() => moveTaskDown(index)}
            >
              {" "}
              ⏬{" "}
            </button>
          </li>
        ))}
      </ol>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default ToDoList;
