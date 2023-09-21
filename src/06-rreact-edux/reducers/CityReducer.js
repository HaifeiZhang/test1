const CityReducer = (prevState={CityName:"Beijing"},
    action)=>{
    let newState = {...prevState}
    switch(action.type){
        case "Change-City":
            newState.CityName = action.CityName
            return newState
        default:
            return prevState
    }
}

export default CityReducer