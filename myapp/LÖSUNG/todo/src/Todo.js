import React from 'react';
import './my.css';
import { FaTrash, FaCheckCircle } from "react-icons/fa";


function Todo({todo, todos, setTodos}) {

    function deleteTodo() {
        console.log(todo.id)

        const result = todos.filter(deleteFilter);

        function deleteFilter(element) {
            return todo.id !== element.id;
        }

       setTodos(result)
       localStorage.setItem("todos", JSON.stringify(result))
    }

    return (
        <div className="todo">
            <div className="text">{todo.name}</div>
            <div className="icon"><FaCheckCircle /></div>
            <div className="icon" onClick={deleteTodo}><FaTrash /></div>
        </div>
    )
}

export default Todo






