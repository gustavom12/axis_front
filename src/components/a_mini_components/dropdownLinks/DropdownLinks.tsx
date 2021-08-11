import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './DropdownLinks.sass'
function Dropdown({ children, className, title, link }:
  { children: any, className?: string, title: string, link: string }) {
  const url = useLocation()
  const [sectionDropdown, setSectionDropdown] = useState(url.pathname.includes(link))
  return (
    <div className={`DropdownLinks ${className} ${sectionDropdown && "active"} w-100`}>
      <h5 className="title d-flex justify-content-between w-100" onClick={()=>setSectionDropdown(val=>!val)}>
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
