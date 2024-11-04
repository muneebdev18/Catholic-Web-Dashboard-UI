import styles from './styles.module.css';
import Start1 from '../../../../assets/images/aboutus/aboutus-start1.webp'
import Start2 from '../../../../assets/images/aboutus/aboutus-start2.webp'
import Start3 from '../../../../assets/images/aboutus/aboutus-start3.webp'

const StartWorking = () => {
    const startWorkingData = [
        {
            id: 1,
            title: "Identify Your Skills and Niche",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem Ultric es posuer Eod io faucibusut massa.",
            img: Start1
        },
        {
            id: 2,
            title: "Create Your Portfolio and Profile",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem Ultric es posuer Eod io faucibusut massa.",
            img: Start2
        },
        {
            id: 3,
            title: "Publish Your Gigs",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem Ultric es posuer Eod io faucibusut massa.",
            img: Start3
        },
    ]
    return (
        <div className='mx-[75px] lg:mx-[75px] sm:mx-[26px] xxxsm:mx-[15px] my-[110px]'>
            <div className='flex xl:flex-row sm:flex-row msm:flex-col xxxsm:flex-col xl:justify-between sm:justify-between msm:justify-center xxxsm:justify-center xl:items-end sm:items-end msm:items-center xxxsm:items-center xl:mb-[55px] sm:mb-[50px] msm:gap-y-[10px] xxxsm:gap-y-[10px]'>
                <h1 className='xl:text-[85px] lg:text-[70px]  md:text-[55px] sm:text-[40px] xsm:text-[40px] xxxsm:text-[30px] xl:leading-[85px] md:leading-[65px] sm:leading-[50px] xsm:leading-[40px] xxxsm:leading-[30px] flex flex-col font-fontMedium font-semibold'>How To Start Working<span>On Catholic Grapevine</span></h1>
                <button className={styles.getStartBtn}> Get Started</button>
            </div>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xl:gap-[32px] lg:gap-[25px] md:gap-[20px] sm:gap-y-[50px] xxxsm:gap-y-[45px]'>
                {
                    startWorkingData.map((item) => {
                        return (
                            <div data-aos="fade-up"
                                data-aos-offset="300"
                                data-aos-duration="500" key={item.id}>
                                <div className='overflow-hidden rounded-xl hover:rounded-xl'>
                                    <img src={item.img} alt="" className='w-full h-[370px] object-cover transition duration-300 hover:scale-110' />
                                </div>
                                <h5 className='xl:text-[35px] sm:text-[30px] xxxsm:text-[25px] font-fontMedium font-semibold leading-[32px] mt-[24px]'>{item.title}</h5>
                                <p className='xl:text-[22px] sm:text-[20px] xxxsm:text-[17px] xl:leading-[36px] sm:leading-[30px] xxxsm:leading-[27px] mt-[12px]'>{item.details}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default StartWorking