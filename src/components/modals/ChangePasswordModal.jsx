import { motion } from 'framer-motion'
import { GoLock } from 'react-icons/go'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';

const ChangePasswordModal = ({ setIsPasswordChangeActive }) => {
    const [isPassVisible, setIsPassVisible] = useState({
        current: false,
        new: false,
        confirm: false,
    })
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, scale: 1.1 }} transition={{ duration: 0.4, delay: 0.2 }} className="fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-[#202020b8] z-40">
            <form >
                <div className="flex flex-col bg-white  sm:px-[30px] sm:py-[20px] xsm:p-4 mx-2 relative shadow rounded-xl items-center">
                    <div className="flex w-full flex-col mb-[24px]">
                        <p className="font-fontMedium font-semibold text-[23px] text-center mb-5">
                            {`Change Your Password`}
                        </p>
                        {/* <div className='flex gap-5'> */}
                        <div className='flex flex-col gap-3 '>
                            <div className="relative ">
                                <input
                                    type={isPassVisible.current ? 'text' : 'password'}
                                    placeholder="Enter Current Password"
                                    className="rounded-md border-2 border-gray-700 py-3 w-full px-[38px]  outline-none font-fontMedium font-[500] "
                                />
                                <GoLock color='#A357C4' size={21} className="absolute top-4 left-3 " />
                                {
                                    isPassVisible.current ? (
                                        <AiFillEyeInvisible  onClick={()=>setIsPassVisible({...isPassVisible,current:false})} color='#A357C4' size={21} className="absolute top-4 right-3" />
                                    )
                                        :
                                        (
                                            <AiFillEye onClick={()=>setIsPassVisible({...isPassVisible,current:true})} color='#A357C4' size={21} className="absolute top-4 right-3  " />
                                        )
                                }

                            </div>
                            <div className="relative">
                                <input
                                    type={isPassVisible.new ? 'text' : 'password'}
                                    placeholder="Enter New Password"

                                    className="rounded-md border-2 border-gray-700 py-3 px-[38px]  w-full  outline-none "
                                />
                                <GoLock color='#A357C4' size={21} className="absolute top-4 left-3" />
                                {
                                    isPassVisible.new ? (
                                        <AiFillEyeInvisible  onClick={()=>setIsPassVisible({...isPassVisible,new:false})} color='#A357C4' size={21} className="absolute top-4 right-3" />
                                    )
                                        :
                                        (
                                            <AiFillEye  onClick={()=>setIsPassVisible({...isPassVisible,new:true})} color='#A357C4' size={21} className="absolute top-4 right-3  " />
                                        )
                                }
                            </div>
                            <div className="relative ">
                                <input
                                    type={isPassVisible.confirm ? 'text' : 'password'}
                                    placeholder="Confirm New Password"
                                    className="rounded-md border-2 border-gray-700 py-3 px-[38px]  w-full outline-none"
                                />
                                <GoLock color='#A357C4' size={21} className="absolute top-4 left-3  " />
                                {
                                    isPassVisible.confirm ? (
                                        <AiFillEyeInvisible  onClick={()=>setIsPassVisible({...isPassVisible,confirm:false})} color='#A357C4' size={21} className="absolute top-4 right-3" />
                                    )
                                        :
                                        (
                                            <AiFillEye  onClick={()=>setIsPassVisible({...isPassVisible,confirm:true})} color='#A357C4' size={21} className="absolute top-4 right-3  " />

                                        )
                                }
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="flex gap-[30px]  my-3">
                        <button
                            className="h-[50px] font-fontMedium font-semibold bg-[#ff0000] px-[50px] text-[16px] rounded-md text-white tracking-wider cancel-btn-hover-action"
                            onClick={() => setIsPasswordChangeActive(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className={`btn-hover-action h-[50px] text-[16px] font-fontMedium font-semibold bg-[#A357C4] px-[50px] tracking-wider rounded-md text-white `}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </form>
            {/* {successModal && <SuccessModal title={"dadasda"} setSuccessModal={setSuccessModal} setChangePasswordModal={setChangePasswordModal}/>} */}
        </motion.div>
    )
}

export default ChangePasswordModal