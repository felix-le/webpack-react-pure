import React, { useState, useEffect } from 'react';
import axios from 'axios';

// assets
import LogoIcon from './assets/images/logo.png';

// components
import Button from './components/Button';

const App = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    async function fetchTodos() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setTodos(data);
    }
    fetchTodos();
  }, []);

  return (
    <>
      <h1>test SCSS</h1>
      <h3> test static file</h3>
      <img src={LogoIcon} alt="logo" width="50px" />
      <h3>test axios fetch data todo</h3>
      {todos && <>{todos.title}</>}
      <br />

      <Button text="test props & eslint" />
    </>
  );
};
