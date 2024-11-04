import Card1 from '../../../../assets/images/communities/aboutus-start1.webp';
import Card2 from '../../../../assets/images/communities/aboutus-start2.webp';
import Card3 from '../../../../assets/images/communities/aboutus-start3.webp';

const CommunityCardsBanner = () => {
    const startWorkingData = [
        {
            id: 1,
            title: "Identify Your Skills and Niche",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem Ultric es posuer Eod io faucibusut massa.",
            img: Card1
        },
        {
            id: 2,
            title: "Create Your Portfolio and Profile",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem Ultric es posuer Eod io faucibusut massa.",
            img: Card2
        },
        {
            id: 3,
            title: "Publish Your Gigs",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem Ultric es posuer Eod io faucibusut massa.",
            img: Card3
        },
    ]

    return (
        <div className='mx-[75px] lg:mx-[75px] sm:mx-[26px] xxxsm:mx-[15px] -translate-y-[170px] -mb-[40px]'>
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xl:gap-[32px] lg:gap-[25px] md:gap-[20px] sm:gap-y-[50px] xxxsm:gap-y-[45px]'>
                {
                    startWorkingData.map((item) => {
                        return (
                            <div data-aos="fade-up"
                            data-aos-duration="1500" key={item.id}>
                                <div className='rounded-[10px] overflow-hidden w-full'>
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

export default CommunityCardsBanner;