import React, { useEffect, useState } from "react";
import "../login/login.sass";
import Loader from "../loader/loader";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import book from "../login/open-book.svg";
import UserQueries from "../../graphqueries/users";
import { encrypt } from "../../customhooks/encrypt";
import CoursesQueries from "../../graphqueries/courses";
import { useDispatch } from "react-redux";
import { GetUser } from "../../redux/userDuck";

type Inputs = {
  email: string;
  ppssww: string;
  curso: string;
  profesor: string;
  fullname: string;
  key: string;
};

function Register() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const [registerUser, { error, loading }] = useMutation(
    UserQueries.REGISTER_STUDENT
  );
  const [RegisterTeacher] = useMutation(UserQueries.REGISTER_TEACHER);
  const { data } = useQuery(CoursesQueries.GET_COURSES);
  const [registerTeacher, setRegisterTeacher] = useState(false);
  const [teacherError, setTeacherError] = useState("");
  const [wrongKEY,setWrongKEY] = useState("");
  useEffect(() => {
    document.querySelector("nav")?.classList.add("d-none");
    return () => {
      document.querySelector("nav")?.classList.remove("d-none");
    };
  }, []);

  useEffect(() => {
  }, [data]);
  const onSubmit = (input: Inputs) => {
    const encryptedPass = encrypt(input.ppssww);
    if (registerTeacher) {
      if(input.key !== "axis2994107678"){
        setWrongKEY("Teacher key is incorrect")
        setTimeout(() => {setWrongKEY("")},4000)
        return;
      }
      const ppssww = encrypt(input.ppssww)
      RegisterTeacher({variables:{
        fullname: input.fullname,
        cursos: [],
        email: input.email,
        ppssww
      }})
        .then((res:any) =>{
          if (res) {
            //Si el usuario es registrado correctamente, se almacenan su datos en el localStorage
            const user = { email: input.email, ppssww: encryptedPass };
            localStorage.setItem("_us", JSON.stringify(user));
            const getX = () => {
              dispatch(GetUser());
            };
            getX();
            document.location.pathname = "/home";
          }
        })
        .catch((err)=>{
          setTeacherError(err.graphQLErrors[0].message)
        })
      return;
    }
    registerUser({
      variables: {
        email: input.email,
        ppssww: encryptedPass,
        curso: input.curso,
        profesor: input.profesor,
        fullname: input.fullname,
      },
    })
      .then((res) => {
        if (res) {
          //Si el usuario es registrado correctamente, se almacenan su datos en el localStorage
          const user = { email: input.email, ppssww: encryptedPass };
          localStorage.setItem("_us", JSON.stringify(user));
          const getX = () => {
            dispatch(GetUser());
          };
          getX();
          document.location.pathname = "/home";
        }
      })
      .catch((err) => {//this is only to skip the crash of app when error occurs
      });
  };
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
        <h1 className="h4 fw-bold mb-0">Regístrate para poder continuar</h1>
        <hr className="hr w-25" />
        <div className="input w-100 mt-2">
          <div className="text-muted">Nombre Completo</div>
          <div className="input-group mb-3">
            <input
              name="fullname"
              ref={register({
                required: {
                  value: true,
                  message: "Debes ingresar tu nombre",
                },
                minLength: {
                  value: 9,
                  message: "Ingresa un nombre válido",
                },
                pattern: /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/,
              })}
              required
              type="text"
              className="form-control w-100 "
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Nombre Completo"
            />
          </div>
          <div className="text-danger">{errors.fullname?.message}</div>
        </div>
        <div className="input mt-2 w-100">
          <div className="text-muted">Email</div>
          <div className="input-group mb-3">
            <input
              required
              ref={register({
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/,
              })}
              name="email"
              type="email"
              className="form-control w-100"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            />
          </div>
          <div className="text-danger">{errors.email?.message}</div>
        </div>
        <div className="input mt-2 w-100">
          <div className="text-muted">Contraseña</div>
          <div className="input-group mb-3">
            <input
              required
              ref={register({
                required: {
                  value: true,
                  message: "Contraseña es requerida",
                },
                minLength: {
                  value: 9,
                  message: "La contraseña debe de tener al menos 9 carácteres",
                },
              })}
              name="ppssww"
              type="password"
              className="form-control w-100"
              placeholder="Contraseña"
            />
          </div>
          <div className="text-danger">{errors.ppssww?.message}</div>
        </div>
        {registerTeacher ? (
          <div className="input-group mb-3">
            <input
              required
              ref={register({
                required: {
                  value: true,
                  message: "Teacher KEY es requerido",
                },
              })}
              name="key"
              type="password"
              className="form-control w-100"
              placeholder="Teacher KEY (consultar a la directora)"
            />
          </div>
        ) : (
          <div className="input mt-2 w-100">
            <div className="text-muted">Curso</div>
            <div className="input-group mb-3">
              <select
                className="form-select"
                aria-label="Default select example"
                ref={register({
                  required: {
                    value: true,
                    message: "Debes seleccionar un curso",
                  },
                })}
                name="curso"
              >
                <option selected>Selecciona tu curso</option>
                {data?.getCourses?.map((course: any, i: any) => (
                  <option key={i} value={course._id}>
                    {course.name}({course.Teachers[0]?.fullname.slice(0, 7)})
                  </option>
                ))}
              </select>
              <div className="text-danger"> {errors.curso?.message} </div>
            </div>
          </div>
        )}

        <div className="form-check mr-auto">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Al iniciar sesión, estás aceptando los{" "}
            <div className="text-primary">Terminos y condiciones</div>
          </label>
        </div>
        <div className="text-danger text-center">
          {error?.graphQLErrors.map(({ message }, i) => (
            <div key={i}>{message}</div>
          ))}
          {wrongKEY}
          {teacherError}
          {loading ? <Loader /> : null}
        </div>
        <button type="submit" className="fw-bold mt-4 w-75 btn btn-main">
          Iniciar Sesión
        </button>
        <div
          style={{ height: 0, cursor: 'pointer' }}
          className="text-mini p-absolute mt-3 h-0 text-primary"
          onClick={() => {
            registerTeacher
              ? setRegisterTeacher(false)
              : setRegisterTeacher(true);
          }}
        >
          {!registerTeacher
            ? "Registrarte como profesor"
            : "Registrate como alumno"}
        </div>
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

export default Register;
