import React, { useEffect, useState } from "react";
import target from "../img/target.png";
import challenge from "../img/challenge.png";
import chat from "../img/chat.png";
import fighting from "../img/fighting.png";
import buildings from "../img/buildings.png";
import "../css/MainContent.css";

const countingType1 = (num) => {
  const element = document.querySelector("#reward-result");
  if (num === 0) {
    element.innerHTML = "0";
  } else {
    const each = Math.ceil(num / 33);
    let time = 0;

    for (let i = 0; i <= num; i += each) {
      setTimeout(() => {
        element.innerHTML = i.toLocaleString();
      }, 20 * time);
      if (i + each > num) {
        setTimeout(() => {
          element.innerHTML = num.toLocaleString();
        }, 20 * (time + 1));
      }
      time++;
    }
  }
};

export default function MainContent() {
  const [isTomorrowVisible, setIsTomorrowVisible] = useState(false);

  useEffect(() => {
    countingType1(150000);
  }, []);

  const toggleCardOrder = () => {
    setIsTomorrowVisible((prev) => !prev);
  };

  const hideTomorrowCard = () => {
    if (isTomorrowVisible) {
      setIsTomorrowVisible(false);
    }
  };

  const services = [
    { name: "오늘의 챌린지", icon: challenge },
    { name: "마음이와 대화하기", icon: chat },
    { name: "응원 한마디", icon: fighting },
    { name: "국가 지원 사업", icon: buildings },
  ];

  return (
    <div className="main-content-container">
      <div className="main-content-reward">
        <div className="main-reward">
          <div className="main-reward-title">My Reward</div>
          <div className="main-reward-amount-container">
            <span id="reward-result" className="main-reward-amount">
              150,000
            </span>
            <span className="main-reward-unit">원</span>
          </div>
        </div>

        <div className="main-target">
          <div style={{ position: "relative", marginLeft: "auto" }}>
            {/* 하늘색 카드 */}
            <div
              style={{
                borderRadius: "20px",
                backgroundColor: "#96B3F2",
                width: "90%",
                height: "160px",
                position: "absolute",
                top: "15px",
                left: "15px",
                zIndex: isTomorrowVisible ? 2 : 1,
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5%",
                  marginLeft: "10%",
                }}
              >
                <img
                  src={target}
                  style={{
                    width: "25px",
                    height: "24px",
                    marginRight: "6px",
                    objectFit: "contain",
                  }}
                />
                <span style={{ fontSize: "1.1vw" }}>김동재 님의 내일 목표</span>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "2.3vw",
                  marginLeft: "-10%",
                }}
              >
                방청소 및 침구 정리하기
              </div>

              {!isTomorrowVisible && (
                <a
                  onClick={toggleCardOrder}
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "10px",
                    color: "white",
                    fontSize: "12px",
                    padding: "2px",
                    fontWeight: "bold",
                    marginRight: "0.3vw",
                    cursor: "pointer",
                  }}
                >
                  내일의 목표 보기
                </a>
              )}
            </div>

            {/* 초록색 카드 */}
            <div
              onClick={hideTomorrowCard}
              style={{
                borderRadius: "20px",
                backgroundColor: "#76B66C",
                width: "85%",
                height: "150px",
                position: "relative",
                zIndex: isTomorrowVisible ? 1 : 2,
                cursor: isTomorrowVisible ? "pointer" : "default",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  color: "white",
                  float: "left",
                  marginTop: "5%",
                  marginLeft: "10%",
                  display: "flex",
                }}
              >
                <img
                  src={target}
                  style={{
                    width: "25px",
                    height: "24px",
                    marginRight: "6px",
                    objectFit: "contain",
                  }}
                />
                <span style={{ fontSize: "1.1vw", float: "top" }}>
                  김동재 님의 오늘 목표
                </span>
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
                  marginTop: "15px",
                  marginRight: "15px",
                  float: "right",
                }}
              >
                인증하기
              </button>
              <br />
              <br />
              <br />
              <div
                style={{
                  float: "left",
                  marginTop: "0.5vw",
                  marginLeft: "3vw",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "2.3vw",
                }}
              >
                방청소 및 침구 정리하기
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service-title">
          자주찾는
          <br />
          서비스
        </div>
        <div className="services-container">
          {services.map((service, index) => (
            <a key={index} className="service-card" href="#">
              <img src={service.icon} alt={service.name} />
              {service.name === "마음이와 대화하기" ? (
                <>
                  마음이와
                  <br />
                  대화하기
                </>
              ) : (
                service.name
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
