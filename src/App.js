import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'; // Import custom CSS file for styling

const App = () => {
    return (
        <div className="app-container">
            <h1 className="app-title">To-Do List</h1>
            <div className="app-content">
                <TaskInput />
                <TaskList />
            </div>
        </div>
    );
};

export default App;
