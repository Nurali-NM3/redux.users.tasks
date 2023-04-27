const initialState = {
    users:[]
}

export default function usersReducer(state = initialState,action){
    switch (action.type) {
        case 'GET_USERS':
            console.log(state)
            return{...state, users: action.payload}
        default:
            return state

    }
}