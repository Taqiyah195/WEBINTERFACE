import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to To-Do App 📝</h1>
      <p>Organize your daily tasks easily.</p>
    </div>
  );
}

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="page">
      <h1>My Tasks 📋</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((item, index) => (
        <div className="task" key={index}>
          <span>{item}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About 📝</h1>
      <p>This is a simple React To-Do application.</p>
      <p>It helps users add and manage their daily tasks.</p>
    </div>
  );
}

function Todo() {
  return (
    <BrowserRouter>
      <nav>
        <h2>My To-Do App</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Todo;