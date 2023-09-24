import {createStore,applyMiddleware} from 'redux'
import createSagaMidlleWare from 'redux-saga'
import reducer from './reducer'
import watchSaga from './saga'

const SagaMidlleWare = createSagaMidlleWare()
const store = createStore(reducer,applyMiddleware(SagaMidlleWare))

SagaMidlleWare.run(watchSaga)
export default store