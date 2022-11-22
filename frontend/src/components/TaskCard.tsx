import React from "react";

import ChecklistSvgComponent from "assets/svg/checklist";
import TrashSvgComponent from "assets/svg/trash";
import DeleteModal from "./DeleteButton";

type Props = {
    title: string,
    description: string
}

const TaskCard: React.FC<Props> = ({title, description}) => {
    return (
        <div className="flex justify-center items-center relative rounded shadow-lg p-4 mb-2 bg-white">
            <div className="flex flex-col items-start flex-1">
                <p className="subpixel-antialiased tracking-wide font-bold whitespace-normal truncate">
                    {title}
                </p>
                <p className="text-sm text-gray-500">
                    {description}
                </p>
            </div>

            <div className="flex text-darkPurple">
                <span><ChecklistSvgComponent/></span>
                <span className="w-5 h-5 ml-4 text-red-600">
                    <TrashSvgComponent/>
                </span>
            </div>

            <DeleteModal/>
        </div>
    )
}

export default TaskCard;