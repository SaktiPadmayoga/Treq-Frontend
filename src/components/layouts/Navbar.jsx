import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(true);

    return (
        <div className="flex gap-5 bg-white border-b border-gray-200/50 backdrop-blur-md py-4 px-7 sticky top-0 z-50">
            <button
                className="block text-gray-700 hover:text-gray-900 transition duration-300"
                onClick={() => {
                    setOpenSideMenu(!openSideMenu);
                }}
            >
                {openSideMenu ? (
                    <HiOutlineX className="text-2xl" />
                ) : (
                    <HiOutlineMenuAlt3 className="text-2xl" />
                )}
            </button>

            <h2>Task & Schedule Tracker</h2>

            <div className="absolute top-[61px] left-0 z-30">
                <SideMenu activeMenu={activeMenu} isOpen={openSideMenu} />
            </div>
        </div>
    );
};

export default Navbar;