import axios from "axios";


export  const getUsers =()=>{
    return(dispatch) =>{
        axios(`https://64363d318205915d34eec114.mockapi.io/tasks`)
            .then(({data}) =>{
                console.log(data)
                dispatch({type:'GET_TASKS',payload: data})
            })
    }
}
export const deleteUsers =(id)=>{
    return (dispatch) =>{
        axios.delete(`https://64363d318205915d34eec114.mockapi.io/tasks/${id}`)
            .then(({data}) =>{
                dispatch({type: 'DELETE_TASKS', payload:data})
            })
    }
}

export const editUsers =(value)=>{
    return (dispatch) =>{
        axios.put(`https://64363d318205915d34eec114.mockapi.io/tasks/${value.id}`, value)
            .then(({data}) =>{
                dispatch({type: 'EDIT_TASKS', payload: data})
            })
        console.log(value)
    }
}