import React, { } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import DefiniteArticle from './DefiniteArticle';
import Prepositions from './prepositions';
import Pronouns from './Pronouns';
import './Unit1.sass'
const Unit1 = ({ match }: { match: any }) => {
  console.log(match.path)
  return (
    <div className="Unit1">
      <h2 className="text-center fw-bold fs-1 text-serif">Unidad 1</h2>
        <h2 className="fw-bold mt-4 text-center"> Temas de la unidad: </h2>
        <div className="themes flex flex-column mb-5">
          <Link className="theme fw-bold text-white fs-4 w-75" to="/units/1/pronouns">Pronombres</Link>
          <Link className="theme bg-primary fw-bold text-white fs-4 w-75" to="/units/1/definite_article">Artículo determinado</Link>
          <Link className="theme bg-success fw-bold text-white fs-4 w-75" to="/units/1/prepositions">Preposiciones</Link>
        </div>
      <Switch>
        <Route path={`${match.path}/pronouns`} component={Pronouns} exact={true} />
        <Route path={`${match.path}/definite_article`} component={DefiniteArticle} exact={true} />
        <Route path={`${match.path}/prepositions`} component={Prepositions} exact={true} />
      </Switch>
    </div>
  )
}
export default Unit1
