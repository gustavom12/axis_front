import React,{useState,} from "react";
import { useForm } from "react-hook-form";
// import TextHover from "../a_mini_components/textOnHover";
import choices from "../homeLogged/teacherHome/CreateHW/choices.svg";
import { useSelector } from "react-redux";
import MultipleChoicePage from "./multipleChoice/multipleChoicePage";
import "./createHomework.sass"
import ConfigHW from "./config/configHW";

function CreateHW(props:any) {
  const pathname:string = props.location.pathname
  // const user = useSelector((store: any) => store.user.user);
  // const [config, setConfig] = useState({
  //   cursos:[],
  //   fecha_de_entrega: 0
  // })
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (input: any) => {
    console.log({errors})
    console.log({input});
  };
  return (
    <>
      <section className="createHomework">
        <form className="w-100" action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="Block">
            <div className="head flex">
              <img src={choices} alt="" />
              <h2 className="d-inline">Multiple Choice</h2>
            </div>
            <hr className="w-50 mx-auto m-0 mb-2 bg-primary" />
            <div className="titleDescription">
              <div className="input-group mb-1">
                <input
                  required
                  ref={register({
                    required: {
                      value: true,
                      message: "Debes ingresar tu nombre",
                    },
                  })}
                  name="titulo"
                  type="titulo"
                  className="form-control-lg w-100 inputQuestion"
                  placeholder="Titulo"
                />
              </div>
              <div className="input-group mb-2">
                <textarea
                  required
                  ref={register({
                    required: {
                      value: true,
                      message: "Debes ingresar una descripcion",
                    },
                  })}
                  name="descripcion"
                  className="form-control w-100 inputQuestion"
                  style={{ height: "100px" , fontSize: "16px"}}
                  placeholder="Descripción (opcional)"
                />
              </div>
              <ConfigHW/>
            </div>
          </div>
          {pathname.includes("multiplechoice") ?
          <MultipleChoicePage register={register}></MultipleChoicePage>
          : null
          }
        </form>
      </section>
    </>
  );
}
export default CreateHW;
