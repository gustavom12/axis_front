import React, { } from "react";
import StringVoice from "../../a_mini_components/stringVoice/stringVoice";
function Pronouns() {
  return (
    <>
      <div className="cheetsheet container mt-4 mx-auto">
        <div className="row title">
          <h4 className="text-center fs-2 fw-bold" id="pronombres_personales">Pronombres personales (sujeto)</h4>
          <h4 className="col">Pronombres simples</h4>
          <h4 className="col">Ejemplos</h4>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="I" className="col"><h5 className=""> <span className="text-primary fw-bold">I</span></h5></StringVoice>
            <h5 className="col"> <span className="text-primary fw-bold">I</span> am a doctor</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> YO </h6>
            <h6 className="col text-serif2 example"> YO soy un doctor</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="you" className="col"><h5> <span className="text-primary fw-bold">you</span></h5></StringVoice>
            <h5 className="col"> <span className="text-primary fw-bold">You</span> are ill</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> tú, usted, ustedes </h6>
            <h6 className="col text-serif2 example">Tú estas enfermo/ ustedes están enfermos</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="he" className="col"><h5> <span className="text-primary fw-bold">he</span></h5></StringVoice>
            <h5 className="col"> <span className="text-primary fw-bold">he</span> is tall</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> él </h6>
            <h6 className="col text-serif2 example">él es alto</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="she" className="col"><h5> <span className="text-primary fw-bold">she</span></h5></StringVoice>
            <h5 className="col"> <span className="text-primary fw-bold">she</span> is short</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> Ella </h6>
            <h6 className="col text-serif2 example">Ella es pequeña</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="It" className="col"><h5> <span className="text-primary fw-bold">It</span></h5></StringVoice>
            <h5 className="col"> <span className="text-primary fw-bold">It</span> is a nice shirt!</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2">eso/ello</h6>
            <h6 className="col text-serif2 example">Es una buena camisa!</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="we" className="col"><h5> <span className="text-primary fw-bold">We</span></h5></StringVoice>
            <h5 className="col"> <span className="text-primary fw-bold">We</span> are bored</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> Nosotros </h6>
            <h6 className="col text-serif2 example">Nosotros estamos aburridos</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="they" className="col"><h5> <span className="text-primary fw-bold">They</span></h5></StringVoice>
            <h5 className="col"> <span className="text-primary fw-bold">They</span> are playing</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> Ellos, ellas </h6>
            <h6 className="col text-serif2 example">Ellos estás jugando</h6>
          </div>
        </div>
      </div>
      <div className="cheetsheet container mt-4 mx-auto">
        <div className="row title">
          <h4 className="text-center fs-2 fw-bold" id="pronombres_personales">Pronombres personales (objeto)</h4>
          <h4 className="col">Pronombres  </h4>
          <h4 className="col">Ejemplos</h4>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="me" className="col"><h5> <span className="text-primary fw-bold">Me</span></h5></StringVoice>
            <h5 className="col"> Can you text <span className="text-primary fw-bold">Me</span>? </h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> mi/me </h6>
            <h6 className="col text-serif2 example"> Puedes textearme? </h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="you" className="col"><h5 > <span className="text-primary fw-bold">You</span></h5></StringVoice>
            <h5 className="col"> Can i help <span className="text-primary fw-bold">you</span>? </h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> a ti, a vos, a usted, a ustedes </h6>
            <h6 className="col text-serif2 example"> Puedo ayudarte? </h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="him" className="col"><h5 > <span className="text-primary fw-bold">Him</span></h5></StringVoice>
            <h5 className="col"> Can you help <span className="text-primary fw-bold">him</span>?</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> a él </h6>
            <h6 className="col text-serif2 example"> Puedes ayudarlo? </h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="her" className="col"><h5> <span className="text-primary fw-bold">Her</span></h5></StringVoice>
            <h5 className="col"> Give it to <span className="text-primary fw-bold">her</span></h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> a ella </h6>
            <h6 className="col text-serif2 example">dáselo a ella</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="It" className="col"><h5> <span className="text-primary fw-bold">it</span></h5></StringVoice>
            <h5 className="col"> get <span className="text-primary fw-bold">it</span></h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> eso / ello </h6>
            <h6 className="col text-serif2 example">obtiene/agarra eso</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="us" className="col"><h5> <span className="text-primary fw-bold">us</span></h5></StringVoice>
            <h5 className="col"> can you see <span className="text-primary fw-bold">us</span>?</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> a nosotros </h6>
            <h6 className="col text-serif2 example"> Nos puedes ver?</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="them" className="col"><h5> <span className="text-primary fw-bold">them</span></h5></StringVoice>
            <h5 className="col"> You can help <span className="text-primary fw-bold">them</span></h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> a ellos </h6>
            <h6 className="col text-serif2 example">Tú puedes ayudarlos</h6>
          </div>
        </div>
      </div>
      <div className="cheetsheet container mt-4 mx-auto">
        <div className="row title">
          <h4 className="fw-bold fs-2">Pronombres posesivos</h4>
          <h4 className="col">Pronombres</h4>
          <h4 className="col">Ejemplos</h4>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="mine" className="col"><h5> <span className="text-primary fw-bold">Mine</span></h5></StringVoice>
            <h5 className="col"> That smartphone is <span className="text-primary fw-bold">Mine</span></h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> Mío </h6>
            <h6 className="col text-serif2 example"> Ese celular es mío </h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="yours" className="col"><h5> <span className="text-primary fw-bold">Yours</span></h5></StringVoice>
            <h5 className="col"> This is not my car, it’s <span className="text-primary fw-bold">yours</span> </h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> tuyo</h6>
            <h6 className="col text-serif2 example"> Este no es mi carro, es el tuyo </h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="his" className="col"><h5> <span className="text-primary fw-bold">his</span></h5></StringVoice>
            <h5 className="col"> <span className="text-primary fw-bold">his</span> jacket is red</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> de él </h6>
            <h6 className="col text-serif2 example"> La campera de él es roja </h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="hers" className="col"><h5> <span className="text-primary fw-bold">Hers</span></h5></StringVoice>
            <h5 className="col"> This house is <span className="text-primary fw-bold">hers</span></h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> de ella </h6>
            <h6 className="col text-serif2 example">Esta es la casa de ella</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="ours" className="col"><h5> <span className="text-primary fw-bold">Ours</span></h5></StringVoice>
            <h5 className="col"> Now, this is our <span className="text-primary fw-bold">Our</span> secret</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> nuestro </h6>
            <h6 className="col text-serif2 example">Ahora, este es nuestro secreto</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="theirs" className="col"><h5> <span className="text-primary fw-bold">Theirs</span></h5></StringVoice>
            <h5 className="col"> This classroom is <span className="text-primary fw-bold">Theirs</span></h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> suyo / de ellos </h6>
            <h6 className="col text-serif2 example"> Este salón es de ellos </h6>
          </div>
        </div>
      </div>
      <div className="cheetsheet container mt-4 mx-auto">
        <div className="row title">
          <h4 className="fw-bold fs-2">Pronombres reflexivos</h4>
          <h4 className="col">Pronombres</h4>
          <h4 className="col">Ejemplos</h4>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="myself" className="col"><h5> <span className="text-primary fw-bold">Myself</span></h5></StringVoice>
            <h5 className="col"> I’ve told <span className="text-primary fw-bold">Myself</span> that hundreds of times </h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> 	A mí mismo </h6>
            <h6 className="col text-serif2 example"> Me lo he repetido cientos de veces</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="yourself" className="col"><h5> <span className="text-primary fw-bold">Yourself</span></h5></StringVoice>
            <h5 className="col"> Take care of <span className="text-primary fw-bold">yourself</span> </h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> A ti mismo</h6>
            <h6 className="col text-serif2 example"> Cuídate </h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="himself" className="col"><h5> <span className="text-primary fw-bold">Himself</span></h5></StringVoice>
            <h5 className="col"> He sees <span className="text-primary fw-bold">Himself</span> as an important artist</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> A él mismo </h6>
            <h6 className="col text-serif2 example"> La campera de él es roja </h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="herself" className="col"><h5> <span className="text-primary fw-bold">Herself</span></h5></StringVoice>
            <h5 className="col"> She excused <span className="text-primary fw-bold">Herself</span> and went to her room</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> Ella se disculpó y se fue a su recámara </h6>
            <h6 className="col text-serif2 example">Ella se disculpó y se fue a su recámara</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="Itself" className="col"><h5> <span className="text-primary fw-bold">Itself</span></h5></StringVoice>
            <h5 className="col"> It works by <span className="text-primary fw-bold">itself</span></h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> A sí mismo </h6>
            <h6 className="col text-serif2 example">Eso funciona por sí solo</h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="ourselves" className="col"><h5> <span className="text-primary fw-bold">Ourselves</span></h5></StringVoice>
            <h5 className="col"> We can defend <span className="text-primary fw-bold">Ourselves</span></h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> A nosotros mismos </h6>
            <h6 className="col text-serif2 example"> Nosotros podemos defendernos a nosotros mismos </h6>
          </div>
        </div>
        <div className="square">
          <div className="row">
            <StringVoice text="themselves" className="col"><h5> <span className="text-primary fw-bold">Themselves</span></h5></StringVoice>
            <h5 className="col"> They honoured <span className="text-primary fw-bold">Themselves</span>in that ceremony</h5>
          </div>
          <div className="row spanish">
            <h6 className="col text-serif2"> A ellos mismos </h6>
            <h6 className="col text-serif2 example"> Ellos se homenajearon a sí mismos en esa ceremonia </h6>
          </div>
        </div>
      </div>
      <div className="px-5">
        <h2 className="fw-bold mt-5 text-center"> Pronombres indefinidos </h2>
        <h5 className="fw-bold text-center">
          Este tipo de pronombres sirven para ocupar el lugar y función del sustantivo sin referirse a un sujeto en particular, sino a una entidad. Son los siguientes:
        </h5>
        <div className="container indefinidos">
          <div className="row titles">
            <div className="col"></div>
            <div className="col">Body</div>
            <div className="col">One</div>
            <div className="col">thing</div>
            <div className="col">where</div>
            <div className="col">time</div>
            <div className="col">how</div>
          </div>
          <div className="row">
            <div className="col title">some</div>
            <div className="col">Somebody (alguien)</div>
            <div className="col">Someone (alguien)</div>
            <div className="col">Something (algo)</div>
            <div className="col">Somewhere (en algún lugar)</div>
            <div className="col">Sometime (alguna vez)</div>
            <div className="col">Somehow (de alguna forma)</div>
          </div>
          <div className="row">
            <div className="col title">Any</div>
            <div className="col">Anybody (cualquiera)</div>
            <div className="col">Anyone (cualquiera)</div>
            <div className="col">Anything (cualquier cosa)</div>
            <div className="col">Anywhere (en cualquier lugar)</div>
            <div className="col">Anytime (en cualquier tiempo)</div>
            <div className="col">Anyhow (de cualquier forma)</div>
          </div>
          <div className="row">
            <div className="col title">every</div>
            <div className="col">everybody (todos)</div>
            <div className="col">everyone (todos)</div>
            <div className="col">everything (todo)</div>
            <div className="col">everywhere (en todos lados)</div>
            <div className="col">everytime (todo el tiempo)</div>
            <div className="col">No existe </div>
          </div>
          <div className="row">
            <div className="col title">No</div>
            <div className="col">Nobody (Nadie)</div>
            <div className="col">Noone (Nada)</div>
            <div className="col">Nothing (Nada)</div>
            <div className="col">Nowhere (en ningún lugar)</div>
            <div className="col">No existe</div>
            <div className="col">No existe</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Pronouns
