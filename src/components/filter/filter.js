const Filter = () => {
  return (
    <select
      style={{
        color: "#636581",
        background: "#cccddf",
        padding: "10px 20px 10px 1px",
        border: "none",
        borderRadius: "6px",
        fontSize: "15px",
      }}
    >
      <option value={1}>All</option>
      <option value={2}>Filter</option>
      <option value={3}>Complete</option>
    </select>
  );
};
export default Filter;
