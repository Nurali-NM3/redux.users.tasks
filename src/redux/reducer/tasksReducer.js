const initialState = {

    tasks:[]
}

export default function tasksReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_TASKS':
            return{...state, tasks: action.payload}
        case 'DELETE_TASKS' :
            return {...state,
                tasks: state.tasks.filter(todo => todo.id !== action.payload.id)
            }
        case 'EDIT_TASKS' :
            return {...state,
                tasks:state.tasks.map(todo => todo.id === action.payload.id ? action.payload : todo)}
        case 'ADD_TASKS' :
            return {...state,tasks: [...state.tasks, action.payload]}
        default:
            return state

    }
}