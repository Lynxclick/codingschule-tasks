import React, {useContext} from 'react'
import TodoElement from './TodoElements';
import Input from './Input';

import {Context} from './App'



function Home() {
    const {todos} = useContext(Context); // Wie komme ich darauf ?? Bezug auf Zeile 45 in App.js ?


    return (
        <div>
            
             <Input /> {/* <Input todos={todos} setTodos={setTodos}/>  <-- Das war vorher. Warum keine SetTodos mehr ? */}
        {
          todos.map((todo) => <TodoElement todo={todo} key={todo.id}/>)
          /* 
          todos.map(
            function anzeigen(Kaugummi) {
              return <Todo todo={Kaugummi} />
            })
          */
        }
         
        </div>
    )
}

export default Home
