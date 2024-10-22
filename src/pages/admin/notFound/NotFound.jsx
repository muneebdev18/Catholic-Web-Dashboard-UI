import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex justify-center items-center flex-col '>
            <h1 className='text-center font-fontMedium font-bold text-[82px] text-[#A357C4]'>404</h1>
            <h2 className='text-center font-stylishFont text-[64px] font-semibold text-[#A357C4]'>Page Not Found</h2>
            <p className="text-[24px] font-fontMedium font-semibold text-black">Go to the Dashboard Home By <Link className="text-[#A357C4]" to={'/dashboard/'}>Click Here</Link></p>
        </div>
    </div>
  )
}

export default NotFound