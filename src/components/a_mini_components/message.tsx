import React,{} from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./message.sass"
function Message ({ message}:{message:String,}){
  const [className,setClassName] = useState("")
  useEffect(()=>{
    message !== ""
      ? setClassName("animate")
      : setClassName("")
  },[message])
  return(
      <h5
        style={{}}
        className={`message text-serif ${className} flex p-2`}>
        {message}
      </h5>
  )
}
export default Message
