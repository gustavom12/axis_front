import React, { } from "react";
import StringVoice from "../../a_mini_components/stringVoice/stringVoice";

function DefiniteArticle() {
  return (
    <div>
      <h2 className="text-serif2 text-center fs-1 fw-bold"> El artículo determinado (the) </h2>
      <article className="text-center">
        <span className="fw-bold">Los artículos definen a un nombre y siempre están situados delante del nombre.</span>
        En inglés, a diferencia del castellano, <span className="fw-bold">no tienen género ni forma plural.</span>
        En castellano decimos “el coche” o "Las casas" y en inglés es “the car” y “the houses”.
      </article>
      <h6>Ejemplos:</h6>
      <StringVoice text="The ">  </StringVoice>
    </div>
  )
}
export default DefiniteArticle
