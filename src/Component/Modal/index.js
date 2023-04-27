import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editTasks} from "../../redux/action/tasksAction";
import './index.css'

const Modal =({id,setId}) =>{
    const [textState,setTextState] = useState('')
    const task = useSelector(state => state.task.tasks.find(task => task.id ===id))
    const dispatch = useDispatch()
    const handleSave =()=>{
        const value ={...task, text:textState}
        dispatch(editTasks(value))
        setId('')
    }
    return(
        <div className={'wrapper-modal'}>
            <div className={'modal-inner'}>
                <button onClick={() => setId('')}>X</button>
                <h1>Modal</h1>
                <input
                    type="text"
                    defaultValue={task?.text || textState}
                    onChange={(e) => setTextState(e.target.value)}
                />
                <button onClick={handleSave}>save</button>
            </div>
        </div>
    )
}

export default Modal