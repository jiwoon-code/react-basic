import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }

    setList((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  return (
    <div>
      <h1>My To Dos({list.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {list.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
