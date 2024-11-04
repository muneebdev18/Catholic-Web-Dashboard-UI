
const InterestedServices = () => {
    const services = [
        'SEO Services',
        'Marketing Strategy',
        'Social Media Marketing',
        'Affiliate Marketing',
        'eCommerce Marketing',
        'Music Promotion',
        'Influencer Marketing',
        'Search Engine Marketing',
        'Shoutouts & Promotions',
        'Music Promotion',
    ]
    return (
        <section
            data-aos="fade-up" data-aos-duration="1500"
            className="lg:mx-[75px] sm:mx-[25px] xxxsm:mx-[15px] py-12"
        >
            <div className="mx-auto text-center">
                <h2 className="xl:text-[63px] lg:text-[50px] md:text-[40px] sm:text-[32px] xsm:text-[20px] xxxsm:text-[16px] font-bold">You might be interested in These Services</h2>
                <p className="mb-8 xl:text-[20px] md:text-[20px] sm:text-[16px] xxxsm:text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                <div
                    className="flex flex-wrap justify-center gap-4"
                >
                    {services.map((service, index) => (
                        <button
                            key={index}
                            data-aos="flip-right"
                            className="bg-[#EDE2D4] text-black font-semibold text-[24px] py-2 px-9 rounded-full shadow-md hover:bg-[#cabfb1] transition"
                        >
                            {service}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InterestedServices;