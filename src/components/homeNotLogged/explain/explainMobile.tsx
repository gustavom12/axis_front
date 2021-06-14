import React, { } from "react";
import "./explain.sass"
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
function ExplainMobile() {
  SwiperCore.use([Autoplay]);

  return (
    <section className="explain flex mt-5" data-aos="fade">
      <Swiper
        spaceBetween={10}
        // slidesPerView={slides}
        // slidesPerGroup={slides}
        autoplay={{ delay: 4000 }}
        loop={true}
        observer={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          //
        }}
      >
        <SwiperSlide>
          <div className="inline-flex slide slide3 flex-column text-center mobileSlide"  >
            <h4
              className="fw-bold text-serif title"
            >
              Clases Online
            </h4>
            <img src="https://i.ibb.co/cT1vXZG/Teenagers-watching-videos-on-their-laptops-Online-training-Students-are-watching-the-lesson-online-V.jpg" alt="" />
            <p> Clases de los profesores con mejor capacitación de la zona </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-flex slide slide0 text-center flex-column mobileSlide">
            <h4
              className="text-center fs-1 fw-bold text-serif title mb-0"
            >
              Juegos integrados
            </h4>
            <img src="https://i.ibb.co/QfWWsjR/Vector-modern-flat-education-exam-illustration-Laptop-with-lamp-idea-symbol-answer-to-test-checklist.jpg" alt="" />
            <p>
              Quizzes disponibles para todos los alumnos para un aprendizaje más divertido,
              con un sistema de puntaje y premios, para incentivar a los alumnos.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-flex slide1 mobileSlide slide flex-column">
            <h4
              className="fs-1 cloud fw-bold text-serif title mb-0"
            >
              Plataforma de tareas
            </h4>
            <img src="https://i.ibb.co/yYRj1CJ/Online-education-app-E-learning-concept.png" alt="" />
            <p>
              Desarrollado para corregír pregunta a pregunta para un mejor entendimiento de la corrección,
              también contando con un sistema de puntaje y premios para incentivar a los alumnos a entregar en tiempo
              y forma sus tareas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-flex slide slide2 text-center flex-column mobileSlide">
            <h4
              className="text-center fs-1 fw-bold text-serif title mb-0"
            >
              Tareas autocorregibles
            </h4>
            <img src="https://i.ibb.co/8rBqb68/Online-exam-Online-training-courses-online-book-distance-education.png" alt="" />
            <p>
              Tareas corregidas y evaluadas al instante, pregunta por pregunta,
              con sus correspondientes respuestas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-flex slide slide2 text-center flex-column mobileSlide">
            <h4
              className="text-center fs-1 fw-bold text-serif title mb-0"
            >
              Sistema de puntaje
            </h4>
            <img src="https://i.ibb.co/0jFggk2/star-rating-concept-vector-id1322525979-k-6-m-1322525979-s-612x612-w-0-h-LCux-CTILKXSLc6m2-UI7e-Wi-R.png" alt="" />
            <p>
              Sistema de premios y puntaje para incentivar a los alumnos a entregar sus tareas a tiempo y forma,
              además de también incentivarlos a completar juegos opcionales
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default ExplainMobile
