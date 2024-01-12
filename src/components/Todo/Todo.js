import "./Todo.css";

const Todo = ({ todos, deleteTodo, editTodo }) => {
  return todos?.map((val, index) => {
    return (
      <div className="todo-container" key={index}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ padding: "10px" }}>
            <p style={{ margin: "0px", color: " #646681" }}>{val.task}</p>
            <p style={{ margin: "0px", fontSize: "12px" }}>{val.date}</p>
          </div>
        </div>

        <div>
          <button
            onClick={() => deleteTodo(val.id)}
            style={{
              marginRight: "5px",
              border: "none",
              background: "transparent",
            }}
          >
            <img src={"/delete.png"} alt="value" style={{ height: "20px" }} />
          </button>
          <button
            onClick={() => editTodo(val)}
            style={{ border: "none", background: "transparent" }}
          >
            <img src={"/edit.png"} alt="value" style={{ height: "20px" }} />
          </button>
        </div>
      </div>
    );
  });
};

export default Todo;
