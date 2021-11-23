import React, {useState, useEffect} from 'react';
import './my.css';
import {createContext} from 'react';
import styled from "styled-components";
import Home from './Home';
import Todo from './Todo';

import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";


  import { Link } from 'react-router-dom';
  

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
  //const LOCAL_STORAGE_KEY = "todos"
 

  
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
  
    <BrowserRouter>
              <Context.Provider value={{todos, setTodos}}>
                  <AppContainer>
                        <Headline>Meine Todo App</Headline>
                          <Link to="todo/:todoId">Todo-Name</Link>
                            <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="todo/:todoId" element={todos.length > 0 ? <Todo /> : null} />
                            </Routes>    
                  </AppContainer>
              </Context.Provider>
  </BrowserRouter>
  
    
    
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