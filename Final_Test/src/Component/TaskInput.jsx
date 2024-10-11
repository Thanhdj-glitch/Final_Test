import React from 'react';

const TaskInput = ({ task, setTask, addTask }) => {
    return (
        <div className="input-container">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={() => addTask(task)}>Add</button>
        </div>
    );
};

export default TaskInput;