import React, { useEffect } from "react";
import "./header.sass";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../redux/userDuck";
import StudentLoggedbtns from "./stndbtns"
import Teacherbtms from "./teacherbtns"

function HeaderComponent() {
  const user = useSelector((store: any) => store.user.user);
  const toggle = (el: any) => (event: any) => {
    const $el: HTMLDivElement = document.querySelector(el);
    $el.classList.toggle("open");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const getX = () => {
      dispatch(GetUser());
    };
    getX();
  }, [dispatch]);
  return (
    <div>
      <div
        className="bg-secondary collapse m-0"
        id="navbarToggleExternalContent"
      >
        <div className="text-center">
          <Link to="/mis_videos">
            <h6
              className=" h4 py-3"
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarToggleExternalContent"
              // aria-controls="navbarToggleExternalContent"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
              // onClick={toggle("#nav-icon2")}
            >
              Mis videos
            </h6>
          </Link>
          <Link to="">
            <h6
              className=" h4 py-3"
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarToggleExternalContent"
              // aria-controls="navbarToggleExternalContent"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
              // onClick={toggle("#nav-icon2")}
            >
              Home
            </h6>
          </Link>
          <h6 className=" h4 py-3">
            {/* <a
              hre="https://api.whatsapp.com/send?phone=5491123628091"
              className=""
            >
              Contáctanos
            </a> */}
          </h6>
          <Link to="">
            <h6
              className=" h4 py-3"
              //desabilitado por react build problems
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarToggleExternalContent"
              // aria-controls="navbarToggleExternalContent"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
              // onClick={toggle("#nav-icon2")}
            >
              Acerca de Nosotros
            </h6>
          </Link>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-secondary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggle("#nav-icon2")}
          >
            <div id="nav-icon2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <Link to="" className="mr-auto">
            <h1 className="text-dark fw-bold">AXIS</h1>
          </Link>
          <div className="login-register flex">
            {!user.email ? (
              // ------------------ NOT LOGGED-----------------------
              <div>
                <Link to="/login">
                  <button className="btn btn-main flex d-inline-flex">
                    <h6 className="flex mb-0 fw-bold">Iniciar sesión</h6>
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn flex btn-secondary d-inline-flex">
                    <h6 className="flex mb-0 fw-bold">Registrarse</h6>
                  </button>
                </Link>
              </div>
            ) :
              //------------------LOGGED ---------------------
              <div>
                {(user.userType === "student")
                  ? <StudentLoggedbtns/>
                  : <Teacherbtms/>
                }
              </div>

            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
