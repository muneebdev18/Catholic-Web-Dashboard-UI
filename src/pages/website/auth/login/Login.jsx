import { Link } from 'react-router-dom'
import styles from './style.module.css'
const Login = () => {
    return (
        <div className="py-[40px] xl:py-[90px] lg:py-[60px] md:py-[40px]  flex items-center justify-center">
            <div className="bg-[#EDE2D4] p-8 msm:mx-[20px] xxxsm:mx-[10px] rounded-lg shadow-lg w-[600px] h-[600px] xl:w-[600px] xl:h-[600px] lg:h-[520px] md:h-[490px] md:w-[500px] sm:w-[500px] sm:h-[490px] msm:w-[420px] msm:h-[420px] xxxsm:w-[420px] xxxsm:h-[420px] xl:rounded-[50px] md:rounded-[25px] xsm:rounded-[20px] xxxsm:rounded-[18px]">
                <h2 className="xl:text-[44px] lg:text-[35px] md:text-[28px] sm:text-[28px] msm:text-[23px] xxxsm:text-[23px] font-fontMedium font-bold text-center lg:mb-6 md:mb-4  text-[#A357C4]">Access Your Account</h2>

                <form onSubmit={(e)=>e.preventDefault()}>
                    {/* Email Input */}
                    <div className="mb-4 msm:mb-3 xxxsm:mb-2">
                        <label className="block text-gray-700 xl:text-[23px] lg:text-[19px] md:text-[17px] sm:text-[17px] msm:text-[16px] xxxsm:text-[16px] font-fontMedium font-bold mb-2" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 xl:py-4 lg:py-3 sm:py-3 xxxsm:py-[11px] border xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[17px] msm:text-[16px] xxxsm:text-[16px] border-[#A357C4] rounded-lg focus:outline-none focus:border-[#A357C4]"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6 msm:mb-3 xxxsm:mb-2">
                        <label className="block xl:text-[23px] lg:text-[19px]  font-fontMedium md:text-[17px] sm:text-[17px] msm:text-[16px] xxxsm:text-[16px] font-bold text-gray-700  mb-2" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 xl:py-4 lg:py-3 sm:py-3 xxxsm:py-[11px] border border-[#A357C4] xl:text-[21px] lg:text-[19px]  md:text-[17px] sm:text-[17px] msm:text-[16px] xxxsm:text-[16px]  rounded-lg focus:outline-none focus:border-[#A357C4]"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Forgot Password Link */}
                    <div className="flex justify-between items-center mb-6 lg:mb-4 md:mb-3 msm:mb-3 xxxsm:mb-2 ">
                        <a href="#" className="xl:text-[22px] lg:text-[19px] md:text-[17px] sm:text-[17px] msm:text-[16px]  xxxsm:text-[16px] font-fontMedium font-bold text-[#A357C4] hover:underline">Forgot Password?</a>
                    </div>

                    {/* Login Button */}
                    <Link to={"/dashboard"}>
                    <button
                        type="submit"
                        className={`${styles.loginBtn}`}
                    >
                        Login
                    </button>
                    </Link>
                </form>

                {/* Join Option */}
                <div className="text-center mt-9 lg:mt-5 msm:mt-2 xxxsm:mt-2">
                    <p className="xl:text-[22px] lg:text-[22px]  md:text-[17px] msm:text-[16px] sm:text-[17px] xxxsm:text-[16px] text-gray-600">
                        Don't have an account? <Link to={"/signup"} className="text-[#A357C4] font-fontMedium font-bold hover:underline">Join Now</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login