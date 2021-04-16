import React,{useEffect,useRef} from "react";
import { Link, useHistory } from "react-router-dom";
import "./App.sass";
import soapimg from "./soap.svg"
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../redux/userDuck";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store: any) => store.user.user);
  const history = useHistory()
  const historyref = useRef(history)
  useEffect(() => {
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
  }, [dispatch]);
  useEffect(() => {
    if(user.email){
      historyref.current.push("/home")
  }},[user])
  return (
    <>
      <div className="HomeNotLogged d-flex w-100 justify-around">
        <i className="md-none far fa-dot-circle"></i>
        <i className="fas fa-book book1"></i>
        <i className="fas fa-book book2"></i>
        <i className="fas fa-pen-nib pen1"></i>
        <i className="fas fa-pen-nib pen2"></i>
        <div className="md-none halfcircle"></div>
        <div className="homeLeft flex flex-column w-50">
          <h2 className="title mr-auto">
            Bienvenido a <span className="axis fs-1 fw-bold d-inline ">AXIS</span>!
          </h2>
          <p className="description mt-2">
            Años en enseñanza de Inglés de una forma profesional, Efectiva y
            divertida, 100% adaptada a todas las edades. Ahora también contando con la
            mejor asistencia a alumnos desde sus hogares
          </p>
          <Link to="/register" className="w-100">
            <button className="btn btn-blue mt-4 mr-auto w-75 fw-bold">
              Empezar ahora
            </button>
          </Link>
        </div>
        <div className="homeRight md-none flex w-50">
          <img src="https://i.ibb.co/yNqZCTF/image.png" className="img1" alt="englishOne"/>
          <img src="https://i.ibb.co/YT9SSw2/x2.jpg" className="img2" alt="englishTwo"/>
        </div>
      </div>
      {/* -------------------- ICONOS ---------------------*/}
      <div className="homeIcons d-flex justify-around w-100">
      <div className="w-25 flex flex-column">
          <i className="fas fa-graduation-cap text-main"></i>
          <h5 className="fw-bold">Certificación</h5>
          <p>
            Certificación directa de <span className="text-primary" >Cambridge certificates</span>,
            validados en todo el múndo
          </p>
        </div>
        <div className="w-25 flex flex-column">
          <img src={soapimg} alt="soapimg"/>
          <h5 className="fw-bold">Cuidados</h5>
          <p>
            Contamos con todos los cuidados y prevenciones para mantener
            a nuestros alumnos con total seguridad
          </p>
        </div>
        <div className="w-25 flex flex-column">
          <i className="fas text-success fa-money-check-alt"></i>
          <h5 className="fw-bold">Planes de precios</h5>
          <p>
            No solo aceptamos todo tipos de pagos, también ofrecemos descuentos
            si empiezas con un amigo y/o familiar
          </p>
        </div>
        <div className="w-25 flex flex-column">
          <img src="https://i.ibb.co/MnghM53/conversacion.png" alt="conversacion"/>
          <h5 className="fw-bold"> Atención </h5>
          <p>
            Profesores atentos a mensajes/llamadas de alumnos con dudas
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
