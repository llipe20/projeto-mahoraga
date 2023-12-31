import classNames from "classnames"
import { InputProps } from "../assets/types"

const Input: React.FC<InputProps> = ({ id, type, label, place, name, classes, isTextarea, cols, rows, value }) => {

    const InputClasses = classNames(
        "pl-3 border-0 outline-0 shadow bg-gray-200",
        {
            [classes!]: classes
        }
      )

    return (
        <div className="flex flex-col gap-2 w-full h-auto text-base lg:text-lg text-black">
            <label 
                htmlFor={id}
                className="font-bold"
            >
                {label}
            </label>
            {
                !isTextarea ? (
                    <input 
                        type={type} 
                        id={id} 
                        name={name} 
                        placeholder={place} 
                        className={InputClasses}
                        value={value as string}
                    />
                ) : (
                    <textarea 
                        name={name} 
                        id={id} 
                        cols={cols} 
                        rows={rows}
                        className={InputClasses}
                        value={value as string}
                    ></textarea>
                )
            }
        </div>
    )
}

export default Input