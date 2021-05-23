import React,{} from "react";
import { Link } from "react-router-dom";
import TextHover from "../../../a_mini_components/textOnHover";
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
            <div className="col mx-auto"></div>
            <div className="col mx-auto"></div>
          </div>
        </div>
        <div className="container w-100 text-serif">
          {cursos?.map((curso:any, i:any)=>
            <div key={i} className="row curso pt-2 w-100 flex">
              <h6 className="col mx-auto ">{curso.name}</h6>
              <h6 className="col mx-auto ">{curso?.Students?.length}</h6>
              <div className="col flex HoverFather">
                <button className="btn btn-blue2 mb-auto col w-75">Enviar mensaje</button>
                <TextHover message="Función aún no disponible" />
              </div>
              <div className="col ">
              <Link to={`/home/cursos?ids=[${curso._id}]`}>
              <button className="btn btn-blue mb-auto col w-75">Ver más</button>
              </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default Miscursos
