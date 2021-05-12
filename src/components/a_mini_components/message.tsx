import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./message.sass";
function Message({ message }: { message: String }) {
  const [className, setClassName] = useState("");
  useEffect(() => {
    if (message !== "") {
      setClassName("flex")
      setTimeout(()=>{
        setClassName("flex animate");
      },500)
    } else {
      setClassName("");
      setTimeout(()=>{
        setClassName("d-none")
      },1000)
    }
  }, [message]);
  return (
    <h5 style={{}} className={`message text-serif ${className}  p-2`}>
      {message}
    </h5>
  );
}
export default Message;
