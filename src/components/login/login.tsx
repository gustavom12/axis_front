import React, { useState, useEffect,useCallback } from "react";
import "./login.sass";
import Loader from "../loader/loader";
import { useForm } from "react-hook-form";
import { useLazyQuery } from "@apollo/client";
import book from "./open-book.svg";
import UserQueries from "../../graphqueries/users";
import { decrypt } from "../../customhooks/encrypt";
import { useDispatch } from "react-redux";
import { GetUser } from "../../redux/userDuck";
import { useRef } from "react";

type Inputs = {
  email: string;
  ppssww: string;
};

function Login() {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, [dispatch])
  const { register, handleSubmit } = useForm<Inputs>();
  const [doLogin, { data, error, loading }] = useLazyQuery(
    UserQueries.LOGIN
  );
  const [inputs, setInputs] = useState({ email: "", ppssww: "" });
  const [wrongPassword, setWrongPassword] = useState("")
  useEffect(() => {
    document.querySelector("nav")?.classList.add("d-none");
    return () => {
      document.querySelector("nav")?.classList.remove("d-none");
    };
  }, []);

  const onSubmit = (input: Inputs) => {
    setWrongPassword("")
    doLogin({ variables: { email: input.email } })
    setInputs(input)
    //lazy query is not a promise, so set time out is the only way to await data change
    // setTimeout(() => {
    //
    // },1400)
  };
  useEffect(() => {
    //codes runs after "doLogin"
    if (!data) return;
    console.log({data,decrypt: decrypt(data.Login.ppssww),input: inputs.ppssww});
    if (decrypt(data.Login.ppssww) === inputs.ppssww) {
      const user = {
        email: data.Login.email,
        ppssww: data.Login.ppssww,
      };
      localStorage.setItem("_us", JSON.stringify(user));
      const getX = () => {
        stableDispatch(GetUser());
      };
      getX();
      document.location.pathname = "/home";
      }else{
      setWrongPassword("La contrasela es incorrecta, vuelve a intentarlo")
    }
  }, [inputs,data,stableDispatch]);
  return (
    <div className="login d-flex">
      <i className="far fa-dot-circle"></i>
      <i className="fas fa-book book1"></i>
      <i className="fas fa-pen-nib"></i>
      <i className="fas fa-book book2"></i>
      <form
        className="loginForm flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="h4 fw-bold mb-0">Inicia sesión para poder continuar</h1>
        <hr className="hr w-25" />
        <div className="input mt-2 w-100">
          <div className="text-muted">Email</div>
          <div className="input-group mb-3">
            <input
              required
              ref={register}
              name="email"
              type="email"
              className="form-control w-100"
              placeholder="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            />
          </div>
        </div>
        <div className="input mt-2 w-100">
          <div className="text-muted">Contraseña</div>
          <div className="input-group mb-3">
            <input
              required
              ref={register}
              name="ppssww"
              type="password"
              className="form-control w-100"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className="form-check mr-auto mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label " htmlFor="flexCheckChecked">
            Al iniciar sesión, estás aceptando los{" "}
            <div className="text-primary" style={{cursor: "pointer"}}>Terminos y condiciones</div>
          </label>
        </div>
        <div className="text-danger">
          {error?.graphQLErrors.map(({ message }, i) => (
            <div key={i}>{message}</div>
          ))}
          <div>{wrongPassword}</div>
        </div>
        {loading ? <Loader /> : null}{" "}
        <button type="submit" className="fw-bold mt-5 w-75 btn btn-main">
          Iniciar Sesión
        </button>
      </form>
      <div className="login-right mx-auto flex flex-column ">
        <img src={book} alt="" />
        <h6 className="text-muted">Acompañamiento en tu aprendizaje </h6>
        <h2>AXIS</h2>
        <h6>
          Aprendizaje organizado, disfrutable e
          <span className="text-main"> innovador!</span>
        </h6>
      </div>
    </div>
  );
}

export default Login;
