import { useForm } from "react-hook-form";
import choices from "../CreateHWSelect/choices.svg";
import { useSelector } from "react-redux";
import MultipleChoicePage from "./multipleChoice/multipleChoicePage";
import "./createHomework.sass";
import ConfigHW from "./config/configHW";
import { useState } from "react";
import TextHover from "../a_mini_components/textOnHover";
import HomeworkQueries from "../../graphqueries/homework";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";

function CreateHW(props: any) {
  const pathname: string = props.location.pathname;
  const user = useSelector((store: any) => store.user.user);
  const [config, setConfig] = useState({
    cursos: [],
    fecha_de_entrega: null,
  });
  const [createMultipleChoice] = useMutation(HomeworkQueries.CreateMultipleChoice)
  const [configDiv, setConfigDiv] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [questions, setQuestions] = useState([])
  useEffect(()=>{
    if(!user.userType)return
    if(user.userType !== "teacher"){
      window.location.href = "/"
    }
  },[user])
  const onSubmit = (input: any) => {
    let hwType = ""
    console.log(config)
    if(config.cursos.length === 0 || config.fecha_de_entrega === null){
      setConfigDiv(true)
      return
    }
    if(pathname.includes("multiplechoice")){
      hwType = "multiplechoice"
      const homework = {
        title: input.title,
        description: input.description,
        expires_date: config.fecha_de_entrega,
        courses: config.cursos,
        teacher: user._id,
        hwType,
        questions
      }
      console.log(homework)
      createMultipleChoice({variables:{MultipleChoice: homework}})
        .then(data=>console.log({data}))
        .catch(err=>console.log({err}))
    }
  };
  return (
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
                  minLength: {
                    value: 6,
                    message: "El título debe tener más de 6 caráteres",
                  },
                })}
                name="title"
                type="text"
                className="form-control-lg w-100 inputQuestion"
                placeholder="Titulo"
              />
              <h6 className="text-center mx-auto text-danger">
                {errors.title?.message}
              </h6>
            </div>
            <div className="input-group mb-2">
              <textarea
                ref={register({})}
                name="description"
                className="form-control w-100 inputQuestion"
                style={{ height: "80px", fontSize: "16px" }}
                placeholder="Descripción (opcional)"
              />
            </div>
            <i
              className="fas fa-cog flex mx-auto HoverFather"
              onClick={() => setConfigDiv(true)}
            >
              <TextHover message="Selecciona curso y fecha de entrega"></TextHover>
            </i>
          </div>
        </div>
        {pathname.includes("multiplechoice") ? (
          <MultipleChoicePage
            questions={questions}
            setQuestions={setQuestions}
            config={config}
            errors={errors}
            register={register}
          ></MultipleChoicePage>
        ) : null}
      </form>
      {configDiv ? (
        <ConfigHW
          user={user}
          setConfig={setConfig}
          setConfigDiv={setConfigDiv}
        />
      ) : null}
    </section>
  );
}
export default CreateHW;
