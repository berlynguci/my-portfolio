import React from "react";
import "./styles.css";

const IconGlowItem = ({ iconSrc, label, glowColor }) => {
  return (
    <div className="icon-glow-item">
      <img
        src={iconSrc}
        className="icon"
        style={{ filter: `drop-shadow(0 0 10px ${glowColor})` }}
      />
      <span className="label" style={{ textShadow: `0 0 5px ${glowColor}` }}>
        {label}
      </span>
    </div>
  );
};

export default IconGlowItem;
