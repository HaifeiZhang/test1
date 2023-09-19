import {applyMiddleware, combineReducers, createStore,compose} from 'redux'
import TabbarReducer from '../reducers/TabbarReducer';
import CityReducer from '../reducers/CityReducer';
import CinemasReducer from '../reducers/CinemasReducer';
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

const reducer = combineReducers({
    TabbarReducer,
    CityReducer,
    CinemasReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)));
//store.dispatch
//store.subscribe
//sore.getState

export default store