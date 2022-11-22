import React from "react";
import LogoSvgComponent from "assets/svg/logo";

const Header = () => {
    return (
        <nav className="flex justify-center items-center w-full box-border shadow-xl mb-10 bg-darkPurple">
            <LogoSvgComponent height={"80px"}/>
        </nav>
    );
}   

export default Header;