import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, clicked, icon, color, bgColor }) => {
  return (
    <button
      className={styles.button}
      onClick={clicked}
      style={{ color: color, background: bgColor }}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
