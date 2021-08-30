import React, { useEffect, useRef, useState } from "react";
import {  useHistory } from "react-router-dom";
import "./App.sass";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../redux/userDuck";
import WhoWeAre from "./whoWeAre/whoWeAre";
import Explain from "./explain/explain";
import ExplainMobile from "./explain/explainMobile";
import soapimg from "./soap.svg";
import { encrypt } from "../../customhooks/encrypt";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((store: any) => store.user.user);
  const history = useHistory();
  const historyref = useRef(history);
  const [isOnMobile, setIsOnMobile] = useState(false)
  useEffect(() => {
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
    const d:any = document.querySelector("body")
    if(parseInt(getComputedStyle(d).width.replace("px","")) < 650)setIsOnMobile(true)
  }, [dispatch]);
  useEffect(() => {
    if (user.email) {
      historyref.current.push("/home");
    }
  }, [user]);
  const loginAsTestUser = ()=>{
    const user = {
      email: "gustavo.n.mercado2@gmail.com",
      ppssww: encrypt("123123123"),
    };
    localStorage.setItem("_us", JSON.stringify(user));
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
    document.location.pathname = "/home";
      // history.push("/home")
  }
  return (
    <>
      <div className="HomeNotLogged d-flex w-100 justify-around">
        <i className="md-none far fa-dot-circle"></i>
        <i className="fas fa-book book1"></i>
        <i className="fas fa-book book2"></i>
        <i className="fas fa-pen-nib pen1"></i>
        <i className="fas fa-pen-nib pen2"></i>
        <div className="md-none halfcircle" data-aos="rotate-circle"></div>
        <div className="homeLeft flex flex-column w-50">
          <h2 className="title mr-auto " data-aos="fade-right" >
            Bienvenido a{" "}
            <span className="axis fs-1 fw-bold d-inline ">Clases particulares de inglés</span>!
          </h2>
          <p className="description mt-2 text-serif2 " data-aos="fade-right" data-aos-delay="300" >
            Enseñanza de Inglés de una forma profesional, Efectiva y
            divertida, 100% adaptada a todas las edades. Ahora también contando
            con la mejor asistencia a alumnos desde sus hogares de la manera más
            divertida e innovadora.
          </p>
          <div onClick={loginAsTestUser} className="w-100" data-aos="fade-right" data-aos-delay="550">
            <button className="btn btn-blue text-serif2 fs-6 mt-4 mr-auto w-75 fw-bold">
              Utilizar usuario de prueba
            </button>
          </div>
        </div>
        <div className="homeRight md-none flex w-50" data-aos="fade-up">
          <img
            src="https://i.ibb.co/yNqZCTF/image.png"
            className="img1"
            alt="englishOne"
          />
          <img
            src="https://i.ibb.co/YT9SSw2/x2.jpg"
            className="img2"
            alt="englishTwo"
          />
        </div>
      </div>
      {/* -------------------- ICONOS ---------------------*/}
      <div className="homeIcons justify-around w-100" >
        <div className="w-25 flex flex-column" data-aos="fade-up" >
          <i className="fas fa-graduation-cap text-main"></i>
          <h5 className="fw-bold">Certificación</h5>
          <p>
            Certificación directa de{" "}
            <span className="text-primary">Cambridge certificates</span>,
            validados en todo el múndo
          </p>
        </div>
        <div className="w-25 flex flex-column" data-aos="fade-up" data-aos-delay="250">
          <img src={soapimg} alt="soapimg" />
          <h5 className="fw-bold">Cuidados</h5>
          <p>
            Contamos con todos los cuidados y prevenciones para mantener a
            nuestros alumnos con total seguridad
          </p>
        </div>
        <div className="w-25 flex flex-column" data-aos="fade-up" data-aos-delay="500">
          <i className="fas text-success fa-money-check-alt"></i>
          <h5 className="fw-bold">Planes de precios</h5>
          <p>
            No solo aceptamos todo tipos de pagos, también ofrecemos descuentos
            si empiezas con un amigo y/o familiar
          </p>
        </div>
        <div className="w-25 flex flex-column" data-aos="fade-up" data-aos-delay="750">
          <img
            src="https://i.ibb.co/MnghM53/conversacion.png"
            alt="conversacion"
          />
          <h5 className="fw-bold"> Atención </h5>
          <p>Profesores atentos a mensajes/llamadas de alumnos con dudas</p>
        </div>
      </div>
      {isOnMobile ? <ExplainMobile/> : <Explain/>}
      <WhoWeAre/>
    </>
  );
}

export default App;
