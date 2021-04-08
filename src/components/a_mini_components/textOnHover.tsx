import React from "react";
//father element must has className "HoverFather"
import "./textHover.sass";
function TextHover({
  message,
  className = "",
  width = "200px",
  margin = "0 0 0 270px",
}: {
  message: string,
  className?: string;
  width?: string;
  margin?: string;
}) {
  //display on Hover of parent Element
  return (
    <div
      className={className + "onHoverText"}
      style={{
        width,
        margin,
      }}
    >{message}</div>
  );
}
export default TextHover;
