import React, { useState } from 'react';
import TaskInput from './TaskInput';
import AllTasks from './AllTasks';
import ActiveTasks from './ActiveTasks';
import CompletedTasks from './CompletedTasks';

const Header = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [activeTab, setActiveTab] = useState('all');

    const addTask = (newTask) => {
        if (newTask) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setTask('');
        }
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const deleteAllCompleted = () => {
        const newTasks = tasks.filter(t => !t.completed);
        setTasks(newTasks);
    };

    return (
        <div className="header">
            <h1>#todo</h1>
            <div className="tabs">
                <button onClick={() => setActiveTab('all')}>All</button>
                <button onClick={() => setActiveTab('active')}>Active</button>
                <button onClick={() => setActiveTab('completed')}>Completed</button>
            </div>
            <TaskInput task={task} setTask={setTask} addTask={addTask} />
            {activeTab === 'all' && <AllTasks tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />}
            {activeTab === 'active' && <ActiveTasks tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />}
            {activeTab === 'completed' && <CompletedTasks tasks={tasks} deleteTask={deleteTask} deleteAllCompleted={deleteAllCompleted} />}
            {tasks.length === 0 && <p>No tasks available</p>}
        </div>
    );
};

export default Header;