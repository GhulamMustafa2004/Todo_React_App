import "./dashboard.css";
import Button from "../button/button.js";
import Filter from "../filter/filter.js";
import Todo from "./todo/todo.js";

const Dashboard = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#646681" }}>TODO LIST</h1>
      <div className="btn-section">
        <Button content={"Add Task"} styleClassName={"btn"} />
        <Filter />
      </div>
      <div className="todo-section">
        <Todo />
      </div>
    </>
  );
};
export default Dashboard;
