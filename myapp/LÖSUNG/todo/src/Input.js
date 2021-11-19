import React, {useRef, useContext} from 'react'
import styled from 'styled-components';
import {Context} from './App';





function Input() {
    const eingabeFeld = useRef()
    const value = useContext(Context)

    function neueAufgabe() {
        console.log("Neue Aufgabe")
        console.log(eingabeFeld.current.value)
        console.log(value.todos)

        if (eingabeFeld.current.value !== "")
        value.setTodos([...value.todos, {id: value.todos.length + 1, name: eingabeFeld.current.value}])
        localStorage.setItem("todos", JSON.stringify
        ([...value.todos, {id: value.todos.length + 1, name: eingabeFeld.current.value}]))
        //const test = localStorage.getItem("todos")          !Nur zum Debuggen!

        eingabeFeld.current.value = ""
    }

    function neueAufgabeKeyDown(event) {
        console.log(event)
        if (event.keyCode === 13) {
            neueAufgabe()
        }
    }
    
    return (
        <InputContainer>
            <InputField ref={eingabeFeld} onKeyDown={neueAufgabeKeyDown} placeholder="Neue Aufgabe"/>
            
            <InputButton onClick={neueAufgabe}>Hinzufügen</InputButton>
        </InputContainer>
    )
}

export default Input

const InputContainer = styled.div`
    display: flex;
    width: 300px;
    margin-bottom: 10px;
    justify-content: space-around;
`
const InputField = styled.input`
    outline: none;
`
const InputButton = styled.div`
    background-color: #ff5c5c;
    color: white;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    &:hover {
        color: #113044;
    }
`



