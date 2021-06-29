import { ButtonHTMLAttributes } from "react";
import "./styles.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button className="button-component" {...rest}>
      {title}
    </button>
  );
}
