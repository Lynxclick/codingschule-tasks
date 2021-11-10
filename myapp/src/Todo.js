import React from 'react'
import './design.css';

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
                <p>Text Content #2</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>10:00 Uhr</h2>
                <p>Text Content #3</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>Donnerstag</h2>
                <p>Text Content #4</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>Freitag</h2>
                <p>Text Content #5</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>Samstag</h2>
                <p>Text Content #6</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>Sonntag</h2>
                <p>Text Content #7</p>
                </a>
            </li>
            <li>
                <a href="#" contenteditable>
                <h2>WICHTIG</h2>
                <p>Text Content #8</p>
                </a>
            </li>
        </ul>
    )
}

export default Todo;
