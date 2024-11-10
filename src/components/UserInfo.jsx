import React from "react";
import styles from '../css/UserInfo.module.css';

const userInfo = [
  { label: "이름", value: "김동재" },
  { label: "전화번호", value: "010-1234-5678" },
  { label: "거주 지역", value: "강남구" },
  { label: "관할 기관", value: "강남청년누리" },
  { label: "계좌 정보", value: "신한 110-444-5865-852", isSmall: true }
];

function UserInfo({ closeInfo }) {
  return (
    <div className={styles.modalOverlay} onClick={closeInfo}>
    <section className={styles.userProfile}>
      <div className={styles.profileCard}>
        {/* 오른쪽 상단에 닫기 버튼 배치 */}
        <button onClick={closeInfo} className={styles.closeButton}>×</button>
        
        <div className={styles.profileContent}>
          <div className={styles.imageColumn}>
            <div className={styles.titleWrapper}>
              <h5>회원 정보</h5>
              <div className={styles.profileImage} role="img" aria-label="프로필 이미지" />
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.userInfo}>
              {userInfo.map((item, index) => (
                <div key={index} className={styles.infoItem}>
                  <span>
                    {item.label}:{" "}
                    <span className={item.isSmall ? styles.smallText : ""}>
                      {item.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default UserInfo;
