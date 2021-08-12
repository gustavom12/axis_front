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
        setSideBar((val: boolean) => false)
      }
    })
  }, [setSideBar])
  return (
    <>
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
            to="/units/1/pronouns"
          >
            Pronombres
          </Link>
        </Dropdown>
      </div>
    </div>
    <i
        className="fas fa-bars setSideBarBTN flex"
        onClick={() => setSideBar((val: boolean) => !val)}
      ></i>
    </>
  )
}
export default Sidebar
