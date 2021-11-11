import React from 'react'
import './my.css';
import { FaTrash, FaCheckCircle } from "react-icons/fa";

function Todo({todo}) {
    return (
        <div className="todo">
            <div className="text">{todo}</div>
            <div className="icon"><FaCheckCircle /></div>
            <div className="icon"><FaTrash /></div>
        </div>
    )
}

export default Todo






