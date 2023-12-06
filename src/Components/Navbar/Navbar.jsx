import React from 'react';
import { BiLogoDeviantart } from 'react-icons/bi';

const Navbar = () => {
    return (
        <div
            className="flex h-[10vh] items-center justify-between bg-black px-4 
        py-3 text-white md:px-[5%]
        lg:px-[5%]
        "
        >
            {/* left sie  */}
            <div className="flex items-center gap-x-2">
                <BiLogoDeviantart size={40} />
                <span className="lg-3xl text-xl hover:text-[lightgray] md:text-2xl ">
                    Abstract
                </span>
                <span className="lg-3xl text-xl hover:text-[lightgray] md:text-2xl">
                    |
                </span>
                <span className="lg-3xl text-xl hover:text-[lightgray] md:text-2xl">
                    Help Center
                </span>
            </div>

            {/* right side  */}
            <div className="flex items-center gap-2">
                {/* Buttons for screens above 768px */}
                <button className="hidden rounded-md px-2 py-1 outline-none duration-150  hover:border hover:bg-white hover:text-black sm:block">
                    Submit a request
                </button>
                <button className="hidden rounded-lg bg-blue px-4 py-1 hover:bg-white hover:text-black sm:block">
                    Sign in
                </button>

                {/* Hamburger icon for screens below or equal to 768px */}
                <div className="flex items-center px-4 sm:hidden">
                    <span>&#9776;</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
