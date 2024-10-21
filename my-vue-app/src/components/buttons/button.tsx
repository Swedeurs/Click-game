import React from "react";

interface ButtonProps {
  count: number;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ count, onClick }) => {
  return <button onClick={onClick}>count is {count}</button>;
};

export default Button;
