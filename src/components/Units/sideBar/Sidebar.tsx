import React, { useEffect, useRef } from "react";
import Dropdown from "../../a_mini_components/dropdownLinks/DropdownLinks";
import './Sidebar.sass'
import { Link } from "react-router-dom";
function Sidebar({ sideBar, setSideBar }: { sideBar: any, setSideBar: any }) {
  const modalRef = useRef<any>()
  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if (e.target === modalRef.current) {
        e.stopPropagation()
        setSideBar((val: boolean) => !val)
      }
    })
  }, [setSideBar])
  return (
    <div className={`SidebarContainer ${sideBar && "activeModal"}`}
      ref={modalRef}
    >
      <div className="SidebarUnit">
        <Dropdown
          title="Unidad I"
          link="unit1"
        >
          <Link
            className={`Link w-100 `}
            to="/introduction/temas"
          >
            Temas
          </Link>
        </Dropdown>
      </div>
    </div>
  )
}
export default Sidebar
