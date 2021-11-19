import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  Routes,
  Route
  } from "react-router-dom";


import App from './App';


ReactDOM.render(
  <BrowserRouter>
      <Routes> 
          <React.StrictMode>
              <Route path="todo/:todoId" element={<Todo />} />
              <Route path="/" element={<App />} /> 
          </React.StrictMode>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

