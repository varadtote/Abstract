import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';

const Search = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div className="flex h-[30vh] flex-col items-center justify-center gap-y-3 bg-paleBlue md:h-[40vh] lg:h-[50vh]">
            <div className="text-3xl md:text-4xl lg:text-5xl">
                How can we Help?
            </div>
            <div
                onBlur={() => setClicked(!clicked)}
                onClick={() => setClicked(!clicked)}
                className={`flex w-[80%] items-center justify-between rounded-md border bg-white px-4 py-2 shadow-lg ${
                    clicked ? 'border border-blue' : 'border'
                }`}
            >
                <input
                    placeholder="Search"
                    type="text"
                    className="flex w-10/12 items-center justify-between focus:outline-none"
                />
                <GoArrowRight
                    size={20}
                    className="cursor-pointer hover:text-blue"
                />
            </div>
        </div>
    );
};

export default Search;
