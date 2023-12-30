import React from "react";
import classNames from "classnames";

type InputProps = {
    id : string,
    type : string,
    place ?: string,
    name : string,
    cols ?: number,
    rows ?: number
    classes?: string,
    isTextarea : boolean
}

const Input: React.FC<InputProps> = ({ id, type, place, name, classes, isTextarea, cols, rows }) => {

    const InputClasses = classNames(
        "w-full pl-3 border-0 outline-0 shadow bg-gray-200",
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
                {name}
            </label>
            {
                !isTextarea ? (
                    <input 
                        type={type} 
                        id={id} 
                        name={id} 
                        placeholder={place} 
                        className={InputClasses}
                    />
                ) : (
                    <textarea 
                        name={id} 
                        id={id} 
                        cols={cols} 
                        rows={rows}
                        className={InputClasses}
                    ></textarea>
                )
            }
            
            
        </div>
    )
}

export default Input