import { useState } from 'react';
import capitalizeWords from '../../utils/capitalizeWords'
import ListHeader from './ListHeader';
import './TodoList.css';
function TodoList({ todos, onToggleComplete, onDelete }) {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTodos = todos
        .filter((todo) => {
            if (filter === 'completed') return todo.completed;
            if (filter === 'not-completed') return !todo.completed;
            return true;
        })
        .filter((todo) => {
            if (searchTerm.trim() === '') return true;
            return todo.task.toLowerCase().includes(searchTerm.toLowerCase());
        })

    return (
        <div>
            <ListHeader 
                filter={filter} setFilter={setFilter} 
                searchTerm={searchTerm} setSearchTerm={setSearchTerm} 
            />
            <ul className='todo-list'>
                {filteredTodos.length === 0
                    ? (<p>No Tasks here..</p>)
                    : (filteredTodos.map((todo) => {
                        return <div key={todo.id} className='todo-item'>
                            <input
                                className='task-checkbox'
                                id={`checkbox-${todo.id}`}
                                type='checkbox'
                                checked={todo.completed}
                                disabled={todo.completed}
                                onChange={(e) => { onToggleComplete(todo.id, e.target.checked) }}
                            />
                            <span className=
                                {todo.completed
                                    ? 'completed-task'
                                    : 'not-completed-task'
                                } >
                                {String(capitalizeWords(todo.task))}
                            </span>
                            <div className='delete-button-container'>
                                <button
                                    className='delete-button'
                                    onClick={() => {
                                        onDelete(todo.id)
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    }))
                }
            </ul>
        </div>
    );
}

export default TodoList;