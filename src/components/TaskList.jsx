// src/components/TaskList.jsx
import React from "react";
import "../css/TaskList.css";

export default function TaskList({ tasks }) {
  return (
    <ul className="taskList">
      {tasks.map((task, index) => (
        <li key={index} className={`taskItem ${task.completed ? "taskItemCompleted" : ""}`}>
          {task.name}
        </li>
      ))}
    </ul>
  );
}
