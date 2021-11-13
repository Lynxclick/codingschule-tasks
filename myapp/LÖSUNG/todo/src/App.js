import React, {useState, useEffect} from 'react';
import './my.css';
import Todo from './Todo';
import Input from './Input';

/*var todos = [
  {id: 1, name: "einkaufen"}, 
  {id: 2, name: "React lernen"},
  {id: 3, name: "Buch lesen"},
  {id: 4, name: "Tee kochen"}
]*/

function App() {
  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "todos"

  
  //const handleRemoveItem = (e) => {
  //  const name = e.target.getAttribute("name")
  //   updateList(list.filter(item => item.name !== name));
  // };

 

  useEffect(() => {
    if (localStorage.getItem("todos") === null)
      {localStorage.setItem("todos", JSON.stringify(todos))}
    else
      {setTodos(JSON.parse(localStorage.getItem("todos")))}
      
}, []);







  return (
    <div className="app">
      <h1 className="headline">Meine Todo App</h1>
      <Input todos={todos} setTodos={setTodos}/>
      {
        todos.map((todo) => <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>)
        /* 
        todos.map(
          function anzeigen(Kaugummi) {
            return <Todo todo={Kaugummi} />
          })
        */
      }
      
    </div>
    
  );
}

export default App;
