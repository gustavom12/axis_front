import React,{ useState } from "react";
import './Dropdown.sass'
function Dropdown (
  { children, className, title }:
  { children: any, className?: string, title: any }
){
  const [active, setActive] = useState(false);
  return(
    <div className={`Dropdown ${className} ${active && "active"} w-100`}>
      <h5 className="title d-flex justify-content-between w-100" onClick={()=>{setActive(()=>!active)}}>
        <span>{title}</span>
        <i className="fas fa-chevron-right"></i>
      </h5>
      <div className="content w-100">
        {children}
      </div>
    </div>
  )
}
export default Dropdown
