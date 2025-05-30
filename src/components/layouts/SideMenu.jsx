import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { SideMenuData } from '../../utils/data';
import { useState } from 'react';

const SideMenu = ({ activeMenu, isOpen }) => {
    const { user, clearUser } = useContext(UserContext);
    const [sideMenuData, setSideMenuData] = useState([]);
    const navigate = useNavigate();

    const handleClick = (route) => {
        if (route === 'logout') {
            handleLogout();
            return;
        }
        navigate(route);
    };

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate('/');
    };

    useEffect(() => {
        if (!user) {
            clearUser();
            navigate('/');
        } else {
            setSideMenuData(user ? SideMenuData : []);
        }
        return () => {};
    }, [user, clearUser, navigate]);

    // Separate logout item from other menu items
    const logoutItem = SideMenuData.find(item => item.path === '/logout');
    const menuItems = SideMenuData.filter(item => item.path !== '/logout');

    return (
        <div
            className={`h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 sticky top-[61px] z-20 transition-all duration-300 ${
                isOpen ? 'w-64' : 'w-16'
            }`}
        >
            <div className="flex flex-col h-full justify-between">
                {/* Menu Items */}
                <div className="mt-8">
                    {menuItems.map((item, index) => (
                        <button
                            key={`menu_${index}`}
                            className={`w-full flex items-center gap-4 py-3 px-4 cursor-pointer transition-colors duration-200
                                ${
                                    activeMenu === item.title
                                        ? 'text-white bg-gradient-to-r from-cyan-900/90 to-cyan-900/20 border-l-4 border-cyan-600'
                                        : 'hover:bg-gray-100'
                                }`}
                            onClick={() => handleClick(item.path)}
                            title={isOpen ? '' : item.title}
                        >
                            <item.icon className="text-xl flex-shrink-0" />
                            {isOpen && <span className="truncate">{item.title}</span>}
                        </button>
                    ))}
                </div>

                {/* Profile and Logout */}
                <div className="flex flex-col items-center justify-center pb-5">
                    {isOpen && (
                        <>
                            <div className='flex'>
                                <div className="relative mb-4 mr-4">
                                    <img
                                        src={user?.profileImageUrl || null}
                                        alt="Profile Image"
                                        className="w-8 h-8 rounded-full mx-auto mb-2"
                                    />
                                </div>
                                <div>
                                    <h3 className=" text-sm font-semibold">
                                        {user?.name || "User Name"}
                                    </h3>
                                    <p className=" text-xs text-gray-500 mb-4 font-medium">
                                        {user?.email || "User Email"}
                                    </p>
                                </div>
                            </div>
                            
                            
                            
                        </>
                    )}
                    {logoutItem && (
                        <button
                            className={`w-full flex items-center gap-4 py-3 px-4 cursor-pointer transition-colors duration-200
                                ${
                                    activeMenu === logoutItem.title
                                        ? 'text-white bg-gradient-to-r from-cyan-900/90 to-cyan-900/20 border-l-4 border-cyan-600'
                                        : 'hover:bg-gray-100'
                                }`}
                            onClick={() => handleClick(logoutItem.path)}
                            title={isOpen ? '' : logoutItem.title}
                        >
                            <logoutItem.icon className="text-xl flex-shrink-0" />
                            {isOpen && <span className="truncate">{logoutItem.title}</span>}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideMenu;