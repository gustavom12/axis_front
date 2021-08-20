import React, { } from "react";
import StringVoice from "../../a_mini_components/stringVoice/stringVoice";

function DefiniteArticle() {
  return (
    <div className="px-5">
      <h2 className="text-serif2 text-center fs-1 fw-bold"> El artículo determinado (the) </h2>
      <article className="fs-5 text-center">
        <span className="fw-bold">Los artículos definen a un nombre y siempre están situados delante del nombre.</span>
        En inglés, a diferencia del castellano, <span className="fw-bold">no tienen género ni forma plural.</span>
        En castellano decimos “el auto” o "Las casas" y en inglés es “the car” y “the houses”.
      </article>
      <h5 className="fw-bold my-3 mx-4">Ejemplos:</h5>
      <div className="examples text-left my-4">
        <StringVoice flex={false} className="mx-4" text="The boy"> <span className="fw-bold fs-5 ">The boy</span> </StringVoice>
        <StringVoice flex={false} className="mx-4" text="The boys"> <span className="fw-bold fs-5 ">The boys</span> </StringVoice>
        <StringVoice flex={false} className="mx-4" text="The girl"> <span className="fw-bold fs-5 ">The girl</span> </StringVoice>
        <StringVoice flex={false} className="mx-4" text="The girls"> <span className="fw-bold fs-5 ">The girls</span> </StringVoice>
        <StringVoice flex={false} className="mx-4" text="The tables"> <span className="fw-bold fs-5 ">The tables</span> </StringVoice>
      </div>
      <article className="fs-5 ">
        Este artículo puede ir precedido de las preposiciones <span className="fw-bold">“of” o “to”</span>.
        En inglés no hay contracción de preposición y artículo <span className="fw-bold">(“Del” = “of the” y “al” = “to the”)</span>
      </article>
      <div className="examples my-4">
        <StringVoice flex={false} className="mx-4" text="I am going to the school"> <span className="fs-5 ">I am going <span className="fw-bold">to the</span> school.</span> </StringVoice>
        <StringVoice flex={false} className="mx-4" text="The days of the week."> <span className="fs-5 ">The days <span className="fw-bold"> of the </span>  week.</span> </StringVoice>
      </div>
      <article className="fs-5">
        <span className="fw-bold">Este se ultiliza cuando sabemos de quién o de qué estamos hablando. Utilizamos “the” para indicar algo o alguien en particular</span>
      </article>
      <h5 className="fw-bold my-3 mx-4">Ejemplos:</h5>
      <StringVoice flex={false} className="mx-4" text="What is the name of the restaurant?"> <span className="fs-5 ">What is the name <span className="fw-bold">of the</span> restaurant?.</span> </StringVoice>
      <StringVoice flex={false} className="mx-4" text="Do you remember the day we went to New York?"> <span className="fs-5 ">Do you remember <span className="fw-bold">the</span> day we went to New York?</span> </StringVoice>
      <h3 className="fw-bold my-4">Cuando no se usa el artículo determinado</h3>
      <h6 className="fw-bold fs-4"> <i className="fas mx-2 fa-circle fs-6"></i> Cuando hablamos de algo en general.</h6>
      <StringVoice flex={false} className="mx-4 my-1" text="I like ice cream."> <span className="fs-5 fw-bold">I like ice cream.</span> </StringVoice>
      <StringVoice flex={false} className="mx-4 my-1" text="Math is difficult."> <span className="fs-5 fw-bold">Math is difficult.</span> </StringVoice>
      <h6 className="fs-4 mt-3"> <i className="fas mx-2 fa-circle fs-6"></i>
        <span className="fw-bold">Nunca</span> utilizaremos “the” cuando nos referimos
        a la <span className="fw-bold">televisión, comidas, los días de la semana
        , fechas, meses o años.
        </span>

      </h6>
      <StringVoice flex={false} className="mx-4 my-1" text="I do not like to watch television."> <span className="fs-5 fw-bold">I do not like to watch television.</span> </StringVoice>
      <StringVoice flex={false} className="mx-4 my-1" text="We eat breakfast at 9:00."> <span className="fs-5 fw-bold">We eat breakfast at 9:00.</span> </StringVoice>

      <h6 className="fw-bold fs-4 mt-3"> <i className="fas mx-2 fa-circle fs-6"></i>
        No se utiliza el artículo con nombres de ciudades ni nombres de lugares en general
      </h6>

    </div>
  )
}
export default DefiniteArticle
