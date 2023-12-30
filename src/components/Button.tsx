import React from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode,
  onClick?: (...args: any[]) => void,
  classes?: string
}

const Button: React.FC<ButtonProps> = ({ children, classes, onClick}) => {
  const buttonClasses = classNames(
    "flex justify-center items-center gap-2 cursor-pointer p-2 outline-0 scale-95 hover:scale-100 text-base lg:text-lg",
    {
       [classes!] : classes
    }
  )

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
