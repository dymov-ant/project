import rootReducer from "./reducers"
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

type RootReducerType = typeof rootReducer
export type GlobalState = ReturnType<RootReducerType>

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
