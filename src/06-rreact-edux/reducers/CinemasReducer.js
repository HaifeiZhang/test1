const CinemasReducer = (prevState={CinemaList:[]},
    action)=>{
      console.log(action.payload)
    let newState = {...prevState}
    switch(action.type){
        case "Change-List":
            newState.CinemaList = action.payload
            return newState
        default:
            return prevState
    }
}

export default CinemasReducer