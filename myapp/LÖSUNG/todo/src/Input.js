import React, {useRef, useContext} from 'react'
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
        <div className="inputContainer">
            <input ref={eingabeFeld} className="inputField" onKeyDown={neueAufgabeKeyDown} placeholder="Neue Aufgabe"/>
            <div className="inputButton" onClick={neueAufgabe}>Hinzufügen</div>
        </div>
    )
}

export default Input
