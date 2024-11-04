import Leader1 from '../../../../assets/images/communities/community-leader1.webp'
import Leader2 from '../../../../assets/images/communities/community-leader2.webp'
import Leader3 from '../../../../assets/images/communities/community-leader3.webp'
import Leader4 from '../../../../assets/images/communities/community-leader4.webp'

const InnovativeLeaders = () => {
    const innovativeLeadersData = [
        {
            id: 1,
            img: Leader1,
            title: "Andreas Joseph",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 2,
            img: Leader2,
            title: "Paul Anderson",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 3,
            img: Leader3,
            title: "Joseph Kingsley",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
        {
            id: 4,
            img: Leader4,
            title: "Abigail James",
            details: "Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna."
        },
    ]

    return (
        <div className="xl:mx-[75px] lg:mx-[75px] sm:mx-[26px] xxxsm:mx-[15px] my-[115px] ">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center xl:text-[55px] xl:mb-4 md:mb-3 xxxsm:mb-2 md:text-[38px] sm:text-[30px] xxxsm:text-[25px] xl:leading-[65px] md:leading-[45px] sm:leading-[40px] xxxsm:leading-[30px] font-fontMedium font-semibold">Innovative Leaders, Rooted in Christian Values</h2>
                <p className="xl:text-[20px] text-center  md:text-[18px] sm:text-[16px] xxxsm:text-[16px]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xxxsm:grid-cols-1 gap-[25px] mt-[30px]'>
                {
                    innovativeLeadersData.map((item) => {
                        return (
                            <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" key={item.id}>
                                {/* <img src={item.img} className='h-[416px] w-full object-cover overflow-hidden rounded-[10px] mb-2' alt="" /> */}
                            <div key={item.id}>
                                <div className='h-[416px] overflow-hidden rounded-xl hover:rounded-xl'>
                                    <img
                                        src={item.img} className='h-[416px] w-full object-cover overflow-hidden rounded-[10px] mb-2 transition duration-300 hover:scale-110'
                                        alt="Leaders"
                                    />
                                </div>
                                <h3 className='xl:text-[32px] sm:text-[27px] xxxsm:text-[25px] font-fontMedium font-semibold'>{item.title}</h3>
                                <p className='xl:text-[22px] sm:text-[18px] xxxsm:text-[16px]  mt-1'>{item.details}</p>
                            </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default InnovativeLeaders