import ExpertImg from '../../../../assets/images/aboutus/aboutus-2.webp';

const ExpertSolution = () => {
  return (
    <div className='xl:mx-[26px] lg:mx-[26px] md:mx-[26px] sm:mx-[15px] xxxsm:mx-[15px] bg-[#12440D] xl:py-[133px] xl:px-[80px] xsm:px-[30px] xxxsm:px-[20px] sm:py-[80px] xsm:py-[60px] xxxsm:py-[40px] xl:rounded-[50px] md:rounded-[35px] xsm:rounded-[28px] xxxsm:rounded-[25px] mt-[110px]'>
      <div className='grid  lg:grid-cols-2 sm:grid-cols-1 xl:gap-[60px] sm:gap-[40px] xxxsm:gap-[30px] items-center'>
        <div data-aos="fade-right"
          data-aos-duration="500"
          >
          <div className=' overflow-hidden rounded-xl hover:rounded-xl'>
            <img src={ExpertImg} alt="Expert" className='w-full rounded-[15px] 3xl:h-[640px] sm:h-[400px] xxxsm:h-[350px]  object-cover transition duration-300 hover:scale-110' />
          </div>

        </div>
        <div data-aos="fade-left"
        data-aos-offset="0"
          data-aos-duration="500"
          className='text-white'>
          <h2 className='text-white 2xl:text-[85px] xl:text-[75px] lg:text-[70px] md:text-[60px] sm:text-[50px] xsm:text-[30px] xxxsm:text-[25px]  font-fontMedium font-semibold xl:leading-[85px] lg:leading-[70px] md:leading-[60px] sm:leading-[55px] xsm:leading-[45px] xxsm:leading-[38px] mb-[25px] tracking-[3px]'>Expert Solutions, Delivered by Christian Freelancers</h2>
          <p className='xl:text-22px md:text-[20px] sm:text-[18px] xxxsm:text-[16px] xl:leading-[42px] md:leading-[35px] sm:leading-[30px] xxxsm:leading-[28px]'>Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque donec habitasse massa proin semper. Pretium pharetra amet blandit sed.Lorem ipsum dolor sit amet consec tetur. A nisi volutpat.Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem. Ultrices posuere odio ut massa.</p>
        </div>
      </div>
    </div>
  )
}

export default ExpertSolution