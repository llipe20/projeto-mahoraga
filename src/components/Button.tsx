import React from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode

  onClick?: () => void; // Exemplo de propriedade de clique
  isDark?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isDark}) => {
  const buttonClasses = classNames(
    "flex justify-center items-center gap-2 cursor-pointer w-auto p-3 outline-0 scale-95 hover:scale-100 text-base lg:text-lg shadow",
    {
      "bg-black text-white": isDark
    }
  )

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
