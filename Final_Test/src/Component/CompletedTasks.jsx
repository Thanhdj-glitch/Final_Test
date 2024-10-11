import React from 'react';
import TaskItem from './TaskItem';

const CompletedTasks = ({ tasks, deleteTask, deleteAllCompleted }) => {
    return (
        <div className="task-list">
            {tasks.filter(t => t.completed).map((t, index) => (
                <TaskItem key={index} task={t} index={index} deleteTask={deleteTask} />
            ))}
            {tasks.some(t => t.completed) && (
                <button onClick={deleteAllCompleted}>Delete All Completed</button>
            )}
        </div>
    );
};

export default CompletedTasks;