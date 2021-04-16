import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ConfigHW.sass";
function ConfigHW({user, setConfig,setConfigDiv}:{user:any, setConfig:any, setConfigDiv:any}) {
  const { register, handleSubmit } = useForm();
  const [errores, setErrores] = useState([""]);
  const onSubmit = (input:any) => {
    let errs = []
    if(input.cursos.length === 0){
      errs.push("Debes ingresar al menos un curso")
    }
    if(input.date === ""){
      errs.push("Debes ingresar una fecha válida")
    }
    setErrores([...errs])
    if(errs.length > 0)return
    console.log(input)
    setConfig({...input})
    setConfigDiv(false)
  }
  return (
    <>
      <section className="darkTrasnparentbg flex flex-column">
        <form onSubmit={handleSubmit(onSubmit)} className="configHW">
          <h2 className="text-center">Configuración</h2>
          <hr className="hr w100" />
          <h4 className="fw-bold">Cursos:</h4>
          <div className="">
            {user.cursos?.map((curso: any, i: number) => (
              <div className="d-flex" key={i}>
                <input
                  className="form-check-input mx-2"
                  type="checkbox"
                  value={curso._id}
                  name="cursos"
                  ref={register}
                />
                <h5 className="d-flex">{curso.name}</h5>
              </div>
            ))}
          </div>
          <div>
            <h5 className="fw-bold mt-3 d-inline">Fecha de Entrega:</h5>
            <input
              style={{ height: "30px" }}
              type="date"
              ref={register}
              name="fecha_de_entrega"
              className="mx-3 d-inline"
              min="2021-05-01"
              max="2021-12-31"
            />
          </div>
          {errores.map((error:string)=>
            <h6 className="text-danger mt-2 text-center">{error}</h6>
          )}
          <div className="w-100 flex">
          <button className="mt-4 btn-blue2 w-75 fw-bold   fs-6">
            ACEPTAR
          </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default ConfigHW;
