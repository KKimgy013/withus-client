// src/components/LevelSection.jsx
import React from "react";
import LevelCard from "./LevelCard";
import "../css/LevelSection.css";

export default function LevelSection({ beginnerTasks }) {
  return (
    <section className="levelContainer">
      {/* LevelCard에 beginnerTasks 데이터 전달 */}
      <LevelCard level="Beginner" tasks={beginnerTasks} />
      <LevelCard level="Growing" comingSoon />
      <LevelCard level="Master" comingSoon />
    </section>
  );
}
