import './explain.sass'
function Explain() {
  return (
    <section className="explain flex">
      <div className="miniSlides">
        <div className="inline-flex slide slide3 flex-column text-center miniSlide"  >
          <h4
            className="fw-bold text-serif title"
            style={{ zIndex: 1 }}
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Clases Online
          </h4>
          <div className="flex w-100"
            data-aos="fade-right"
          >
            <img src="https://i.ibb.co/cT1vXZG/Teenagers-watching-videos-on-their-laptops-Online-training-Students-are-watching-the-lesson-online-V.jpg" alt="" />
          </div>
          <p
            data-aos="fade-left"
            data-aos-delay="300"> Clases de los profesores con mejor capacitación de la zona </p>
        </div>
        <div className="inline-flex slide slide0 text-center flex-column miniSlide">
          <h4
            className="text-center fs-1 fw-bold text-serif title mb-0"
            data-aos="fade-left"
            data-aos-delay="600"
            style={{ zIndex: 1 }}
          >
            Juegos integrados
          </h4>
          <img data-aos="fade-right" data-aos-delay="350" src="https://i.ibb.co/QfWWsjR/Vector-modern-flat-education-exam-illustration-Laptop-with-lamp-idea-symbol-answer-to-test-checklist.jpg" alt="" />
          <p data-aos="fade-left"
            data-aos-delay="600">
            Quizzes disponibles para todos los alumnos para un aprendizaje más divertido,
            con un sistema de puntaje y premios, para incentivar a los alumnos.
          </p>
        </div>
      </div>
      <div className="inline-flex slide1 slide flex-column hugeSlide">
        <h4
          className="fs-1 cloud fw-bold text-serif title mb-0"
          data-aos="fade-left"
          data-aos-delay="1100"
          style={{ zIndex: 1 }}
        >
          Plataforma de tareas
        </h4>
        <img data-aos="fade-right"
          data-aos-delay="800" src="https://i.ibb.co/yYRj1CJ/Online-education-app-E-learning-concept.png" alt="" />
        <p data-aos="fade-left"
          data-aos-delay="1400">
          Desarrollado para corregír pregunta a pregunta para un mejor entendimiento de la corrección,
          también contando con un sistema de puntaje y premios para incentivar a los alumnos a entregar en tiempo
          y forma sus tareas.
        </p>
      </div>
      <div className="miniSlides">
        <div className="inline-flex slide slide2 text-center flex-column miniSlide">
          <h4
            className="text-center fs-1 fw-bold text-serif title mb-0"
            data-aos="fade-right"
            data-aos-delay="800"
            style={{zIndex:1}}
          >
            Tareas autocorregibles
          </h4>
          <img data-aos="fade-left" data-aos-delay="400" src="https://i.ibb.co/8rBqb68/Online-exam-Online-training-courses-online-book-distance-education.png" alt="" />
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            Tareas corregidas y evaluadas al instante, pregunta por pregunta,
            con sus correspondientes respuestas.
          </p>
        </div>
        <div className="inline-flex slide slide2 text-center flex-column miniSlide">
          <h4
            className="text-center fs-1 fw-bold text-serif title mb-0"
            data-aos="fade-right"
            data-aos-delay="900"
            style={{zIndex:1}}
          >
            Sistema de puntaje
          </h4>
          <img data-aos="fade-left" data-aos-delay="600" src="https://i.ibb.co/0jFggk2/star-rating-concept-vector-id1322525979-k-6-m-1322525979-s-612x612-w-0-h-LCux-CTILKXSLc6m2-UI7e-Wi-R.png" alt="" />
          <p
            data-aos="fade-right"
            data-aos-delay="1100"
          >
            Sistema de premios y puntaje para incentivar a los alumnos a entregar sus tareas a tiempo y forma,
            además de también incentivarlos a completar juegos opcionales
          </p>
        </div>
      </div>
    </section>
  )
}
export default Explain
