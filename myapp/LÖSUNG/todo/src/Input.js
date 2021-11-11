import React, {useRef} from 'react'

function Input() {
    const eingabeFeld = useRef()

    function neueAufgabe() {
        console.log("Neue Aufgabe")
        console.log(eingabeFeld.current.value)
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
