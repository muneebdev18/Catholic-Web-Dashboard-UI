import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emp1 from '../../assets/images/postJob/face1.webp';
import emp2 from '../../assets/images/postJob/face2.webp';
import emp3 from '../../assets/images/postJob/face3.webp';
import emp4 from '../../assets/images/postJob/face4.webp';
import emp5 from '../../assets/images/postJob/face5.webp';
import emp6 from '../../assets/images/postJob/face6.webp';
import emp7 from '../../assets/images/postJob/face7.webp';
import logo from '../../assets/images/logos/logo.webp';
import styles from './style.module.css';

const PostYourJob = () => {
    const [showCircles, setShowCircles] = useState(false);

    const handleLogoClick = () => {
        setShowCircles(!showCircles);
    };

    const circleVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 0.5 } },
        exit: { scale: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 lg:gap-0 md:gap-[40px]  lg:h-[800px] md:h-[1050px] sm:h-[960px] bg-[#A357C4] text-white lg:px-[83px] lg:py-[121px] md:px-[35px] md:py-[38px] sm:px-[26px] xxxsm:px-[15px] xxxsm:py-[42px] rounded-[60px] sm:rounded-[40px] xxxsm:rounded-[15px] overflow-hidden mx-9 md:mx-[26px] xxxsm::my-[28px] xxxsm:mx-[15px] mb-12 lg:items-center md:items-start">
            {/* Text Section */}
            <div data-aos="fade-right"
                data-aos-duration="500" className=" sm:text-start md:text-left z-20 lg:h-full sm:h-0">
                <h1 className="3xl:text-[85px] xl:text-[65px] lg:text-[57px] md:text-[43px] sm:text-[35px] xsm:text-[27px] xxsm:text-[24px] xxxsm:text-[24px]  font-[800] mb-3 leading-tight">
                    Post Your Job for
                    <br /> Free and <span className="text-white opacity-40 ">Hire Catholic Professionals!</span>

                </h1>
                <p className="text-gray-200  mb-6 text-[22px] xl:w-full lg:w-[460px] lg:text-[19px] sm:text-[19px] xsm:text-[17px] xxsm:text-[16px] xxxsm:text-[15px] ">
                    Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque donec habitasse massa proin semper. Pretium pharetra amet blandit sed.Lorem ipsum dolor sit amet consec tetur. A nisi volutpat.
                </p>
                {/* padding:7px 56px; */}
                <button className={`${styles.postJobBtn}  lg:text-[28px] font-fontMedium lg:font-[600] md:text-[21px] sm:text-[22px] sm:px-[34px] sm:font-normal xsm:px-[34px] xsm:text-[19px] xxsm:text-[21px] xxsm:px-[28px]  xxxsm:text-[19px] xxxsm:px-[20px] `}>
                    Post Your Job
                </button>
            </div>

            {/* Right Section: Circular Design */}
            <div data-aos="fade-left"


                data-aos-duration="500" id={styles.rightSide} className="relative mt-12 md:mt-0 w-full flex items-center justify-center ">
                {/* Logo in the center (clickable) */}
                <div
                    className="relative z-20 lg:w-60 lg:h-60 sm:w-[200px] sm:h-[200px] bg-white rounded-full flex items-center justify-center cursor-pointer"
                    onClick={handleLogoClick}
                >
                    <img src={logo} alt="Logo" className="w-10/12 h-10/12 object-contain" />
                </div>
                <AnimatePresence>
                    {showCircles && (
                        <>
                            {/* Circles with animation */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={circleVariants}
                                className="absolute xl:w-[580px] xl:h-[580px] lg:w-[550px] lg:h-[550px] md:w-[550px] md:h-[550px] sm:w-[400px] sm:h-[400px] rounded-full  bg-[#c89adc]"
                            />
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={circleVariants}
                                className="absolute xl:w-[480px] xl:h-[480px] lg:w-[450px] lg:h-[450px] md:w-[450px] md:h-[450px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#dec2ea]"
                            />
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={circleVariants}
                                className="absolute xl:w-[380px] xl:h-[380px] lg:w-[350px] lg:h-[350px] md:w-[350px] md:h-[350px] sm:w-[250px] sm:h-[250px] rounded-full bg-[#ebdaf2]"
                            />
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={circleVariants}
                                className="absolute xl:w-[300px] xl:h-[300px] lg:w-[320px] lg:h-[320px] md:w-[320px] md:h-[320px] sm:w-[200px] sm:h-[200px] rounded-full bg-[#f3e9f7]"
                            />

                            {/* Employee images with animation */}
                            <div className="absolute w-[600px] h-[600px] ">
                                <motion.div
                                    initial={{ scale: 0, x: 0, y: 300, opacity: 0.1 }} // Start from center
                                    animate={{ scale: 1, x: -120, y: -20, transition: { duration: 1 }, opacity: 1 }} // Move to position
                                    exit={{ scale: 0, x: 0, y: 300, transition: { duration: 0.5 }, opacity: 0.1 }}
                                    // variants={imageVariants}
                                    className={`absolute w-20 h-20 rounded-full overflow-hidden top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${styles.postImg7} `}
                                >
                                    <img src={emp7} alt="Employee 1" className="w-full h-full object-cover" />
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0, x: 200, y: -50, opacity: 0.1 }} // Start from center
                                    animate={{ scale: 1, x: 20, y: -120, opacity: 1 }} // Move to position
                                    exit={{ scale: 0, x: 200, y: -50, transition: { duration: 1 }, opacity: 0.1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className={`absolute w-32 h-32 rounded-full overflow-hidden top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 ${styles.postImg5}`}
                                >
                                    <img src={emp5} alt="Employee 2" className="w-full h-full object-cover" />
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0, x: -50, y: -300, opacity: 0.1 }} // Start from center
                                    animate={{ scale: 1, x: -220, y: -80, opacity: 1 }} // Move to position
                                    exit={{ scale: 0, x: -50, y: -300, transition: { duration: 1 }, opacity: 0.1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className={`absolute w-28 h-28 rounded-full overflow-hidden bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 ${styles.postImg2}`}
                                >
                                    <img src={emp2} alt="Employee 3" className="w-full h-full object-cover" />
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0, x: -250, y: -50, opacity: 0.1 }} // Start from center
                                    animate={{ scale: 1, x: -240, y: 210, opacity: 1 }} // Move to position
                                    exit={{ scale: 0, x: -250, y: -50, transition: { duration: 0.5 }, opacity: 0.1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className={`absolute w-20 h-20 rounded-full overflow-hidden top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 ${styles.postImg3}`}
                                >
                                    <img src={emp3} alt="Employee 4" className="w-full h-full object-cover" />
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0, x: -250, y: -50, opacity: 0.1 }} // Start from center
                                    animate={{ scale: 1, x: -100, y: -50, opacity: 1 }} // Move to position
                                    exit={{ scale: 0, x: -250, y: -50, transition: { duration: 0.5 }, opacity: 0.1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className={`absolute w-28 h-28 rounded-full z-50 overflow-hidden bottom-[20%] left-[80%] transform translate-x-1/2 translate-y-1/2 ${styles.postImg4}`}
                                >
                                    <img src={emp4} alt="Employee 5" className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0, x: -250, y: -50, opacity: 0.1 }} // Start from center
                                    animate={{ scale: 1, x: 70, y: -150, opacity: 1 }} // Move to position
                                    exit={{ scale: 0, x: -250, y: -50, transition: { duration: 0.5 }, opacity: 0.1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className={`absolute w-24 h-24 rounded-full z-50 overflow-hidden bottom-[20%]  transform translate-x-1/2 translate-y-1/2 ${styles.postImg1}`}
                                >
                                    <img src={emp1} alt="Employee 5" className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0, x: -250, y: -50, opacity: 0.1 }} // Start from center
                                    animate={{ scale: 1, x: -50, y: -350, opacity: 1 }} // Move to position
                                    exit={{ scale: 0, x: -250, y: -50, transition: { duration: 0.5 }, opacity: 0.1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className={`absolute w-32 h-32 rounded-full z-50 overflow-hidden bottom-[20%] left-[80%] transform translate-x-1/2 translate-y-1/2 ${styles.postImg6}`}
                                >
                                    <img src={emp6} alt="Employee 5" className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PostYourJob;