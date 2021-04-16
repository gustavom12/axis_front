import React,{} from "react";
import './Miscursos.sass'

function Miscursos ({cursos}:{cursos:[any]}){
  console.log(cursos)
  return(
    <section className="miscursos">
      <h3 className="mb-1 fw-bold">Mis cursos</h3>
      <div className="hr w-10 m-0"/>
      <div className="flex flex-column text-center">
        <div className="titles container w-100 mt-5 text-serif fw-bold">
          <div className="row w-100 ">
            <h5 className="col mx-auto ">Nombre</h5>
            <h5 className="col mx-auto">Alumnos</h5>
            <h5 className="col mx-auto">Tareas Creadas</h5>
            <br className="col mx-auto"></br>
          </div>
        </div>
        <div className="container w-100 text-serif">
          {cursos?.map((curso:any, i:any)=>
            <div key={i} className="row curso pt-2 w-100 flex">
              <h6 className="col mx-auto ">{curso.name}</h6>
              <h6 className="col mx-auto ">{curso.Students.length}</h6>
              <h6 className="col mx-auto "> {curso.homeworks.length} </h6>
              <div className="col ">
              <button className="btn btn-blue mb-auto col w-75">Ver más</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default Miscursos