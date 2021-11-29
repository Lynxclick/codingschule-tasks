import React, {useState, useEffect, createContext} from 'react';
import './my.css';
import styled from "styled-components";
import Home from './Home';
import Todo from './Todo';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";

  import { FaHome } from "react-icons/fa"


 // import { Link } from 'react-router-dom';
  

// <Link to="todo/:todoId">Todo-Name</Link>


export const Context = createContext();

/*var todos = [
  {id: 1, name: "einkaufen"}, 
  {id: 2, name: "React lernen"},
  {id: 3, name: "Buch lesen"},
  {id: 4, name: "Tee kochen"}
]*/

function App() {
  const [todos, setTodos] = useState([]);
  const [todoCount, setTodoCount] = useState(0)
  //const LOCAL_STORAGE_KEY = "todos"
 

  
  //const handleRemoveItem = (e) => {
  //  const name = e.target.getAttribute("name")
  //   updateList(list.filter(item => item.name !== name));
  // };


 useEffect(() => {
   const storage = localStorage.getItem("todos")

   if (storage) {
     setTodos(JSON.parse(localStorage.getItem("todos")))
   }
 }, [])

 useEffect(() => {
   setTodoCount(todos.length)
   localStorage.setItem("todos", JSON.stringify(todos))
 }, [todos])


/*
  useEffect(() => {
    if (localStorage.getItem("todos") === null)
      {localStorage.setItem("todos", JSON.stringify(todos))}
    else
      {setTodos(JSON.parse(localStorage.getItem("todos")))}
      
}, []);
*/






  return (
  
    <Context.Provider value={{todos, setTodos}}>
        <BrowserRouter>
              
                  <AppContainer>
                        <Headline>Meine Todo App</Headline>
                        <TodoCount>Offene Aufgaben: {todoCount}</TodoCount>
                          
                            <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="todo/:todoId" element={<Todo />} />
                              {/* todos.length > 0 ? <Todo /> : null */}
                            </Routes>  
                            <Footer to="/"><FaHome /></Footer>  
                  </AppContainer>
              </BrowserRouter>
  </Context.Provider>
  
    
    
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  width: 50vw;
  margin: auto;
`

const Headline = styled.h1`
  color: #ff5c5c;
`

const TodoCount = styled.div`
  margin-bottom: 10px;
`

const Footer = styled(Link)`
margin: 5px;

&:link {
  color: #ff5c5c;
  /*text-decoration: none; */
}

&:visited {
  color: #ff5c5c;
  /*text-decoration: none; */
}

&:hover {
  color: black;
}

`