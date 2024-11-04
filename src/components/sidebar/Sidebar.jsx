import Cross from '../../assets/images/icons/cross.png'
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'; // Assuming you're using this icon library
import styles from './style.module.css'
import { NavLink } from 'react-router-dom';
import { sidebarNavLinks } from '../../utils/constants';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the drawer visibility

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Button to open the drawer */}
      <div className=" relative">
        <button
          onClick={toggleDrawer}
          className='ml-3 mt-3 font-extrabold'
          type="button"
        >
          <RxHamburgerMenu size={28} />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer} // Click on backdrop to close drawer
        ></div>
      )}

      {/* Drawer component */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen py-[20px] px-[12px] overflow-y-auto transition-transform transform bg-[#E0D4C5] w-80 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={toggleDrawer} // Close the drawer on button click
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
        >
          <img src={Cross}/>
          <span className="sr-only">Close menu</span>
        </button>

        {/* Navigation Links */}
        <nav className="mt-[50px]">
          <ul className="space-y-4">
            {/* <NavLink>

            </NavLink> */}
            {
              sidebarNavLinks.map((item,index)=>{
                return(
                  <li key={index}>
                    <NavLink onClick={()=>setIsOpen(false)} to={item.page} className={({isActive})=> isActive ? ` flex items-center text-[20px] font-medium text-gray-700 px-[20px] py-[12px] hover:text-[#A357C4]  ${styles.activeLink} ` : ` flex items-center text-[20px] font-medium text-gray-700  hover:text-[#A357C4]  px-[20px] py-[12px] ${styles.inActiveLink}`}>
                      <item.icon  className="mr-3" />
                  {item.name}
                    </NavLink>
                  </li>
                )
              })
            }
          
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
