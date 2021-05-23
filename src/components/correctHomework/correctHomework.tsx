import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useEffect, useRef } from "react";
import GetDate from "../../customhooks/GetDate";
import { useDispatch, useSelector } from "react-redux";
import HomeworkQueries from "../../graphqueries/homework";
import { HomeworkDone } from "../../interfaces/homeworkDone";
import Loader from "../loader/loader";
import AddNote from "./addNoteTo_QA";
import AlreadySendDiv from "./alreadySendDiv";
import { GetUser } from "../../redux/userDuck";
import "./CorrectHomework.sass";
import CorrectMultipleChoice from "./correctMultipleChoice";
import HomeworkInfo from "./homeworkInfo";
function CorrectHomework() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
  }, [dispatch]);
  const user = useSelector((store: any) => store.user.user);
  const id = window.location.search.replace("?id=", "");
  const { data, loading } = useQuery(HomeworkQueries.getHomeworkDoneComplete, {
    variables: {
      id,
    },
  });
  const [doneDate, setDoneDate] = useState("");
  const [expiresDate, setExpiresDate] = useState("");
  // questions_answers
  const [name, setName] = useState("");
  const [homeworkDone, setHomeworkDone] = useState<HomeworkDone>();
  const descriptionRef: any = useRef(null);
  const calificationRef: any = useRef(null);
  const expRef: any = useRef(null);
  const [updateHomeworkDone, ] = useMutation(HomeworkQueries.updateDoneHomework)
  useEffect(() => {
    if (!data) return;
    setHomeworkDone(data.getHomeworkDone);
    const homework = data.getHomeworkDone;
    const done_date = GetDate(Date.parse(homework.doneDate));
    const expires_date = GetDate(Date.parse(homework.expires_date));
    setDoneDate(done_date.complete);
    setExpiresDate(expires_date.complete);
  }, [data,setHomeworkDone,setDoneDate,setExpiresDate]);
  const onsubmit = (e: any) => {
    e.preventDefault();
    //not complete action if user is not a "teacher"
    if (!user.userType) return;
    if (user.userType !== "teacher") {
      window.location.href = "/";
      return
    }
    setAlreadySendDiv(true)
    setLoadingMutation(true)
    const homework = {
      ...homeworkDone,
      correctionDesription: descriptionRef.current.value,
      calification: parseInt(calificationRef.current.value),
      expGiven: parseInt(expRef.current.value)
    };
    delete homework.__typename
    updateHomeworkDone({variables:{id: homeworkDone?._id, homeworkDone: homework}})
      .then((data:any)=>{
        setLoadingMutation(false)

      })
      .catch(err=>console.log({err}))
  };
  const [alreadySendDiv, setAlreadySendDiv] = useState(false)
  const [loadingMutation, setLoadingMutation] = useState(false)
  return (
    <section className="createHomework">
      <form className="w-100" onSubmit={onsubmit}>
        <div className="Block text-center">
          {loading ? (
            <Loader />
          ) : (
            <>
              <h1 className="fw-bold">{homeworkDone?.title}</h1>
              <p>{homeworkDone?.description}</p>
            </>
          )}
        </div>
        <HomeworkInfo
          calification={data?.getHomeworkDone.calification}
          doneDate={doneDate}
          expiresDate={expiresDate}
          student={homeworkDone?.student}
          setName={setName}
        />
        {homeworkDone?.questions_answers?.map((qa: any, i: number) => (
          <div className="questions_answer w-100 bg-white mt-4" key={i}>
            <h4 className="fw-bold  ">{qa.title}</h4>
            {qa.image ? <img src={qa.image} alt="" /> : null}
            {qa.type === "textLong" ? (
              <div>
                <h6 className="mb-3 studentAnswer">{qa.answer}</h6>
                <AddNote
                  homeworkDone={homeworkDone}
                  question_answer={qa}
                  setHomeworkDone={setHomeworkDone}
                  name={name}
                />
              </div>
            ) : qa.type === "textShort" ? (
              <div>
                <h5 className="mb-3 studentAnswer">{qa.answer}</h5>
                <AddNote
                  homeworkDone={homeworkDone}
                  question_answer={qa}
                  setHomeworkDone={setHomeworkDone}
                  name={name}
                />
              </div>
            ) : qa.type === "number" ? (
              <>
                <div>
                  <h5 className=" text-center fw-bold mb-3 studentAnswer">
                    respuesta: <span className="fw-bold">{qa.answer}</span>
                  </h5>
                  <AddNote
                    homeworkDone={homeworkDone}
                    question_answer={qa}
                    setHomeworkDone={setHomeworkDone}
                    name={name}
                  />
                </div>
              </>
            ) : qa.type === "choice" ? (
              <CorrectMultipleChoice
                homeworkDone={homeworkDone}
                question_answer={qa}
                name={name}
                setHomeworkDone={setHomeworkDone}
              />
            ) : null}
          </div>
        ))}
        <div className="flex flex-column calification info bg-white mt-4 px-5">
          <h2 className="fw-bold "> Calificar tarea </h2>
          <div className="flex px-2">
            <input
              min={0}
              max={100}
              type="number"
              placeholder="nota"
              defaultValue={homeworkDone?.calification || ""}
              className="form-control text-serif"
              ref={calificationRef}
              required
              style={{
                width: "80px",
                height: "32px",
                fontSize: "27px",
                textAlign: "end",
                transition: "all linear 0.3s",
              }}
              onChange={(e) => {
                const value: any = parseInt(e.target.value);
                if (value >= 85) {
                  e.target.style.color = "#35cc42";
                  return;
                }
                if (value >= 65) {
                  e.target.style.color = "#32dae6";
                  return;
                }
                if (value <= 64 && value >= 41) {
                  e.target.style.color = "#ff5555";
                  return;
                }
                if (value <= 40) {
                  e.target.style.color = "#ff0000";
                }
              }}
            />
            <span className="fs-3">/100</span>
          </div>
          <div className="flex flex-column px-2">
            <h4 className="fw-bold mb-0">EXP por completar esta tarea:</h4>
            <p className="m-0 text-center">
              Recomendado: 10exp pregunta correcta, 5exp pregunta regular, 0exp
              pregunta incorrecta
            </p>
            <input
              min={0}
              max={1000}
              defaultValue={50}
              type="number"
              placeholder="exp"
              className="form-control text-serif mb-3"
              ref={expRef}
              required
              style={{
                width: "120px",
                height: "32px",
                fontSize: "27px",
                textAlign: "center",
                transition: "all linear 0.3s",
              }}
            />
          </div>
          <textarea
            className="w-100 form-control text-serif"
            name=""
            id=""
            ref={descriptionRef}
            defaultValue={homeworkDone?.correctionDesription}
            placeholder="Correción final, (Opcional)"
            style={{ height: "60px" }}
            onChange={(e: any) => {
              e.target.style.height = `${e.target.scrollHeight + 2}px`;
              // const clone = [...answers]
              // clone[answers.indexOf(question)].answer = e.target.value
              // setAnswers(clone)
            }}
          />
          <div className="flex w-100">
            <button
              className="btn-lightblue mt-3 mb-3 w-50 fw-bold text-serif"
              type="submit"
            >
              {homeworkDone?.calification ? "Actualizar" : "Aceptar" }
            </button>
          </div>
        </div>
      </form>
      {alreadySendDiv ? <AlreadySendDiv loading={loadingMutation} /> : null}
    </section>
  );
}
export default CorrectHomework;
