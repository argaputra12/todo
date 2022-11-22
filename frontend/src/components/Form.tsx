import React from "react";

import CloseSvgComponent from "assets/svg/close";

const Form: React.FC = () => {

    return (
        <div className="fixed flex flex-col z-10 inset-x-0 rounded-t-lg px-4 py-6 h-56 bg-white mx-auto max-w-lg bottom-0">
            <form className="flex flex-col">
                <div className="flex justify-center items-center bg-gray-200 px-3 py-2 rounded-lg box-border mb-2">
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Title"
                        className="text-darkPurple bg-transparent outline-none text-center w-full"
                    />
                </div>
                <div className="flex justify-center items-center bg-gray-200 px-4 py-2 rounded-lg box-border mb-3">
                    <input 
                        type="text" 
                        name="description"
                        placeholder="Description"
                        className="text-darkPurple bg-transparent outline-none text-center w-full"
                    />
                </div>
                <input type="hidden" name="status" defaultValue="false" /> 
                <input type="submit" value="Add" className="font-bold py-2 bg-green-400 rounded-lg"/>
            </form>

            <span
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ bottom: '10px', left: '50%' }}
            >
                <CloseSvgComponent />
            </span>
        </div>
    )
}

export default Form;