import { createStore, applyMiddleware } from "redux";
import reducers from './reducer'
import logger from "redux-logger"
let store = createStore(reducers, applyMiddleware(logger));
export default store;