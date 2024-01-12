const Input = ({ oninputValue, todoValue }) => {
  return (
    <>
      <input
        style={{
          border: "none",
          borderRadius: "6px",
          width: " 60%",
          padding: "10px 0px 10px 10px",
        }}
        type="text"
        placeholder="Add Todo"
        value={todoValue}
        onChange={oninputValue}
      />
    </>
  );
};
export default Input;
