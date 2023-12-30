import React from "react";
import classNames from "classnames";

type InputProps = {
    id : string,
    type : string,
    place ?: string,
    name : string,
    special?: string
}

const Input: React.FC<InputProps> = ({ id, type, place, name, special }) => {

    const InputClasses = classNames(
        "w-full pl-3 border-0 outline-0 shadow bg-gray-200",
        {
            [special!]: special
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
            <input 
                type={type} 
                id={id} 
                name={id} 
                placeholder={place} 
                className={InputClasses}
            />
        </div>
    )
}

export default Input