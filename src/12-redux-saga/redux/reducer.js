function reducer(prevState={
    list1:[],
    list2:[]
},action={}){
    var newState = {...prevState}
    switch(action.type){
        case "Change-list1":
            newState.list1 = action.payload
            return newState
        case "Change-list2":
            newState.list2 = action.payload
            return newState
        default:
            return prevState
    }
    // return prevState
}

export default reducer