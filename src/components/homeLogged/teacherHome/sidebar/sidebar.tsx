import React,{} from "react";
import coursesvg from "./lecture.svg"
import choice from "./rating.svg"
import './sidebar.sass'
function Sidebar (){
  return(
    <div className="Sidebar">
      <h5 className="fw-bold mb-1">Teacher Tools</h5>
      <hr className="hr w-25 m-0"/>
      <div className="tools w-100 mt-3">
        <div className="d-flex active tool mt-1 px-1">
          <img src={coursesvg} className="mr-1" alt="" style={{height: "25px"}}/>
          <h6 className="my-auto ml-1">Mis cursos</h6>
        </div>
        <div className="d-flex tool mt-1 px-1">
        <i className="fas fa-user-graduate" style={{fontSize: "25px"}}></i>
          <h6 className="my-auto ml-1">Mis alumnos</h6>
        </div>
        <div className="d-flex tool mt-1 px-1">
        <i className="fas fa-book" style={{fontSize: "25px"}}></i>
          <h6 className="my-auto ml-1">Mis tareas</h6>
        </div>
        <div className="d-flex tool mt-1 px-1">
          <img src={choice} className="mr-1" alt="" style={{height: "27px"}}/>
          <h6 className="my-auto ml-1">Mis Quiz</h6>
        </div>
      </div>
      <hr className="hr w-75"/>
      <h5 className="fw-bold mt-2 mb-0">Admin Tools</h5>
      <hr className="hr w-25 m-0"/>
      <div className="tools w-100 mt-2">
        <div className="d-flex tool mt-1 px-1">
          <img src={coursesvg} className="mr-1" alt="" style={{height: "25px"}}/>
          <h6 className="my-auto ml-1">Crear cursos</h6>
        </div>
        <div className="d-flex tool mt-1 px-1">
          <img src={coursesvg} className="mr-1" alt="" style={{height: "25px"}}/>
          <h6 className="my-auto ml-1">Profesores</h6>
        </div>
        <div className="d-flex tool mt-1 px-1">
        <i className="fas fa-user-graduate" style={{fontSize: "25px"}}></i>
          <h6 className="my-auto ml-1">Alumnos</h6>
        </div>
        <div className="d-flex tool mt-1 px-1">
          <i className="fas fa-cash-register" style={{fontSize: "25px"}}></i>
          <h6 className="my-auto ml-1">Pagos</h6>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
