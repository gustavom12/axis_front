import React from "react";
import "./createhw.sass";
import choices from "./choices.svg";
import conversation from "./conversation.svg";
import TextHover from "../../../a_mini_components/textOnHover";
import { Link } from "react-router-dom";
import select from "../sidebar/rating.svg"
function CreateHW() {
  const backend: any = process.env.REACT_APP_URL?.replace("/graphql", "");
  const backendURL: any = `${backend}/upload/pdf`;
  return (
    <section className="miscursos">
      {/* <i className="mx-auto fas fa-plus" onClick={()=>{
        const div:any = toggleDiv.current
        div.classList.add("fade-flex")
      }}>
        <TextHover message="Crea una tarea/examen con preguntas, multiple choice y otras opciones" />
      </i> */}
      <h2 className="fw-bold text-center mt-4 text-serif mb-0">
        {" "}
        Selecciona que tipo de tarea quieres crear{" "}
      </h2>
      <div className="createhw w-100 mt-3 ">
        <div className="icon HoverFather flex">
          <input
            type="file"
            name="image"
            id="pdf"
            accept=""
            style={{ height: "0", width: "0" }}
            onChange={(e: any) => {
              const input: any = e.target;
              console.log({ body: input.files[0] });
              let formData = new FormData();
              //send automatically the image to backend on select
              formData.append("image", input.files[0]);
              fetch(backendURL, {
                method: "POST",
                body: formData,
              })
                .then((data: any) => data.json())
                .then((json) => {
                  console.log(json);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          />
          <label htmlFor="pdf" className="far fa-file-pdf"></label>
          <TextHover message="Sube un archivo PDF (aún no disponible)" />
        </div>
        <div className="icon HoverFather flex">
          <i className="far fa-file-word"></i>
          <TextHover message="Sube un archivo Word (aún no disponible)" />
        </div>
        <Link to="/createquiz">
          <div className="icon HoverFather flex">
            <img src={select} alt="" style={{width:"60px"}}/>
            <TextHover
              message="Crea un Vocabulary Quiz"
              margin="0 270px 0 0"
            />
          </div>
        </Link>
        <Link to="/createhw/questions_answer">
          <div className="icon HoverFather flex">
            <img src={conversation} alt="" />
            <TextHover
              message="Crea una tarea de solo pregúntas, respuestas textuales e imágenes"
              margin="0 270px 0 0"
            />
          </div>
        </Link>
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
    </section>
  );
}

export default CreateHW;
