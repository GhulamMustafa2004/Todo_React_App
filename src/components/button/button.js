const Button = ({ content, styleClassName, onFunction }) => {
  return (
    <button className={styleClassName} onClick={onFunction}>
      {content}
    </button>
  );
};
export default Button;
