import React from "react";
import CloseSvgComponent from "assets/svg/close";

import { Transition } from "react-transition-group";

type Props = {
    inProp: boolean;
    onClose: () => void;
}

const DURATION = 240;

const formDefaultStyle = {
    transition: `bottom ${DURATION}ms ease-in-out, opacity ${DURATION * 2}ms ease-in-out`,
    opacity: 0,
    bottom: "-240px",
}

const formTransitionStyles = {
    unmounted: { bottom: '-240px', opacity: 0 },
    entering: { bottom: '-240px', opacity: 1 },
    entered: { bottom: '0', opacity: 1},
    exiting: { bottom: '-240px', opacity: 1 },
    exited: { bottom: '-240px', opacity: 0 },
};

const overlayDefaultStyle = {
    transition: `bottom ${DURATION}ms ease-in-out, opacity ${DURATION * 2}ms ease-in-out`,
    opacity: 0,
    display: 'none',
}

const overlayTransitionStyles = {
    unmounted: { bottom: '-180px', opacity: 0},
    entering: { display: 'block', opacity: .85 },
    entered: { display: 'block', opacity: .85 },
    exiting: { bottom: '-180px', opacity: 0 },
    exited: { bottom: '-180px', opacity: 0},
}

const Form: React.FC<Props> = ({inProp, onClose}) => {

    return (
        <Transition in={inProp} timeout={DURATION} mountOnEnter unmountOnExit>
            {(state) => (
                <>
                    <div
                        onClick={onClose}
                        style={{ 
                            ...overlayDefaultStyle,
                            ...overlayTransitionStyles[state]
                        }}
                        className="fixed inset-0 bg-black z-10"
                    >
                        <div
                            style={{ ...formDefaultStyle, ...formTransitionStyles[state] }} 
                            className="fixed flex flex-col inset-x-0 rounded-t-lg px-4 py-6 h-56 bg-white mx-auto max-w-lg bottom-0 z-10">
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
                    </div>
                </>
            )}  
        </Transition>
    )
}

export default Form;