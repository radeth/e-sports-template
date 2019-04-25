const cordsRecucer = (state=[],action)=>{
    switch(action.type){
        case "NEW_CORDS":
        return state = [
            ...state,
            action.payload
            
        ]
        case"EDIT_CORDS":
        const updatedCords = state.map(element=>{
            if(action.payload.id===element.id){
                return{
                    ...action.payload
                }
            }else return element
        })
        return state =[
            ...updatedCords
        ]
    }return state

}

export default cordsRecucer