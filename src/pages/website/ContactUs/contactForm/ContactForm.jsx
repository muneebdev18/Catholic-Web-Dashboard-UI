import { CiUser } from "react-icons/ci";
import { PiPencil } from "react-icons/pi";
import styles from './style.module.css'
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeOpen } from "react-icons/rx";

const ContactForm = () => {
    return (
        <div className="overflow-x-hidden flex flex-col lg:flex-row w-full px-4 sm:px-6 md:px-[75px] lg:px-[220px] py-8 md:py-16 justify-between">
            {/* Contact Info */}
            <div className="w-full lg:w-5/12">
                <div className="space-y-8 md:space-y-10 mt-8 md:mt-[140px] w-full lg:w-[80%] text-[#000]">
                    <div className="border-b border-gray-400 pb-5 md:pb-7">
                        <p className=" xl:text-[20px]   md:text-[18px] sm:text-[17px] xxxsm:text-[16px] font-medium">Call Us At</p>
                        <p className=" 3xl:text-[40px] 2xl:text-[34px] xl:text-[30px] lg:text-[26px]  sm:text-[25px] xxxsm:text-[23px] font-fontMedium font-extrabold"><span className="font-fontMedium font-extrabold">+</span> 012 345 6789</p>
                    </div>
                    <div className="border-b border-gray-400 pb-5 md:pb-7">
                        <p className="xl:text-[20px]   md:text-[18px] sm:text-[17px] xxxsm:text-[16px] font-medium">Email Us At</p>
                        <p className="3xl:text-[40px] 2xl:text-[34px] xl:text-[30px] lg:text-[26px]  sm:text-[25px] xxxsm:text-[23px] font-fontMedium font-extrabold">Info@catholicgrapevine.com</p>
                    </div>
                    <div className="pb-5 md:pb-7">
                        <p className="xl:text-[20px]   md:text-[18px] sm:text-[17px] xxxsm:text-[16px] font-medium">Find Us Here</p>
                        <p className="3xl:text-[40px] 2xl:text-[34px] xl:text-[30px] lg:text-[26px]  sm:text-[25px] xxxsm:text-[23px] font-fontMedium font-extrabold">
                            11038 126 A st unit 104 <br />
                            Surrey BC V3V3J7
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-7/12 mt-12 lg:mt-0">
                <h2 className="mb-5 md:mb-[22px] text-[36px] sm:text-[40px] xsm:text-[30px] xxxsm:text-[30px] md:text-[50px] lg:text-[65px] font-fontMedium font-bold">Get In Touch</h2>
                <form className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        <div>
                            <label className="text-[18px] md:text-[20px] font-fontMedium flex items-center gap-2">
                                <CiUser className="font-fontMedium" /> Full name*
                            </label>
                            <input
                                type="text"
                                placeholder="Your full name"
                                className="w-full py-3 md:py-4 pr-4 text-[16px] md:text-[20px] border-b border-gray-400 bg-transparent outline-none focus:border-black"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-[18px] md:text-[20px] font-fontMedium flex items-center gap-2">
                                <FiPhone /> Phone*
                            </label>
                            <input
                                type="text"
                                placeholder="Your phone number"
                                className="w-full py-3 md:py-4 pr-4 text-[16px] md:text-[18px] border-b border-gray-400 bg-transparent outline-none focus:border-black"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-[18px] md:text-[20px] font-fontMedium flex items-center gap-x-2">
                            <RxEnvelopeOpen size={14} /> Email address*
                        </label>
                        <input
                            type="email"
                            placeholder="info@example.com"
                            className="w-full py-3 md:py-4 pr-4 text-[16px] md:text-[18px] border-b border-gray-400 bg-transparent outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-[18px] md:text-[20px] font-fontMedium flex items-center gap-x-1">
                            <PiPencil size={17} /> Enter Your Comment
                        </label>
                        <textarea
                            placeholder="Write a message"
                            className="w-full py-3 md:py-4 pr-4 text-[16px] md:text-[18px] border-b border-gray-400 bg-transparent outline-none focus:border-black"
                            rows="4"
                        />
                    </div>
                    <button className={`${styles.getStartBtn}`}>
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
