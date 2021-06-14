import React,{} from "react";
import "./icons.sass"
function Icons (){
  return(
    <div className="Icons">
      <a
        href="https://www.instagram.com/gustavo_mercado13/"
        className="btn btn-1 fab fa-instagram flex"
      >
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
      </a>
      <a
        href="https://github.com/gustavom12"
        className="btn btn-1 fab fa-facebook flex"
      >
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/gustavo-mercado-1836461a4/"
        className="btn btn-1 fab fa-facebook-messenger flex"
      >
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=542994107678"
        className="btn btn-1 fab fa-whatsapp flex"
      >
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
      </a>
      </div>
  )
}
export default Icons
