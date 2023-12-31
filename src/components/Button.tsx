import classNames from "classnames";
import { ButtonProps } from "../assets/types"

const Button: React.FC<ButtonProps> = ({ children, classes, type, onClick}) => {
  const buttonClasses = classNames(
    "flex justify-center items-center gap-2 cursor-pointer p-2 outline-0 scale-95 hover:scale-100 text-base lg:text-lg",
    {
       [classes!] : classes
    }
  )

  return (
    <button onClick={onClick} className={buttonClasses} type={type}>
        {children}
    </button>
  );
};

export default Button;
