import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTasks,deleteTasks} from "../../redux/action/tasksAction";
import Modal from "../../Component/Modal";
import {Link} from "react-router-dom";
const HomePage = () => {
    const dispatch = useDispatch()
    const tasks= useSelector(state => state.task.tasks)
    const [edit,setEdit] =useState('')

    const handleDelete = (id) =>{
        dispatch(deleteTasks(id))
    }

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    return (
        <div>
            <Link to={'/users'}>users</Link>
                <ul>
                    {
                        tasks.map(todo =>
                        <li key={todo.id}>{todo.text}
                            <button
                                onClick={() => handleDelete(todo.id)}
                            >
                                DELETE
                            </button>
                            <button
                            onClick={() => setEdit(todo.id)}
                            >
                                edit
                            </button>
                        </li>
                        )
                    }
                </ul>
            <button
            onClick={() =>setEdit('edit')}
            >
                add
            </button>
            {
                edit &&
                <Modal id={edit} setId={setEdit}/>
            }
        </div>
    );
};

export default HomePage;