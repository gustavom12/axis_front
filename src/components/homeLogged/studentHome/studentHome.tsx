import React, { useEffect } from "react";
import "./studentHome.sass";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../../redux/userDuck";
import Myhomeworks from "./myHomeworks/Myhomeworks";
import { useLazyQuery } from "@apollo/client";
import CoursesQueries from "../../../graphqueries/courses";
import test from "./test.svg";
import { Link } from "react-router-dom";
import MisNotas from "./MisNotas/MisNotas";
import { useState } from "react";
import EditProfile from "./editProfile/editProfile";
import Notifications from "./notifications/Notifications";
function StundentHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
  }, [dispatch]);
  const user = useSelector((store: any) => store.user.user);
  const [homeworksNotDoneLength, setHomeworksNotDoneLength] = useState(0);
  const [getCourse, { data }] = useLazyQuery(CoursesQueries.GET_COURSE);
  const [editProfileDiv, setEditProfileDiv] = useState(false);

  useEffect(() => {
    if (user.course) {
      getCourse({ variables: { id: user.course } });
    }
  }, [user, getCourse]);
  return (
    <>
      <div className="circleBackground w-100 "></div>
      <section
        className="w-100 studentHome "
        style={{
          background: "#a8bebe54",
          minHeight: "92vh",
          paddingBottom: "7vh"
        }}
      >
        <div className="user d-flex">
          {user.image ? (
            <>
              <img src={user.image} alt="" className="img" />
            </>
          ) : (
            <>
              <div className="img flex fw-bold text-white text-capitalize">
                {user.fullname.split("", 1)}
              </div>
            </>
          )}
          <div className="d-flex mx-4 mt-3 flex-column">
            <div className="d-flex name">
              <h2 className="text-serif text-white text-capitalize fw-bold mb-0">
                {user.fullname}
              </h2>
              <button
                className="btn-white fw-bold"
                onClick={() => {
                  setEditProfileDiv(true);
                }}
              >
                Editar Perfil
              </button>
            </div>
            <h5 className="text-white mx-2 course d-flex">
              {data?.getCourse?.name}
              <span className="mx-3 text-capitalize">
                {" "}
                {data?.getCourse?.Teachers[0].fullname}{" "}
              </span>
            </h5>
            {homeworksNotDoneLength === 0 ? (
              <h5 className="text-success ">
                <i className="fas fa-check mx-2 my-auto"></i>
                Felicidades! Estás al día con tus tareas!
              </h5>
            ) : null}
            <h6 className="level fw-bold mt-1 text-serif text-white">
              <i className="fas fa-star mx-2 text-yellow"></i>
              {user.exp} XP
            </h6>
          </div>
        </div>
        <div className="text-white mx-auto d-flex makeQuiz  bg-dark mt-3">
          <div className="firstBlock d-flex">
            <img src={test} className="multiplechoiceimg" alt="" />
            <div className="d-flex flex-column">
              <h3 className="text-serif fw-bold ">Vocabulary Quiz</h3>
              <h6 className="text-serif fw-bold ">
                Completa preguntas, ganá
                <span className="exp text-yellow"> EXP </span>y{" "}
                <Link to="/"> Premios </Link>
              </h6>
            </div>
          </div>
          <div className="ml-auto flex secondBlock">
            <button className="btn-lightblue fw-bold text-serif">
              Empezar
            </button>
          </div>
        </div>
        <div className="d-flex homeworksContainer p-1 w-100 mt-4">
          <div className="mx-auto homeworkContainer">
            <Myhomeworks
              homeworksNotDoneLength={homeworksNotDoneLength}
              setHomeworksNotDoneLength={setHomeworksNotDoneLength}
              homeworkNotDone={user.homework?.filter(
                (hw: any) => hw.alreadyDone === false
              )}
            />
          </div>
          <div className="mx-auto homeworkContainer pb-4">
            <MisNotas
              homeworksDone={user.homework?.filter(
                (hw: any) => hw.alreadyDone === true
              )}
            />
          </div>
        </div>
        <div className="flex ">
          <Notifications notifications={user.notifications} />
        </div>
        {editProfileDiv ? (
          <EditProfile
            user={user}
            userImg={user.image}
            name={user.fullname.split("", 1)}
            setEditProfileDiv={setEditProfileDiv}
          />
        ) : null}
      </section>
    </>
  );
}

export default StundentHome;
