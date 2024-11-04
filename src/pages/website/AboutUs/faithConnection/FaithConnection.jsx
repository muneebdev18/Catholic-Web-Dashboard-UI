// import styles from './style.module.css'
import FaithImg from '../../../../assets/images/aboutus/aboutus-1.webp';

const FaithConnection = () => {
    return (
        <div className='mx-[75px] lg:mx-[75px] sm:mx-[26px] xxxsm:mx-[15px]'>
            <div className='text-center'>
                <h2 className='font-fontMedium font-semibold xl:text-[85px] lg:text-[70px]  md:text-[55px] sm:text-[45px] xsm:text-[30px] xxxsm:text-[25px] xl:leading-[85px] md:leading-[75px] sm:leading-[55px] xsm:leading-[45px] xxxsm:leading-[20px] flex flex-col'>Faith-Based Connections for <span> Your Professional Needs</span></h2>
            </div>
            <div className='grid  lg:grid-cols-2 sm:grid-cols-1 items-center xl:gap-[100px] md:gap-[50px] xxxsm:gap-[30px] xl:mt-[42px] sm:mt-[20px] xxxsm:mt-[15px]'>
                <div data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-easing="ease-in-sine">
                    <p className='xl:leading-[43px] sm:leading-[30px] xxxsm:leading-[28px] xl:text-[22px] md:text-[20px] xsm:text-[18px] xxxsm:text-[16px] tracking-wide font-fontMedium font-thin'>Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque donec habitasse massa proin semper. Pretium pharetra amet blandit sed.Lorem ipsum dolor sit amet consec tetur. A nisi volutpat.Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque donec habitasse massa proin semper. Pretium pharetra amet blandit sed.Lorem ipsum dolor sit amet consec tetur. A nisi volutpat.</p>
                </div>
                <div >
                    <div className='h-[480px] overflow-hidden rounded-[14px] hover:rounded-[14px]'>
                        <img src={FaithImg} alt="FaithImg" className='w-full h-[480px] rounded-[14px] object-cover transition duration-300 hover:scale-110' />
                    </div>
                </div>
            </div>
            <div className=' w-[70%] flex justify-center mx-auto xl:mt-[70px] md:mt-[35px] sm:mt-[30px] xsm:mt-[25px] xxxsm:mt-[20px]'>
                <p className='font-fontMedium font-extrabold text-center xl:text-[30px] md:text-[25px] xsm:text-[22px] xxxsm:text-[21px] xl:leading-[45px] md:leading-[35px] xsm:leading-[30px] xxxsm:leading-[28px]'>Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque donec habitasse massa proin semper Pretium pharetra amet blandit sed.</p>
            </div>
        </div>
    )
}

export default FaithConnection