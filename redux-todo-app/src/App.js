import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTodoActions, RemoveTodoActions } from './actions/todoActions';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);
  
  const { todos } = Todo;
  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoActions(todo))
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoActions(t))
  }
  return (
    <div className="App">
      <div className='App-header'>

        <h2>Todo List app in Redux</h2>
        <form onSubmit={hanldeSubmit}>
          <input
            placeholder='Enter a Todo'
            style={{
              width: 250,
              padding: 10,
              borderRadius: 20,
              border: 'none',
              frontSize: 20,
              borderColor: 'black'

            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type='submit'
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20
            }}
          >GO </button>
        </form>
        <ul className='allTodos'>
          {
            todos && todos.map((t) => (
              <li key={t.id} className='singleTodo'>
                <span className='todoText'> {t.todo}</span>
                <button
                  style={{
                    borderRadius: 25,
                    padding: 10,
                    border: '1px solid white',
                    color: "white",
                    backgroundColor: "orange"
                  }}

                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
