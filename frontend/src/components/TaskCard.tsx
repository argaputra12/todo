import React from "react";

import ChecklistSvgComponent from "assets/svg/checklist";
import TrashSvgComponent from "assets/svg/trash";
import DeleteModal from "./DeleteModal";
import ClockSvgComponent from "assets/svg/clock";

import { updateTodo } from "api/updateTodo";

import { useMutation, useQueryCache } from "react-query";
import { deleteTodo } from "api/deleteTodo";

type Props = {
    taskId: string;
    title: string;
    description: string;
    status: "completed" | "incomplete"
}

const TaskCard: React.FC<Props> = ({title, description, taskId, status}) => {

    const queryCache = useQueryCache();

    const [checkTodo, { isLoading }] = useMutation(
        updateTodo,
        {
            onSuccess: () => {
                queryCache.invalidateQueries("todos");
            }
        }
    );

    const [removeTodo] = useMutation(
        deleteTodo,
        {
            onSuccess: () => {
                queryCache.invalidateQueries("todos");
            }
        }
    );

    const [showDeleteModal, setShowDeleteModal] = React.useState(false);

    const removeTask  = () => {
        removeTodo(taskId);
        closeDeleteModal()
    }

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    }

    return (
        <div className={`flex justify-center items-center relative rounded shadow-lg p-4 mb-2 ${status == "incomplete" ? "bg-white text-darkPurple" : "bg-gray-300 bg-opacity-50"}`} id={taskId}>
            <div className="flex flex-col items-start flex-1">
                <p className={`subpixel-antialiased tracking-wide font-bold whitespace-normal truncate ${status == "incomplete" ? "" : "line-through"}`}>
                    {title}
                </p>
                <p className={`text-sm text-gray-500 ${status == "incomplete"? "" : "line-through"}`}>
                    {description}
                </p>
            </div>

            <div className="flex text-darkPurple">
                <span>
                    {isLoading ? (
                        <ClockSvgComponent />
                    ):(
                        <ChecklistSvgComponent onClick={() => checkTodo(taskId)} className={`w-5 h-5 ${status == "incomplete"? "text-green-600 " : "text-red-400"}`}/>
                    )}
                </span>
                <span className="w-5 h-5 ml-4 text-red-600">
                    <TrashSvgComponent onClick={() => {setShowDeleteModal(true)}}/>
                </span>
            </div>

            <DeleteModal
                inProp={showDeleteModal}
                taskStatus={status}
                onDelete={removeTask}
                onClose={closeDeleteModal}
            />
        </div>
    )
}

export default TaskCard;