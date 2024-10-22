const DashboardHeader = ({title}) => {
    return (
     <div className='w-full bg-white h-16  backdrop-blur-md shadow-lg  flex flex-col justify-center '>
      <div className='px-6'>
          <p className={`font-semibold font-stylishFont text-[20px] text-[#A357C4] sm:text-2xl lg:text-[39px]`}>{title}</p>
      </div>
     </div>
    )
  }
  
  export default DashboardHeader