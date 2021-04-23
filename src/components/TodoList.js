import React from 'react'

//import Components
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        text={todo.text}
                        todo={todo} 
                        id={todo.id} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
