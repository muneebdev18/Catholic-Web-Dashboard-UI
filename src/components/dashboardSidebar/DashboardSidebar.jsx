import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { TbLogout } from "react-icons/tb";
import Logo from '../../assets/images/logos/logo.webp';
import { SIDEBAR_ITEMS } from '../../utils/constants.js';
import LogoutModal from '../../components/modals/LogoutModal.jsx';

const DashboardSidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeModal, setActiveModal] = useState(false);

    // Get current location
    const location = useLocation();

    // Checking the size of the screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <motion.div
            className={`relative z-101 transition-all duration-200 ease-linear flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
        >
            {/* Sidebar background is now white */}
            <div className="h-screen bg-white flex flex-col py-2 px-4 border-r border-gray-300">
                <div className="flex justify-between items-center">
                    <img src={Logo} className={`${isSidebarOpen ? 'block' : 'invisible'} w-[150px] h-[90px] object-contain  `} />
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="p-2 rounded-md transition-colors hover:bg-gray-300 absolute right-[18px]"
                    >
                        <Menu size={26} color='#F59E0B' />
                    </motion.button>
                </div>

                <nav className="mt-9 flex-grow">
                    {SIDEBAR_ITEMS?.map((item) => {
                        const isActive = location.pathname === item.href; // Check exact match for "Overview" route
                        
                        return (
                            <NavLink
                                to={item.href}
                                key={item.href}
                                className={({ isActive: isNavLinkActive }) =>
                                    `block my-2 ${isSidebarOpen ? 'px-4 py-3' : 'py-3 px-3 flex justify-center items-center'} font-medium text-black hover:bg-[#f5cb84] hover:text-white transition-colors duration-150 rounded-md cursor-pointer ${isNavLinkActive && isActive ? 'bg-[#A357C4] text-white font-fontMedium font-extrabold' : ''}`
                                }
                            >
                                <div className={`w-full font-bold text-[17px] tracking-wider ${isSidebarOpen ? 'flex items-center' : ''}`}>
                                    <item.Icon size={24} className="mr-2 text-gray-500" fill={item.color} />
                                    {isSidebarOpen && item.name}
                                </div>
                            </NavLink>
                        );
                    })}
                </nav>

                {isSidebarOpen ? (
                    <button
                        onClick={() => setActiveModal(true)}
                        className="bg-[#A357C4] text-white text-[18px] font-extrabold font-fontMedium tracking-wider py-4 px-3 rounded-xl flex justify-center items-center btn-hover-action"
                    >
                        <span className="mr-2">
                            <TbLogout size={23} />
                        </span>
                        Logout
                    </button>
                ) : (
                    <div
                        onClick={() => setActiveModal(true)}
                        className="bg-[#A357C4] cursor-pointer text-black text-[18px] font-medium py-3 px-3 flex justify-normal items-center rounded-xl btn-hover-action"
                    >
                        <span>
                            <TbLogout size={24} color='#fff'/>
                        </span>
                    </div>
                )}

            </div>
            {activeModal && <LogoutModal setActiveModal={setActiveModal} />}
        </motion.div>
    );
};

export default DashboardSidebar;
