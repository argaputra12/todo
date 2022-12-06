import React, { useEffect, useState } from "react";
import CloseSvgComponent from "assets/svg/close";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { useMutation, useQueryCache } from "react-query";

import { createTodo } from "api/createTodo";

import { Transition } from "react-transition-group";

type Props = {
    inProp: boolean;
    onClose: () => void;
}

type Inputs = {
    title: string;
    description: string;
    status: boolean;
};

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
    const { register, handleSubmit, errors, reset } = useForm<Inputs>();

    const onSubmit = (data:Inputs) => {
        console.log("data ??", data);
    }

    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (errors.title && errors.title.message) {
            setError(errors.title.message);
        }
        else if (errors.description && errors.description.message) {
            setError(errors.description.message);
        }
        else {
            setError('');
        }
        
    }, [errors]);   

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
                        className="fixed inset-0 bg-black z-5"
                    >
                    </div>
                    <div
                        style={{ ...formDefaultStyle, ...formTransitionStyles[state] }} 
                        className="fixed flex flex-col inset-x-0 rounded-t-lg px-4 py-6 h-64 bg-white mx-auto max-w-lg bottom-0 z-10">
                        <form 
                            className="flex flex-col"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="flex justify-center items-center bg-gray-200 px-3 py-2 rounded-lg box-border mb-2">
                                <input 
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "Title is required"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Title must be at least 3 characters"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Title must be at most 20 characters"
                                        }
                                    })}
                                    type="text" 
                                    name="title"
                                    placeholder="Title"
                                    className="text-darkPurple bg-transparent outline-none text-center w-full"
                                    />
                            </div>
                            <div className="flex justify-center items-center bg-gray-200 px-4 py-2 rounded-lg box-border mb-3">
                                <input 
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "Description is required"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Description must be at least 3 characters"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Description must be at most 20 characters"
                                        }
                                    })}
                                    type="text" 
                                    name="description"
                                    placeholder="Description"
                                    className="text-darkPurple bg-transparent outline-none text-center w-full"
                                    />
                            </div>
                            {error !== '' && <span className="text-red-500 text-xs font-semibold pl-1 tracking-wide" >{error}</span>}
                            <input type="hidden" name="status" defaultValue="false" /> 
                            <input type="submit" value="Add" className="font-bold py-2 bg-green-400 rounded-lg mt-4"/>
                        </form>

                        <span
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{ bottom: '10px', left: '50%' }}
                            onClick={onClose}
                            >
                            <CloseSvgComponent />
                        </span>
                    </div>
                </>
            )}  
        </Transition>
    )
}

export default Form;