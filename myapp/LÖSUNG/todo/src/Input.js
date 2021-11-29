import React, {useRef, useContext} from 'react'
import styled from 'styled-components';
import {Context} from './App';

import { v4 as uuidv4 } from 'uuid';



function Input() {
    const eingabeFeld = useRef()
    const {todos, setTodos} = useContext(Context)

    function neueAufgabe() {
        console.log("Neue Aufgabe")
        console.log(eingabeFeld.current.value)
        console.log(todos)

        if (eingabeFeld.current.value !== "") {
        setTodos([{id: uuidv4(), name: eingabeFeld.current.value, done: "false"}, ...todos ])
        //const test = localStorage.getItem("todos")          !Nur zum Debuggen!

        eingabeFeld.current.value = ""
        }
    }


    function neueAufgabeKeyDown(event) {
        //console.log(event)
        if (event.keyCode === 13) {
            neueAufgabe()
        }
    }
    
    return (
        <InputContainer onKeyDown={neueAufgabeKeyDown}>
            <InputField ref={eingabeFeld} placeholder="Neue Aufgabe"/>
            
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



