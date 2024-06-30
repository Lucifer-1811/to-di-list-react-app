import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store/actions';
import './TaskList.css'; // Import custom CSS file for styling

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDeleteTask = (index) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            dispatch(deleteTask(index));
        }
    };

    return (
        <ul className="task-list">
            {tasks.length === 0 ? (
                <li className="no-tasks">No tasks yet!</li>
            ) : (
                tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <span className="task-name">{task}</span>
                        <button onClick={() => handleDeleteTask(index)} className="delete-btn">Delete</button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default TaskList;
