import React, { useRef } from "react";
import "./createhw.sass";
import choices from "./choices.svg";
import conversation from "./conversation.svg";
import TextHover from "../a_mini_components/textOnHover";
import { Link } from "react-router-dom";

function CreateHW() {
  const toggleDiv = useRef(null);
  return (
    <>
      {/* <i className="mx-auto fas fa-plus" onClick={()=>{
        const div:any = toggleDiv.current
        div.classList.add("fade-flex")
      }}>
        <TextHover message="Crea una tarea/examen con preguntas, multiple choice y otras opciones" />
      </i> */}
      <div className="createhw w-100 mt-3" ref={toggleDiv}>
        <div className="icon flex HoverFather">
          <i className="fas fa-plus"></i>
          <TextHover message="Crea una tarea/examen con preguntas, multiple choice y otras opciones" />
        </div>
        <div className="icon HoverFather flex">
          <i className="far fa-file-pdf"></i>
          <TextHover message="Sube un archivo PDF" />
        </div>
        <div className="icon HoverFather flex">
          <i className="far fa-file-word"></i>
          <TextHover message="Sube un archivo Word" />
        </div>
        <div className="icon HoverFather flex">
          <img src={conversation} alt="" />
          <TextHover
            message="Crea una tarea de solo pregúntas y respuestas textuales"
            margin="0 270px 0 0"
          />
        </div>
        <Link to="/createhw/multiplechoice">
          <div className="icon HoverFather flex">
            <img src={choices} alt="" />
            <TextHover
              message="Crea una tarea solo multiple choice, puedes elegir la opción de que el examen sea evaluado
            en automático"
              margin="0 270px 0 0"
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default CreateHW;
