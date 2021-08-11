import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import config from "./config";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
//-------------------Components--------------------------
import "./index.sass";
import App from "./components/homeNotLogged/App";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Register from "./components/register/register";
import HomeLogged from "./components/homeLogged/homeLogged";
import CreateHomeworkPage from "./components/CreateHomeworkPage/createHomework";
import DoHomework from "./components/doHomework/DoHomework";
import CorrectHomework from "./components/correctHomework/correctHomework";
import CorrectedHomework from "./components/viewCorrectedHomework/CorrectedHomework";
import CreateQuiz from "./components/createQuiz/CreateQuiz";
import ChooseQuiz from "./components/chooseQuiz/chooseQuiz";
import DoQuiz from "./components/doQuiz/DoQuiz";
import Units from "./components/Units/Units";
const url:any = config.url;

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  uri: url,
});
//Redux
const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Header></Header>
          <Switch>
            <Route path="/units" component={Units} />
            <Route path="/createhw" component={CreateHomeworkPage}/>
            <Route path="/hw" component={ DoHomework } />
            <Route path="/chw" component={ CorrectHomework } />
            <Route path="/corrected" component={ CorrectedHomework } />
            <Route path="/quiz" component={ DoQuiz }/>
            <Route path="/quizes" exact component={ ChooseQuiz }/>
            <Route path="/createquiz" exact component={ CreateQuiz }/>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/home" component={HomeLogged} />
            <Route path="/" exact component={App} />
          </Switch>
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
