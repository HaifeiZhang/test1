import {applyMiddleware, combineReducers, createStore} from 'redux'
import TabbarReducer from '../reducers/TabbarReducer';
import CityReducer from '../reducers/CityReducer';
import CinemasReducer from '../reducers/CinemasReducer';
import reduxThunk from 'redux-thunk'

const reducer = combineReducers({
    TabbarReducer,
    CityReducer,
    CinemasReducer
})

const store = createStore(reducer,applyMiddleware(reduxThunk));
//store.dispatch
//store.subscribe
//sore.getState

export default store