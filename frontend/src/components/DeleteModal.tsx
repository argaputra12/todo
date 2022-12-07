import React from "react";
import CloseSvgComponent from "assets/svg/close";
import { Transition } from "react-transition-group";

type Props = {
    inProp: boolean;
    taskStatus: "completed" | "incomplete";
    onDelete: () => void;
    onClose: () => void;
}

const defaultStyle = {
    transition: `all 0.3s ease-in-out`,
    opacity: 0,
    display: "none",
    left: "50%",
    top: "50%",
};

const transitionStyles = {
    unmounted: { opacity: 0, display: "none" },
    entering: { opacity: 0, display: "block" },
    entered: { opacity: 1, display: "block" },
    exiting: { opacity: 0, display: "block" },
    exited: { opacity: 0, display: "none" },
};

const DeleteModal: React.FC<Props> = ({ inProp, onDelete, onClose, taskStatus}) => {

    return(
        <Transition in={inProp} timeout={300} >
            {(state) => (
                <div style={{ ...defaultStyle, ...transitionStyles[state] }} className="bg-white p-4 h-40 w-64 rounded-lg fixed z-10 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
                    <div className="flex flex-col h-full justify-between">
                        <section className="flex justify-between">
                            <div className="text-darkPurple text-sm subpixel-antialised tracking-wide font-bold whitespace-normal">
                                {taskStatus == "completed" ? "Congrats! you have completing the task." : "This task is not completed yet, delete?"}
                                {taskStatus == "completed" ?
                                    <p className="text-2xl">
                                        &#128540;
                                    </p> :
                                    <p className="text-2xl">
                                        &#128548;
                                    </p>
                                }
                            </div>

                            <CloseSvgComponent onClick={onClose}/>
                        </section>
                        <button 
                            className={`text-white text-sm tracking-wide font-bold px-4 py-2 rounded-lg ${taskStatus == "completed" ? "bg-green-600" : "bg-red-600"}`}
                            onClick={onDelete}
                        >
                            {taskStatus == "completed" ? "Delete completed task" : "Delete uncompleted task"}
                        </button>
                    </div>
                </div>
            )}
        </Transition>
    )
}

export default DeleteModal;