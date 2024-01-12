import { useState } from "react";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import Todo from "./Components/Todo/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [todoValue, setTodoValue] = useState("");

  const getTodoValue = (event) => {
    setTodoValue(event.target.value);
  };

  const addTodo = () => {
    if (edit !== null) {
      const updatedTods = [...todos];
      updatedTods[edit] = {
        ...updatedTods[edit],
        task: todoValue,
      };
      setTodos(updatedTods);
      setEdit(null);
    } else {
      setTodos([
        ...todos,
        {
          task: todoValue,
          date: new Date().toLocaleDateString(),
          id: todos.length,
        },
      ]);
    }
    setTodoValue("");
  };

  const deleteTodo = (id) => {
    const result = todos.filter((val) => val.id !== id);
    setTodos(result);
  };

  const editTodo = (value) => {
    setEdit(value.id);
    setTodoValue(value.task);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#646681" }}>TODO LIST</h1>

      <div className="container">
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="btn-section">
            <Input oninputValue={getTodoValue} todoValue={todoValue} />
            <Button
              content={edit !== null ? "Edit" : "Add Task"}
              styleClassName={"btn"}
              onFunction={addTodo}
            />
          </div>
          <div className="todo-section">
            <Todo
              todos={todos}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              edit={edit}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
