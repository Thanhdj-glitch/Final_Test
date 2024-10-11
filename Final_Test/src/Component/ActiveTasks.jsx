import React from 'react';
import TaskItem from './TaskItem';

const ActiveTasks = ({ tasks, toggleTask, deleteTask }) => {
    return (
        <div className="task-list">
            {tasks.filter(t => !t.completed).map((t, index) => (
                <TaskItem key={index} task={t} index={index} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </div>
    );
};

export default ActiveTasks;