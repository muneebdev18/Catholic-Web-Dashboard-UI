import service1 from '../../../assets/images/service/service1.webp';
import service2 from '../../../assets/images/service/service2.webp';
import service3 from '../../../assets/images/service/service3.webp';
import service4 from '../../../assets/images/service/service4.webp';
import service5 from '../../../assets/images/service/service5.webp';
import service6 from '../../../assets/images/service/service6.webp';
import service7 from '../../../assets/images/service/service7.webp';
import service8 from '../../../assets/images/service/service8.webp';
import face1 from '../../../assets/images/postJob/face1.webp';
import styles from './style.module.css';

const ServiceCard = () => {
    const services = [
        // Array of services data
        {
            id: 1,
            image: service1,
            name: 'Lord Anderson',
            rating: 4.8,
            reviews: '1k+',
            description: 'I will design unique modern minimalist business logo design',
            priceRange: '20$ - 100$',
        },
        {
            id: 2,
            image: service2,
            name: 'Lord Anderson',
            rating: 4.8,
            reviews: '1k+',
            description: 'I will design unique modern minimalist business logo design',
            priceRange: '20$ - 100$',
        },
        {
            id: 3,
            image: service3,
            name: 'Lord Anderson',
            rating: 4.8,
            reviews: '1k+',
            description: 'I will design unique modern minimalist business logo design',
            priceRange: '20$ - 100$',
        },
        {
            id: 4,
            image: service4,
            name: 'Lord Anderson',
            rating: 4.8,
            reviews: '1k+',
            description: 'I will design unique modern minimalist business logo design',
            priceRange: '20$ - 100$',
        },
        {
            id: 5,
            image: service5,
            name: 'Lord Anderson',
            rating: 4.8,
            reviews: '1k+',
            description: 'I will design unique modern minimalist business logo design',
            priceRange: '20$ - 100$',
        },
        {
            id: 6,
            image: service6,
            name: 'Lord Anderson',
            rating: 4.8,
            reviews: '1k+',
            description: 'I will design unique modern minimalist business logo design',
            priceRange: '20$ - 100$',
        },
        {
            id: 7,
            image: service7,
            name: 'Lord Anderson',
            rating: 4.8,
            reviews: '1k+',
            description: 'I will design unique modern minimalist business logo design',
            priceRange: '20$ - 100$',
        },
        {
            id: 8,
            image: service8,
            name: 'Lord Anderson',
            rating: 4.8,
            reviews: '1k+',
            description: 'I will design unique modern minimalist business logo design',
            priceRange: '20$ - 100$',
        }
    ]

    return (
        <section
            data-aos="fade-up" data-aos-duration="1500"
            className="lg:mx-[75px] md:mx-[60px] sm:mx-[25px] xxxsm:mx-[15px]"
        >
            <div className="mx-auto">
                <div className='text-center'>
                    <h2 className="xl:text-[55px] lg:text-[40px] md:text-[30px] sm:text-[30px] xxxsm:text-[20px] font-faq">Top Catholic Skilled at Your Fingertips!</h2>
                    <p className="mb-8 xl:text-[18px] md:text-[18px] sm:text-[14px] xxxsm:text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-12">
                    {services?.map((service) => (
                        <div key={service.id} className="overflow-hidden">
                            <div className='h-64 overflow-hidden rounded-xl hover:rounded-xl'>
                                <img
                                    src={service.image}
                                    alt={service.description}
                                    className="w-full h-64 transition duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="pt-4 border-b-[1px] border-[#B5B5B5]">
                                <div className="flex mb-2">
                                    <img
                                        src={face1} // Replace with the actual path
                                        alt={service.name}
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    <div className='flex justify-between w-full'>
                                        <p className="xl:text-[20px] sm:text-[20px] xsm:text-[15px] xxxsm:text-[14px] my-auto font-semibold">{service.name}</p>
                                        <div className="flex items-center">
                                            <span className="text-yellow-500 xl:text-[24px] sm:text-[24px] xsm:text-[16px] xxxsm:text-[16px]">★</span>
                                            <span className="text-lg ml-1 xl:text-[20px] sm:text-[20px] xsm:text-[16px] xxxsm:text-[16px]">
                                                <b>{service.rating}</b> <span className='text-[#838383]'>({service.reviews})</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="xl:text-[20px] sm:text-[20px] xsm:text-[16px] xxxsm:text-[16px] leading-7 mb-4">{service.description}</p>
                            </div>
                            <p className="xl:text-[20px] sm:text-[20px] xsm:text-[16px] xxxsm:text-[16px] font-semibold pt-2">From {service.priceRange}</p>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center pt-9 pb-20'>
                    <button
                        className={`${styles.communityBtn} font-fontMedium font-black`}
                    >
                        View All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServiceCard;