import "./todo.css";

const Todo = () => {
  const todoArray = [
    {
      item: "Create a new project",
      date: "5:23 AM, 01/06/2022",
    },
    {
      item: "Learn react",
      date: "5:22 AM, 01/06/2022",
    },
    {
      item: "Create a Todo app",
      date: "5:21 AM, 01/06/2022",
    },
  ];

  const deleteBtn = "iconDelete";
  const editBtn = "iconEdit";
  const iconDelete = "/delete.png";
  const iconEdit = "/edit.png";

  return todoArray.map((val, index) => {
    return (
      <div className="todo-container" key={index}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input type="checkbox" style={{ marginBottom: "15px" }} />
          <div style={{ padding: "10px" }}>
            <p style={{ margin: "0px", color: " #646681" }}>{val.item}</p>
            <p style={{ margin: "0px", fontSize: "12px" }}>{val.date}</p>
          </div>
        </div>

        <div>
          <button style={{ marginRight: "5px" }}>
            {deleteBtn === "iconDelete" ? (
              <img src={iconDelete} alt="value" style={{ height: "20px" }} />
            ) : (
              deleteBtn
            )}
          </button>
          <button>
            {editBtn === "iconEdit" ? (
              <img src={iconEdit} alt="value" style={{ height: "20px" }} />
            ) : (
              editBtn
            )}
          </button>
        </div>
      </div>
    );
  });
};

export default Todo;
