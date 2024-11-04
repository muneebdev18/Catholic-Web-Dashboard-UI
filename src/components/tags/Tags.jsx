
const Tags = ({ title, details, tags }) => {

    return (
        <section
            data-aos="fade-up" data-aos-duration="1500"
            className="lg:mx-[75px] sm:mx-[25px] xxxsm:mx-[15px] py-12"
        >
            <div className="mx-auto text-center">
                <h2 className="xl:text-[63px] lg:text-[50px] md:text-[40px] sm:text-[32px] xsm:text-[20px] xxxsm:text-[16px] font-bold">{title}</h2>
                <p className="mb-8 xl:text-[20px] md:text-[20px] sm:text-[16px] xxxsm:text-[14px]">
                    {details}
                </p>
                <div
                    className="flex flex-wrap justify-center gap-4"
                >
                    {tags.map((item, index) => (
                        <button
                            key={index}
                            data-aos="flip-right"
                            className="bg-[#EDE2D4] text-black font-semibold xl:text-[24px] md:text-[20px] sm:text-[18px] xxxsm:text-[16px] py-2 px-9 rounded-full shadow-md hover:bg-[#cabfb1] transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tags;