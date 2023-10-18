import React from "react";

function CustomSwitch({ isMatchingSubsectors }) {
    
    return (
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" disabled></input>
            <div
                className={`w-9 h-5 ${isMatchingSubsectors ? "bg-green-primary" : "bg-red-primary"} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 bg- rounded-full peer
             dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
             after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
              after:h-4 after:w-4 after:transition-all dark:border-gray-600  peer-checked:bg-[#A3DA9A] `}
            ></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
    );
}

export default CustomSwitch;
