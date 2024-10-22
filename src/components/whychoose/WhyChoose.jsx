import tech1 from '../../assets/images/technologies/tech1.png';
import tech2 from '../../assets/images/technologies/tech2.png';
import tech3 from '../../assets/images/technologies/tech3.png';
import tech4 from '../../assets/images/technologies/tech4.png';
import tech5 from '../../assets/images/technologies/tech5.png';
import tech6 from '../../assets/images/technologies/tech6.png';

const WhyChoose = () => {
    const cardsData = [
        {
            title: "Faith-Based Integrity",
            description: "Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum augue congue elit aliquam. A faucibus vitae ullam corper se mper gravida dictum ve.",
            icon: tech1
        },
        {
            title: "Tailored Matches",
            description: "Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum augue congue elit aliquam. A faucibus vitae ullam corper se mper gravida dictum ve.",
            icon: tech2
        },
        {
            title: "Quality Assurance",
            description: "Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum augue congue elit aliquam. A faucibus vitae ullam corper se mper gravida dictum ve.",
            icon: tech3
        },
        {
            title: "Supportive Network",
            description: "Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum augue congue elit aliquam. A faucibus vitae ullam corper se mper gravida dictum ve.",
            icon: tech4
        },
        {
            title: "Top-Notch Talent",
            description: "Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum augue congue elit aliquam. A faucibus vitae ullam corper se mper gravida dictum ve.",
            icon: tech5
        },
        {
            title: "Trusted Community",
            description: "Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum augue congue elit aliquam. A faucibus vitae ullam corper se mper gravida dictum ve.",
            icon: tech6
        }
    ]

    return (
        <div className="bg-[#e0d4c5] py-[40px] lg:pt-28 sm:pt-14 md:px-[26px] sm:px-[26px] xxxsm:px-[15px]">
            <section className="bg-[#E7DED6] lg:rounded-[50px] md:rounded-[25px] xxxsm:rounded-[15px] xl:px-24 xl:py-24 md:py-10 sm:py-8 xxxsm:py-5 md:px-[40px] sm:px-[26px] xxxsm:px-[15px]  ">
                <div className="mx-auto text-center mb-12">
                    <h2 className="md:text-[55px] sm:text-[40px] xsm:text-[25px] xxxsm:text-[25px] font-bold font-fontMedium text-gray-900">Why Choose Catholic Grapevine</h2>
                    <p className=" md:text-[20px] sm:text-[16px] xsm:text-[12px] xxxsm:text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="grid gap-9 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="card bg-white sm:px-8 xsm:px-6 xxsm:px-4 xxxsm:px-4 pt-6 pb-12 rounded-xl transition-transform duration-300 hover:shadow-2xl hover:translate-y-[-10px]"
                        >
                            <div className="flex mb-4">
                                <div className="rounded-full bg-[#A357C4] p-4 flex transition-colors duration-300 hover:bg-[green]">
                                    <img src={card.icon} className='lg:w-[70px] md:w-[58px] xmd:w-[50px] sm:w-12 xsm:w-11 xxsm:w-9 xxxsm:w-7' />
                                </div>
                            </div>
                            <h3 className="leading-10 lg:text-[40px] md:text-[35px] xmd:text-[35px] sm:text-[25px] xxxsm:text-[19px] font-fontMedium font-extrabold text-gray-900">{card.title}</h3>
                            <p className="mt-2 lg:text-[22px] xmd:text-[22px] sm:text-[18px] xxxsm:text-[14px]">{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default WhyChoose