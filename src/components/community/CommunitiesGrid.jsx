import styles from './style.module.css';

const CommunitiesGrid = ({ isBtnVisible = true, communities }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="min-h-screen md:px-[75px] sm:px-[26px] xxxsm:px-[15px] md:pb-28 sm:pb-14">
            <div className="text-center mb-12">
                <h2 className="lg:text-[55px] md:text-[40px] sm:text-[30px] xsm:text-[25px] xxxsm:text-[23px] font-fontMedium font-[700] mb-4 xxxsm:mb-2">Communities Near You</h2>
                <p className="text-[#2d2a27] md:text-[20px] sm:text-[14px] xsm:text-[12px] xxxsm:text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 xl:gap-[56px] lg:gap-3 xxxsm:gap-[20px] ">
                {
                    communities.map((community, index) => (
                        <div key={index} className="overflow-hidden">
                            <div className='h-64 overflow-hidden rounded-xl hover:rounded-xl'>
                                <img src={community.imageUrl} alt={community.name} className="w-full h-64 rounded-lg object-cover transition duration-300 hover:scale-110" />
                            </div>
                            <div className='flex flex-row justify-between'>
                                <h2 className="font-bold font-fontMedium md:text-[23px] sm:text-[20px] pt-2">{community.name}</h2>
                                {
                                    community.status && (
                                        <h4 className="mt-2 inline-block px-7 py-1 xmd:h-10 sm:h-9 xsm:h-7 md:text-[20px] sm:text-[16px] xsm:text-[12px] rounded-md bg-[#A357C4] text-white">
                                            {community.status && community.status}
                                        </h4>
                                    )
                                }

                            </div>
                            <p className="text-[20px] leading-6 text-[#2d2a27] mt-2 border-b-[1px] border-[#D9D9D9] pb-4 md:text-[18px] xxxsm:text-[16px]">{community.description}</p>
                        </div>
                    ))
                }
            </div>
            {
                isBtnVisible && (
                    <div className="flex justify-center mb-5 lg:mt-10 sm:mt-5">
                        <button
                            className={`${styles.communityBtn} font-fontMedium font-black`}
                        >
                            View All
                        </button>
                    </div>
                )
            }

        </div>
    );
};

export default CommunitiesGrid;