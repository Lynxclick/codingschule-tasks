import React from 'react'
import './design.css';

const todos = ["Einkaufen", "Kino"]

function Todo() {
    return (
        //<div className="todolist">
        //    Einkaufen
        //</div>
        <ul>
            <li>
                <a href="#" contenteditable>
                <h2>8:00 Uhr</h2>
                <p>Zahnarzttermin</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>09:00 Uhr</h2>
                <p>Gitarrenunterricht</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>10:00 Uhr</h2>
                <p>Einkaufen</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>Donnerstag</h2>
                <p>Team Meeting</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>Freitag</h2>
                <p>Kino</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>Samstag</h2>
                <p>Essen gehen</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>Sonntag</h2>
                <p>Wandern gehen</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>WICHTIG</h2>
                <p>In die Sauna</p>
                </a>
            </li>
        </ul>
    )
}

export default Todo;
