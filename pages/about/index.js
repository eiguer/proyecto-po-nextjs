import React from "react";
import styles from "./about.module.css";
import Link from "next/link";

const about = () => {
  return (
    <>
      <div className={styles.container}>
        <div>about</div>
        <Link href="/">
          <a>Home</a>
        </Link>
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
