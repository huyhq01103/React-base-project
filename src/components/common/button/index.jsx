import React, { memo } from "react";

const Button = ({ className = "btn", title = "Button Title", onClick = () => false }) => {
  return (
    <button type="button" className={`btn ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default memo(Button);
