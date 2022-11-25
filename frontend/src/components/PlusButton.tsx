import React from "react";

import PlusSvgComponent from "assets/svg/plus";

type Props = {
    onClick: () => void;

}

const PlusButton: React.FC<Props> = ({ onClick }) => {
    return (
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', bottom: '4%' }} onClick={onClick}>
            <button className="bg-green-400 rounded-full p-4 shadow-lg">
                <PlusSvgComponent className="w-10 h-10 text-white"/>
            </button>
        </div>
    );
};

export default PlusButton;