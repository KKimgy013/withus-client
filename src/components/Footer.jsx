import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        fontSize: "12px",
        textAlign: "center",
        width:"100%", 
        position: "absolute",
        bottom: "5%",
        left: "0",
        backgroundColor: "#76B66C",
        display:"flex",
        justifyContent:"space-around",
        padding: "10px"
      }}
    >
      <span>🐼님의 한마디: 비오는 날이다</span>
      <span>🎅님의 한마디: 오늘꺼 달성 힘들었다</span>

      <span>🐕님의 한마디: 오늘도 화이팅~</span>
      <span>🐥님의 한마디: 우리집 강아지도 응원한다</span>
      <span>👣님의 한마디: 내일은 달성할 수 있기를</span>
    </footer>
  );
}
