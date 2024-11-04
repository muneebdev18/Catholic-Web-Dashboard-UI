import {motion} from 'framer-motion'
import Profile from '../../assets/images/dashboard/demo.jfif'
import { IoMdCamera } from 'react-icons/io'
const EditProfileModal = ({setIsEditProfileActive}) => {
  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-[#202020b8] z-40"
    >
        <div className="flex flex-col bg-white lg:px-[50px] sm:px-[35px] sm:py-[20px] xsm:p-4 mx-2 relative shadow rounded-xl items-center">
            <form action="">
                <div className="flex justify-center items-center flex-col mb-[24px]">
                    <p className="font-fontMedium font-semibold text-[23px] text-center mb-5">
                        {`Edit Your Profile`}
                    </p>
                    <div className="flex items-center gap-5">
                        <div className="relative">
                            <img
                                src={Profile}
                                className="w-[110px] h-[110px] rounded-full object-cover"
                                alt="Profile"
                            />
                            <label className={"absolute sm:right-[23px] xsm:right-[24px] sm:top-[95px] xsm:top-[97px]"}>
                                <input
                                    type="file"
                                    hidden
                                />
                                <div className='bg-white rounded-full w-[25px] h-[25px] flex justify-center items-center'>
                                <IoMdCamera style={{ cursor: 'pointer' }} color="black" size={16} />
                                </div>
                            </label>
                        </div>
                        <div className='flex flex-col gap-3'>
                        <div className="flex flex-col">
                            <label className="text-[15px] font-fontMedium font-bold">
                                Name :
                                <input
                                    type="text"
                                   
                                    className="rounded-md border-2 border-gray-700 py-[10px] px-3 outline-none ml-2"
                                />
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[15px] font-fontMedium font-bold">
                                Email :
                                <input
                                    type="text"
                                   
                                    className="rounded-md border-2 border-gray-700 py-[10px] px-3 outline-none ml-2"
                                />
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-[30px] my-3">
                    <button
                        className="py-[11px] font-fontMedium font-semibold bg-[#ff0000] px-[50px] text-[16px] rounded-md text-white tracking-wider cancel-btn-hover-action"
                        onClick={()=>setIsEditProfileActive(false)}
                    >
                        Cancel
                    </button>
                    <button  type='submit' className={`  font-fontMedium font-semibold h-[50px] text-[16px] bg-[#A357C4] px-[50px] tracking-wider rounded-md text-white btn-hover-action`}>
                      Update
                    </button>
                </div>
            </form>
        </div>
    </motion.div>
    
    </>
  )
}

export default EditProfileModal