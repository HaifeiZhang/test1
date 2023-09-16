import {createStore} from 'redux'

const reducer = (prevState={show:true},action)=>{
    let newState = {...prevState}
    switch(action.type){
        case "hidden-tabbar":
            newState.show = false
            return newState
        case "show-tabbar":
            newState.show=true
            return newState
        default:
            return prevState
    }
}

const store = createStore(reducer);
//store.dispatch
//store.subscribe
//sore.getState

export default store