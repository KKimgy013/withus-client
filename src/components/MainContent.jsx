import React from "react";

export default function MainContent() {
  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <div
        style={{
          borderRadius: "15px",
          backgroundColor: "#F5F9F4",
          marginLeft: "5%",
          marginRight: "5%",
          height: "320px",
          marginTop: "1%",
          marginBottom: "1%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          className="main-reward"
          style={{
            padding: "3%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flex: 1,
          }}
        >
          <div style={{ fontWeight: "bold" }}>My Reward</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontWeight: "bold", fontSize: "8.5vw" }}>
              150,000
            </span>
            <span style={{ fontWeight: "bold", marginLeft: "10px" }}>원</span>
          </div>
        </div>

        <div
          className="main-target"
          style={{
            display: "inline-block",
            flex: 1,
            padding: "3%",
          }}
        >
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
            }}
          >
            <div
              className="card"
              style={{
                borderRadius: "20px",
                backgroundColor: "#96B3F2",
                width: "90%", // Increase width to extend to the right
                height: "160px", // Increase height to extend further down
                position: "absolute",
                top: "15px", // Adjust top position
                left: "15px", // Adjust left position
                zIndex: 1,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "5px", // Positioned at the bottom
                  right: "10px", // Positioned to the right
                  color: "white",
                  fontSize: "12px",
                  padding: "2px",
                  fontWeight: "bold",
                  marginRight: "0.3vw"
                }}
              >
                내일의 목표 보기
              </span>
            </div>

            {/* Green card */}
            <div
              className="card"
              style={{
                borderRadius: "20px",
                backgroundColor: "#76B66C",
                width: "85%",
                height: "150px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  color: "white",
                  float: "left",
                  marginTop: "5%",
                  marginLeft: "10%",
                }}
              >
                김동재 님의 오늘 목표
              </div>
              <button
                style={{
                  color: "white",
                  fontWeight: "bold",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  border: "none",
                  borderRadius: "20px",
                  backgroundColor: "#257519",
                  marginTop: "15px", // Add margin to move down from the top
                  marginRight: "15px", // Add margin to move away from the right edge
                  float: "right",
                }}
              >
                인증하기
              </button>
              <br />
              <br />
              <br />
              <div
                style={{ float:"left", marginTop:"0.5vw", marginLeft: "3vw", fontWeight: "bold", color: "white", fontSize: "2.3vw" }}
              >
                방청소 및 침구 정리하기
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "2%",
          backgroundColor: "#F5F9F4",
          width: "100%",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 15px",
        }}
      >
        {/* 자주 찾는 서비스 제목 */}
        <div
          style={{
            marginLeft: "7%",
            fontWeight: "bolder",
            fontSize: "20px",
          }}
        >
          자주찾는
          <br />
          서비스
        </div>

        {/* 서비스 카드들이 나열될 div */}
        <div
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            "오늘의 챌린지",
            "마음이와 대화하기",
            "응원 한마디",
            "국가 지원 사업",
          ].map((service, index) => (
            <a
              key={index}
              className="service-card"
              href="#"
              style={{
                width: "80px",
                height: "80px",
                fontWeight: "bolder",
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "15px",
                margin: "15px",
                color: "black",
                textDecoration: "none",
                fontSize: "13px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {service}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
