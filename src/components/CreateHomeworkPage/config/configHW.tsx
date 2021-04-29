import React, { useState } from "react";
import { useEffect } from "react";
import "./ConfigHW.sass";
function ConfigHW({
  user,
  setConfig,
  config,
}: {
  user: any;
  setConfig: any;
  config: any;
}) {
  const [errores, setErrores] = useState([""]);
  useEffect(() => {
    let errs = [];
    if (config.cursos.length === 0) {
      errs.push("Debes ingresar al menos un curso");
    }
    if (config.date === null) {
      errs.push("Debes ingresar una fecha válida");
    }
    setErrores([...errs]);
  }, [config]);
  return (
    <div className="configHW mt-4">
      <h2 className="text-center fw-bold">Configuración</h2>
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
              onChange={(e) => {
                if (e.target.checked) config.cursos.push(e.target.value);
                else
                  config.cursos.splice(
                    config.cursos.indexOf(e.target.value),
                    1
                  );
                setConfig({ ...config });
                console.log(config);
              }}
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
          name="fecha_de_entrega"
          className="mx-3 d-inline"
          value={config.fecha_de_entrega}
          min="2021-05-01"
          max="2021-12-31"
          onChange={(e) => {
            config.fecha_de_entrega = e.target.value
            setConfig({...config})
          }}
        />
      </div>
      <div className="mt-3">
        <h5 className="fw-bold d-inline">EXP al entregarlo a tiempo:</h5>
        <input
          style={{ height: "30px" }}
          type="number"
          value={config.inTimeEXP}
          className="mx-3 d-inline"
          required
          min={1}
          max={1000}
          onChange={(e) => {
            config.inTimeEXP = e.target.value
            setConfig({...config})
          }}
        />
        <p>Por defecto: 50EXP</p>
      </div>
      <div className="mt-3">
        <h5 className="mb-1 fw-bold d-inline">Auto calificación </h5>
        <label
          className="toggle-control d-inline mx-2"
          style={{ position: "relative", top:"4px" }}
        >
          <input type="checkbox" disabled/>
          <span className="control"></span>
        </label>
        <p> No tendrás que calificar el exámen, será automáticamente evaluado
          (Solo disponible en tareas multiple choice, aún no disponible)
        </p>
      </div>
      {errores.map((error: string) => (
        <h6 className="text-danger mt-2 text-center">{error}</h6>
      ))}
    </div>
  );
}
export default ConfigHW;
