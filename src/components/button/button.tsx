import { ReactElement } from "react";

interface ButtonProps {
  title: string | ReactElement;
  onClick?: () => void;
  className?: string;
}
const Button = (props: ButtonProps) => {
  return (
    <div
      onClick={props.onClick}
      className={props.className}
    >
      {props.title}
    </div>
  );
};

export default Button;