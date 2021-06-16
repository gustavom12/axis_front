import { useQuery } from "@apollo/client";
import React, { } from "react";
import QuizQueries from "../../../../graphqueries/quiz";
// import SwiperCore, { } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import './recomendedQuizzes.sass'
import Loader from "../../../loader/loader";
function RecomendedQuizzes() {
  const { data, loading } = useQuery(QuizQueries.getQuizes, { variables: { limit: 5 } })
  console.log(data?.getQuizes[0])
  // SwiperCore.use([]);
  return (
    <section className="mt-4 w-100 notDone misNotas">
      <h4 className="fw-bold text-serif"> Quizzes for you </h4>
      {loading ? <div className="flex"> <Loader /> </div> :
        // <h1 className="fw-bold text-center mt-5"> Sección aún no disponible </h1>
        <div className="flex" style={{ maxWidth: "100%", position: "relative" }}>
          <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            slidesPerGroup={1}
            // centeredSlides={true}
            loop={true}
            style={{ width: "100%", position: "absolute", top: "0", left: "0" }}
          >
            {data?.getQuizes?.map((quiz: any, i: number) =>
              <SwiperSlide className="" key={i} style={{ maxWidth: "100%" }}>
                <div className="recomendQuizCard">
                  <div className="d-flex">
                    <img src={quiz?.imagePresentation} className="presentation" alt="" />
                    <div>
                      <h6 className="fw-bold text-serif2 m-0"> {quiz?.title} </h6>
                      <span className="text-serif2">Dificulty:</span>
                      <span className={`text-serif`}> {quiz?.dificulty} </span>
                    </div>
                  </div>
                <button className="btn"> {quiz?.pages.length} </button>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      }
    </section>
  )
}
export default RecomendedQuizzes
