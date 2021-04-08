import {createStore,combineReducers,compose,applyMiddleware} from "redux"
import thunk from "redux-thunk"

import UserReducer from "./userDuck"

const rootReducer = combineReducers({
  user:UserReducer
})

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export default function generateStore(){
  const store  = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
  return store
}
