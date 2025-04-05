import  "./Button.css";
const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? "outline" : "primary_btn"}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;