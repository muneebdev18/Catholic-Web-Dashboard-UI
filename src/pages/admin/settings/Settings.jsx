import DashboardFooter from "../../../components/dashboardFooter/DashboardFooter";
import DashboardHeader from "../../../components/dashboardHeader/DashboardHeader";
import Profile from '../../../assets/images/dashboard/demo.jfif'
import EditProfileModal from "../../../components/modals/EditProfileModal";
import { useState } from "react";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { BiOutline } from "react-icons/bi";
import ChangePasswordModal from "../../../components/modals/ChangePasswordModal";
const Settings = () => {
  const [isEditProfileActive, setIsEditProfileActive] = useState(false);
  const [isPasswordChangeActive,setIsPasswordChangeActive] = useState(false);
  return (
    <div className="w-full flex flex-col min-h-screen relative">
      <DashboardHeader title={"Settings"} />
      <div className="flex flex-col flex-grow w-full lg:px-7 lg:py-7 sm:px-8 sm:py-2 xsm:px-4 xsm:py-4 overflow-y-auto">
        {/* Profile Details */}
        <div className="bg-white border-2 border-gray-200 px-6 py-6 shadow-lg rounded-lg">
          <h2 className="text-[28px] font-fontMedium font-semibold text-gray-800 mb-5">Profile Details</h2>

          {/* Profile Picture and Info */}
          <div className="flex justify-between gap-10">
            <div className="flex gap-[40px] items-start">
              {/* Profile Info */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <label htmlFor="username" className="font-medium text-gray-600">Username:</label>
                  <span className="text-lg text-gray-900 font-semibold">Lilly Colin</span>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-medium text-gray-600">Email:</label>
                  <span className="text-lg text-gray-900 font-semibold">lillycolin@example.com</span>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-medium text-gray-600">Phone:</label>
                  <span className="text-lg text-gray-900 font-semibold">+1 (234) 567-890</span>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="country" className="font-medium text-gray-600">Country:</label>
                  <span className="text-lg text-gray-900 font-semibold">United States</span>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="status" className="font-medium text-gray-600">Status:</label>
                  <span className="text-lg text-gray-900 font-semibold">Active</span>
                </div>
              </div>
            </div>
            {/* Profile Picture */}
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden border border-gray-300 shadow-sm">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/*--------- Edit Profile ---------- */}
        <div className="bg-white border-2 my-16 border-gray-200 px-6 py-6 shadow-lg rounded-lg">
          <h2 className="text-[28px] font-semibold font-fontMedium text-gray-800 mb-5 flex items-center"><span className="mr-2"><BiOutline size={25} color="#A357C4"/></span>Profile Settings</h2>
          <div>
            <button onClick={()=>setIsEditProfileActive(true)} className="bg-[#A357C4] tracking-wider	 rounded-md py-[10px] px-6 text-white text-[18px] font-fontMedium font-semibold">Edit Profile</button>
          </div>
        </div>
        {/*-------- Change Password Modal -------- */}
        <div className="bg-white border-2  border-gray-200 px-6 py-6 shadow-lg rounded-lg">
          <h2 className="text-[28px] flex items-center font-semibold font-fontMedium text-gray-800 mb-5"><span className="mr-2"><FaUnlockKeyhole size={23} color="#A357C4"/></span>Password Settings</h2>
          <div>
            <button onClick={()=>setIsPasswordChangeActive(true)} className="bg-[#A357C4] tracking-wider	 rounded-md py-[10px] px-6 text-white text-[18px] font-fontMedium font-semibold">Change Password</button>
          </div>
        </div>
      </div>
      {isEditProfileActive && <EditProfileModal setIsEditProfileActive={setIsEditProfileActive}/>}
      {isPasswordChangeActive && <ChangePasswordModal setIsPasswordChangeActive={setIsPasswordChangeActive}/>}
      <DashboardFooter />
    </div>
  );
};

export default Settings;
