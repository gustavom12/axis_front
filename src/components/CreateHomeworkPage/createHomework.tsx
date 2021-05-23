import { useForm } from "react-hook-form";
import choices from "../homeLogged/teacherHome/CreateHWSelect/choices.svg";
import question from "../homeLogged/teacherHome/CreateHWSelect/conversation.svg";
import { useSelector } from "react-redux";
import MultipleChoicePage from "./multipleChoice/multipleChoicePage";
import "./createHomework.sass";
import ConfigHW from "./config/configHW";
import { useState } from "react";
import HomeworkQueries from "../../graphqueries/homework";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import Loader from "../loader/loader";
import QuestionsAnswers from "./QuestionsAnswers/QuestionsAnswers";
import AlreadyUploadedHw from "./alreadyUpload";

function CreateHW(props: any) {
  const pathname: string = props.location.pathname;
  const user = useSelector((store: any) => store.user.user);
  const [config, setConfig] = useState({
    cursos: [],
    fecha_de_entrega: "2021-06-01",
    inTimeEXP: 25
  });
  const [createMultipleChoice, { loading }] = useMutation(
    HomeworkQueries.CreateMultipleChoice
  );
  const [createHW] = useMutation(HomeworkQueries.CreateHW)
  const { register, handleSubmit, errors } = useForm();
  const [questions, setQuestions] = useState([]);
  const [success, setSuccess] = useState("");
  useEffect(() => {
    if (!user.userType) return;
    if (user.userType !== "teacher") {
      window.location.href = "/";
    }
  }, [user]);
  const onSubmit = (input: any) => {
    let hwType = "";
    if (config.cursos.length === 0 || config.fecha_de_entrega === null) {
      return;
    }

    if(pathname.includes("questions_answer")){
      hwType = "multiType";
      const homework = {
        title: input.title,
        description: input.description,
        expires_date: config.fecha_de_entrega,
        courses: config.cursos,
        teacher: user._id,
        hwType,
        questions,
      };
      createHW({variables: {homework}})
      .then((data: any) => {
        setSuccess("La tarea se ha subido con éxito");
      })
      .catch((err) => console.log({ err }));
    }
    if (pathname.includes("multiplechoice")) {
      hwType = "multiplechoice";
      const homework = {
        title: input.title,
        description: input.description,
        expires_date: config.fecha_de_entrega,
        courses: config.cursos,
        teacher: user._id,
        hwType,
        questions,
      };
      createMultipleChoice({ variables: { MultipleChoice: homework } })
        .then((data: any) => {
          setSuccess("La tarea se ha subido con éxito");
        })
        .catch((err) => console.log({ err }));
    }
  };
  return (
    <section className="createHomework">
      <form className="w-100" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="Block">
          {pathname.includes("multiplechoice") ? (
            <div className="head flex">
              <img src={choices} alt="" />
              <h2 className="d-inline fw-bold text-serif">Multiple Choice</h2>
            </div>
          ) :
          <div className="head flex">
            <img src={question} className="mb-auto mx-2" alt="" />
            <h2 className="d-inline fw-bold text-serif">Create Homework</h2>
          </div>
          }
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
          </div>
        </div>
        <ConfigHW
          user={user}
          setConfig={setConfig}
          config={config}
        />
        {pathname.includes("multiplechoice") ? (
          <MultipleChoicePage
            questions={questions}
            setQuestions={setQuestions}
            errors={errors}
            register={register}
          ></MultipleChoicePage>
        ) :
        <QuestionsAnswers
          questions={questions}
          errors={errors}
          setQuestions={setQuestions}
          register={register}
        ></QuestionsAnswers>
        }
      </form>
      {loading ? (
        <div className="flex w-100">
          <Loader />
        </div>
      ) : null}
      {success && <AlreadyUploadedHw success={success} loading={loading}/>}
    </section>
  );
}
export default CreateHW;
