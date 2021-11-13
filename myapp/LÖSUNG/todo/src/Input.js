import React, {useRef} from 'react'

function Input({todos, setTodos}) {
    const eingabeFeld = useRef()

    function neueAufgabe() {
        console.log("Neue Aufgabe")
        console.log(eingabeFeld.current.value)
        console.log(todos)

        setTodos([...todos, {id: todos.length + 1, name: eingabeFeld.current.value}])
        localStorage.setItem("todos", JSON.stringify
        ([...todos, {id: todos.length + 1, name: eingabeFeld.current.value}]))
        //const test = localStorage.getItem("todos")          !Nur zum Debuggen!

        eingabeFeld.current.value = ""
    }
    
    return (
        <div className="inputContainer">
            <input ref={eingabeFeld} className="inputField" placeholder="Neue Aufgabe"/>
            <div className="inputButton" onClick={neueAufgabe}>Hinzufügen</div>
        </div>
    )
}

export default Input
