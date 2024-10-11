import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskItem = ({ task, index, toggleTask, deleteTask }) => {
    return (
        <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(index)} 
            />
            {task.text}
            {deleteTask && (
                <button onClick={() => deleteTask(index)}>
                    <FontAwesomeIcon icon="trash" />
                </button>
            )}
        </div>
    );
};

export default TaskItem;