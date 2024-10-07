import { useState } from "react";
import "./App.css"
import TodoItem from "./components/TodoItem";
import { Todo } from "./types/to_do";

function App() {

  const [todo, setTodo] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodo([...todo, newTodo]);
  }

  const toggleTodo = (id: number) => {
    const newTodo = todo.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodo(newTodo);
  };

  return (
    <div className="container">
      <h1>Tarefas a fazer</h1>
      <div className="form">
        <input
        className="input"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="add" onClick={() => addTodo(input)}>Adicionar</button>
        <ul>
          {todo.map(todo => (
            <TodoItem 
              key={todo.id}
              to_do={todo}
              toggleTodo={toggleTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
