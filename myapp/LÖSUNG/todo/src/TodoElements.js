import React, {useContext} from 'react';
//import './my.css';
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import styled from 'styled-components';
import {Context} from './App';
import {Link} from 'react-router-dom';




function TodoElement({todo}) {   //  Es wurden öfter "todos" und "setTodos" entfernt. Wieso ? A: Weil die im Context stehen als "Value"
    const {todos, setTodos} = useContext(Context);
    


    function deleteTodo() {
       
        const result = todos.filter(deleteFilter);

        function deleteFilter(element) {
            return !(todo.id === element.id);
        }

       setTodos(result)
       //localStorage.setItem("todos", JSON.stringify(result))
    }

    function todoDone() {
        console.log(todo)
        todo.done = !todo.done
        setTodos([...todos])
    }

    /* if(!todo) {
        todo = todos.find(element => String(element.id) === todoId);
    } */

    return (
        <TodoContainer>
           
            <TodoText>
                <StyledLink erledigt={todo.done ? "true" : undefined} to={"/todo/"+ todo.id} >{todo.name}</StyledLink>
            </TodoText>
            
         
            <TodoIcon erledigt={todo.done ? "true" : undefined} onClick={todoDone}><FaCheckCircle /></TodoIcon>
            <TodoIcon onClick={deleteTodo}><FaTrash /></TodoIcon>
        </TodoContainer>
    )
}

export default TodoElement

const TodoContainer = styled.div`
    border-radius: 5px;
    width: 300px;
    padding: 5px 10px;
    box-shadow: #ff5c5c 0px 4px 8px -2px, #ff5c5c 0px 0px 0px 1px;
    background-color: #113044;
    margin-bottom: 10px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TodoText = styled.div`
    flex-grow: 1;
`

const TodoIcon = styled.div`
    margin: 1px 2px;
`
const StyledLink = styled(Link)`
    &:link {
        color: white;
        text-decoration: none; 
    }
    &:visited {
        color: white;
        text-decoration: none; 
    }
`


