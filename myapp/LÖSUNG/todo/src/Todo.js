import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import TodoElement from './TodoElements'
import { Context } from './App'

function Todo() {
    const {todoId} = useParams();
    const {todos} = useContext(Context);

    const todo = todos.find(element => String(element.id) === todoId);

    if (todo) {
        return (
            <div>
                {<TodoElement todo={todo}/>}
            </div>
        )
    }



    return (
        <div>
            Element nicht gefunden!
        </div>
    )
}

export default Todo