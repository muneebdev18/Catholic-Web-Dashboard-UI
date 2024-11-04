import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useMatch } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from '../banner/Banner';
import styles from './style.module.css';
import { changeScreenSize, selectScreenSize } from '../../global/features/screensize';
import { navLinks } from "../../utils/constants";
import Logo from '../../assets/images/logos/logo.webp';
import Sidebar from '../sidebar/Sidebar';
import LogoNav from '../../assets/images/logos/TCG Logo 1.png';
import AboutUsNav from '../../assets/images/aboutus/About-Us-Banner.webp';
import ServiceNav from '../../assets/images/service/service-banner-new.webp';
import CategoryNav from '../../assets/images/category/cat-banner-new.webp';
import EventNav from '../../assets/images/events/ev-banner.webp';
import ContactUsNav from '../../assets/images/contactus/contactus-banner.webp';

const Navbar = () => {
  const dispatch = useDispatch();
  const screensize = useSelector(selectScreenSize);
  const [isActive, setIsActive] = useState(true);
  const [scrollPosition, setPosition] = useState({ scrollY: 0 });

  const updatePosition = useCallback(() => {
    const currentScroll = window.innerHeight + window.scrollY;
    setPosition(prevPosition => (prevPosition.scrollY !== currentScroll ? { scrollY: currentScroll } : prevPosition));
  }, []);

  const handleResize = useCallback(() => {
    dispatch(changeScreenSize(window.innerWidth));
  }, [dispatch]);

  // For scrollable height
  useEffect(() => {
    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, [updatePosition]);

  // Update screen size
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Hide real-time menu based on screen size
  useEffect(() => {
    setIsActive(screensize > 991);
  }, [screensize]);

  // Match specific routes
  const isRootMatch = useMatch('/');
  const isDashboardMatch = useMatch('/dashboard/*');
  const isAboutUsMatch = useMatch('/about')
  const isServiceMatch = useMatch('/service')
  const isCategoryMatch = useMatch('/category')
  const isEventMatch = useMatch('/events')
  const isContactUsMatch = useMatch('/contact-us')
  const isCommunityMatch = useMatch('/community')
const isLoginMatch = useMatch('/login')
const isSignupMatch = useMatch('/signup')
  const sameNavBanner =  isAboutUsMatch || isServiceMatch || isCategoryMatch || isEventMatch || isContactUsMatch || isCommunityMatch;
  const authNav = isLoginMatch || isSignupMatch
  // If the route is dashboard, don't show the Navbar

  // const bannerData = [
  //   {
  //     title: "",
  //     image:,
  //     details:"",
  //     imageClass
  //   }
  // ]

  return (
    <>
      {isDashboardMatch ? '' : (
        <div className={`${isRootMatch ? styles.navWrapper : sameNavBanner ? styles.navWrapperForAllPages : authNav ? styles.navWrapperForAllAuth : styles.navWrapperSecondary} overflow-hidden`}>
          {!isActive && (isRootMatch || sameNavBanner || authNav) ? (
            <div className='flex justify-between items-center px-3'>
              {
                !isRootMatch && (
                  <Link to={'/'}>
                    <img src={LogoNav} alt="Logo" className='mt-5 2xl:w-[230px] 2xl:h-[115px] lg:w-[200px] lg:h-[100px] md:h-[100px] sm:h-[80px] xxxsm:h-[60px]' />
                  </Link>
                )
              }
              <Sidebar />
            </div>
          ) : (
            <>
              {sameNavBanner || authNav ? (
                <div
                  className={`${authNav ? styles.authNav : styles.navLinkWrapperSecondary} transition ${scrollPosition.scrollY > 1006 && 'bg-navbar'}
                  3xl:px-[95px] xl:px-[75px] lg:px-[65px] md:px-[55px]  py-16  flex justify-between items-center gap-[80px]  3xl:text-[22px] 2xl:text-[22px] xl:text-[20px] lg:text-[19px] md:text-[17px]`}
                >
                  
                  <AnimatePresence>
                    <Link to={'/'}>
                      <motion.img
                        initial={{ scale: 3.5, x: 700, y: 200, opacity: 1 }}
                        animate={{ scale: 1, x: 0, y: 0, transition: { duration: 0.5 }, opacity: 1 }}
                        exit={{ scale: 0, x: -800, y: -150 }}
                        transition={{ duration: 0.5 }}
                        src={Logo}
                        className=' 2xl:w-[220px] 2xl:h-auto lg:h-[100px] md:w-[150px] md:h-[90px]'
                        loading='lazy'
                      />
                    </Link>
                    <motion.div
                      initial={{ scale: 1, x: -400, y: 0, opacity: 1 }}
                      animate={{ scale: 1, x: 0, y: 0, transition: { duration: 0.5 }, opacity: 1 }}
                      exit={{ scale: 0, x: -800, y: -150 }}
                      transition={{ duration: 0.5 }}
                      className='flex gap-x-24 2xl:gap-x-20 xl:gap-x-16 lg:gap-x-[52px] md:gap-x-[30px]'
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
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : isRootMatch ? (
                <motion.div
                  initial={{ scale: 1, x: 300, y: 0, opacity: 1 }}
                  animate={{ scale: 1, x: 0, y: 0, transition: { duration: 0.5 }, opacity: 1 }}
                  exit={{ scale: 0, x: -800, y: -150 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`${styles.navLinkWrapper} transition ${scrollPosition.scrollY > 1006 && 'bg-navbar'}
                3xl:text-[24px] xl:text-[22px] lg:text-[20px] flex justify-center items-center gap-[80px] border-b border-slate-300`}>
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
                </motion.div>
              ) : null}
            </>
          )}

          {/* Show the logo, join, and sign-in buttons only on the root route */}
          {isRootMatch && (
            <div className="flex justify-center items-center container mx-auto xl:pt-28 lg:pt-28 md:pt-28 sm:pt-[40px] xxxsm:pt-[30px]">
              <div className="flex flex-col justify-center items-center">
                <AnimatePresence>
                  <motion.img
                    initial={{ scale: 0.1, x: -800, y: -200, opacity: 1 }}
                    animate={{ scale: 1, x: 0, y: 0, transition: { duration: 0.5 }, opacity: 1 }}
                    exit={{ scale: 0, x: -800, y: -150 }}
                    transition={{ duration: 0.5 }}
                    src={Logo}
                    className={`${styles.logoImg}`}
                    loading='lazy'
                  />
                </AnimatePresence>
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
          {/* -------- About Navbar Banner -------- */}

          {
            isAboutUsMatch && (
              <Banner image={AboutUsNav} title="About Us" details="Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna faucibus
                        aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque
                        donec habitasse massa proin semper."
                imageClass="2xl:w-[728px] xl:w-full lg:w-full md:w-[500px] sm:w-[440px] xsm:w-[450px] mx-auto"
              />
            )
          }
          {/* -------- Service Navbar Banner -------- */}
          {
            isServiceMatch && (
              <Banner image={ServiceNav} title="Services" details="Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna faucibus
                        aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque
                        donec habitasse massa proin semper."
                imageClass="3xl:h-[513px] 2xl:h-[480px] xl:h-[450px] lg:h-[450px] lg:w-fit md:w-[500px] sm:w-[440px] xsm:w-[450px] mx-auto"
              />
            )
          }
          {/* ------- Community Nav Banner ------- */}
          {
            isCommunityMatch && (
              <div className="px-[20px] lg:px-[108px] xl:pt-28 lg:pt-28 md:pt-28 sm:pt-[40px] xxxsm:pt-[30px] h-full">
                <div className="flex mt-[90px] items-center h-[100%] flex-col text-center">
                  {/* Left side: Text content */}

                  <h1
                    style={{ fontStretch: "condensed" }}
                    className="xl:text-[98px] lg:text-[75px] md:text-[60px] sm:text-[35px] xsm:text-[25px] xxxsm:text-[25px] leading-[85px] font-fontMedium font-semibold lg:mb-[20px]"
                  >Community</h1>
                  <p className="text-[16px] lg:text-[22px] md:text-[18px] sm:text-[14px] md:w-[70%] text-[#000000] font-fontMedium ">
                    Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna faucibus
                    aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque
                    donec habitasse massa proin semper.
                  </p>
                </div>

              </div>
            )
          }
          {/* ------- Categories Nav Banner ------- */}
          {
            isCategoryMatch && (
              <Banner image={CategoryNav} title="Categories" details="Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna faucibus
                        aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque
                        donec habitasse massa proin semper."
                imageClass="lg:w-full md:w-[500px] sm:w-[440px] xsm:w-[450px] mx-auto"
              />
            )
          }
          {/* ------- Event Nav Banner ------- */}
          {
            isEventMatch && (
              <Banner image={EventNav} title="Events & Webinars" details="Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna faucibus
                        aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque
                        donec habitasse massa proin semper."
                imageClass="3xl:w-[640px] 2xl:w-[570px] xl:w-[570px] lg:w-[570px] md:w-[470px] sm:w-[400px] msm:w-[380px] xsm:w-[350px] mx-auto"
              />
            )
          }
          {/* ------- Contact-Us Nav Banner ------- */}
          {
            isContactUsMatch && (
              <Banner image={ContactUsNav} title="Contact Us" details="Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna faucibus
                        aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque
                        donec habitasse massa proin semper."
                imageClass="3xl:w-[677px] 2xl:w-[600px] xl:w-[550px] lg:w-[500px] md:w-[450px] sm:w-[400px] xsm:w-[300px] mx-auto"
              />
            )
          }
        </div>
      )}
    </>
  );
};

export default Navbar;
