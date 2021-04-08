import React,{} from "react";
import { useSelector } from "react-redux";
import "./ConfigHW.sass"
function ConfigHW (){
  const user = useSelector((store: any) => store.user.user);
  console.log(user)
  return(
    <>
      <i className="fas fa-cog"></i>
      <section className="darkTrasnparentbg flex">
        <div className="configHW">
          <h2>Configuración</h2>
          <hr className="hr w100"/>
          <h4 className="fw-bold">Cursos:</h4>
          {user.cursos?.map((curso:any,i:number)=>
            <div className="d-flex" key={i}>

            </div>
          )}
          <div className="d-flex">
          <h5 className="fw-bold">Fecha de Entrega:</h5>
          <input type="date" name=""  className="mx-3" min="2021-01-01" max="2021-12-31"/>
          </div>
        </div>
      </section>
    </>
  )
}
export default ConfigHW
