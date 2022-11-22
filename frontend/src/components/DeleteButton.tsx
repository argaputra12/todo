import CloseSvgComponent from "assets/svg/close";
import React from "react";

const DeleteModal = () => {
    return(
        <div style={{ left: '50%', top: '50%' }} className="bg-white p-4 h-40 w-64 rounded-lg fixed z-10 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
            <div className="flex flex-col h-full justify-between">
                <section className="flex justify-between">
                    <p className="text-darkPurple text-sm subpixel-antialised tracking-wide font-bold whitespace-normal">
                        {'This task is not completed, delete?'}
                        <p className="text-2xl">
                            &#128540;
                        </p>
                    </p>

                    <CloseSvgComponent/>
                </section>
                <button className="text-white text-sm tracking-wide font-bold px-4 py-2 rounded-lg bg-red-600">
                    {'Delete'}
                </button>
            </div>
        </div>
    )
}

export default DeleteModal;