import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useMatch } from 'react-router-dom';
import styles from './style.module.css';
import { changeScreenSize, selectScreenSize } from '../../global/features/screensize';
import { navLinks } from "../../utils/constants";
import Logo from '../../assets/images/logos/logo.webp';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  const dispatch = useDispatch();
  const screensize = useSelector(selectScreenSize);
  const [isActive, setIsActive] = useState(true);
  const [scrollPosition, setPosition] = useState({ scrollY: 0 });

  // For Scrollable height
  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollY: window.innerHeight + window.scrollY });
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  useEffect(() => {
    const handleResize = () => dispatch(changeScreenSize(window.innerWidth));
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  // hide realtime menu based on screen size
  useEffect(() => {
    if (screensize <= 991) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [screensize, dispatch]);

  // Match specific routes
  const isRootMatch = useMatch('/');
  const isDashboardMatch = useMatch('/dashboard/*');  // Matches any route starting with /dashboard

  // If the route is dashboard, don't show the Navbar
  return (
    <>
{isDashboardMatch ? '' : (
        <div className={`${isRootMatch ? styles.navWrapper : styles.navWrapperSecondary}`}>
          {!isActive ? (
            <Sidebar />
          ) : (
            <div className={`${styles.navLinkWrapper} transition ${scrollPosition.scrollY > 1006 && 'bg-navbar'} 3xl:text-[24px] xl:text-[22px] lg:text-[20px]
          flex justify-center items-center gap-[80px]  border-b border-slate-300`}
            >
              {navLinks.map((item, key) => (
                <NavLink
                  to={item.page}
                  className={({ isActive }) =>
                    isActive ? 'font-[900] font-fontMedium' : 'font-[500] font-fontMedium'
                  }
                  key={key}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}

          {/* Show the logo, join, and sign-in buttons only on the root route */}
          {isRootMatch && (
            <div className="flex justify-center items-center container mx-auto xl:pt-28 lg:pt-28 md:pt-28 sm:pt-[40px] xxxsm:pt-[30px]">
              <div className="flex flex-col justify-center items-center">
                <img src={Logo} alt="Logo" className={`${styles.logoImg}`} />
                <p className="text-[#494949] font-light tracking-wide lg:text-[25px] md:text-[20px] sm:text-[16px] xsm:text-[12px] xxxsm:text-[12px]">
                  <i>"I am the vine; you are the branches" Jn 15:5</i>
                </p>
                <div className="mt-[20px] flex gap-7 items-center">
                  <Link to={'/login'} className={`${styles.signInLink} text-[#413e3a] hover:text-[#ECB202]`}>Sign In</Link>
                  <Link to={"/signup"}><button className={`${styles.joinBtn}`}>Join</button></Link>
                </div>
              </div>
            </div>
          )}
        </div>
)}
    </>
  );
};

export default Navbar;
