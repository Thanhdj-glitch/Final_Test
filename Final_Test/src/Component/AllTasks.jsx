import React from 'react';
import TaskItem from './TaskItem';

const AllTasks = ({ tasks, toggleTask, deleteTask }) => {
    return (
        <div className="task-list">
            {tasks.map((t, index) => (
                <TaskItem key={index} task={t} index={index} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </div>
    );
};

export default AllTasks;