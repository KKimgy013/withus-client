// src/components/LevelCard.jsx
import React from "react";
import TaskList from "./TaskList";
import "../css/LevelCard.css";

function LevelCard({ level, tasks, comingSoon }) {
  return (
    <div className={`${level.toLowerCase()}Level levelCard`}>
      <h2 className="levelTitle">{level}</h2>
      {comingSoon ? (
        <p className="comingSoon">Coming Soon</p>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </div>
  );
}

export default LevelCard;
