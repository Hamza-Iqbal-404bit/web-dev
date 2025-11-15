import { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAdd }) {
    
    const [task, setTask] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTask = task.trim();

        if (trimmedTask === '') {
            alert('Task cannot be empty');
            return;
        }
        if(!isNaN(trimmedTask)) {
            alert('Task cannot be a number only');
            setTask('');
            return;
        }
        onAdd(trimmedTask);
        setTask('');
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className='task-input' 
                    type='text' 
                    placeholder='Add new task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <div className='button-container'>
                    <button type='submit'>Add Task</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;