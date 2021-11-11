import './my.css';
import Todo from './Todo';
import Input from './Input';

var todos = [
  {id: 1, name: "einkaufen"}, 
  {id: 2, name: "React lernen"},
  {id: 3, name: "Buch lesen"},
  {id: 4, name: "Tee kochen"}
]

function App() {
  return (
    <div className="app">
      <h1 className="headline">Meine Todo App</h1>
      <Input />
      {
        todos.map((todo) => <Todo todo={todo.name} key={todo.id}/>)
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
