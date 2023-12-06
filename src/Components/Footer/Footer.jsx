import React from 'react';
import { BiLogoDeviantart } from 'react-icons/bi';

const Footer = () => {
    return (
        <div
            className="relative grid h-max grid-cols-2 
        grid-rows-3 flex-row items-center  justify-center gap-x-2 bg-black px-8 
        py-8 text-left text-white md:grid"
        >
            {/* Abstarct  */}
            <div className="flex h-max flex-col gap-y-2">
                <div className="text-xl font-semibold">Abstarct</div>
                <div className="flex flex-col ">
                    <Link text="Start Trial" />
                    <Link text="Pricing" />
                    <Link text="Download" />
                </div>
            </div>

            {/* Resourecs  */}
            <div className="flex h-max flex-col gap-y-2">
                <div className="text-xl font-semibold">Resources</div>
                <div className="flex flex-col ">
                    <Link text="Blog" />
                    <Link text="Help Center" />
                    <Link text="Release Notes" />
                    <Link text="Status" />
                </div>
            </div>

            {/* Community  */}
            <div className="flex h-max flex-col gap-y-2">
                <div className="text-xl font-semibold">Community</div>
                <div className="flex flex-col ">
                    <Link text="Twitter" />
                    <Link text="Linkedin" />
                    <Link text="Facebook" />
                    <Link text="Dribble" />
                    <Link text="Podcast" />
                </div>
            </div>

            {/* Company  */}
            <div className="flex h-max flex-col gap-y-2">
                <div className="flex h-max flex-col gap-y-2 p-1">
                    <div className="text-xl font-semibold">Company</div>
                    <div className="flex flex-col ">
                        <Link text="About Us" />
                        <Link text="Carrers" />
                        <Link text="Legal" />
                    </div>
                </div>

                <div className="flex h-max flex-col gap-y-2 self-start p-1">
                    <div className="text-lg font-semibold">Contact Us</div>
                    <div className="flex flex-col ">
                        <Link text="info@abstract.com" />
                    </div>
                </div>
            </div>

            {/* Copyright  */}
            <div className="bottom-3 right-3 justify-end self-end pb-8 pl-4 md:absolute ">
                <div>
                    <BiLogoDeviantart size={50} />
                </div>
                <p className="text-sm">
                    © Copyright 2023 <br />
                    Abstract Studio Design, Inc. All rights <br />
                    reserved
                </p>
            </div>
        </div>
    );
};

function Link({ text }) {
    return (
        <a className="text-sm hover:underline" href="#">
            {text}
        </a>
    );
}

export default Footer;
