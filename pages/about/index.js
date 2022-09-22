import React from "react";
import styles from "./about.module.css"

const about = () => {
  return (
    <>
      <div className={styles.container}>
        <div>about</div>
      </div>
      <style jsx>{`
        div {
          color: red;
        }
      `}</style>
    </>
  );
};

export default about;
