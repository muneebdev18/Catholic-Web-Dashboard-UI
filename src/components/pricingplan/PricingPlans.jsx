import popular from '../../assets/images/icons/popular.png';
import style from './style.module.css';

const PricingPlans = () => {
    const plans = [
        {
            title: 'Basic Plan',
            price: '$349',
            frequency: 'Monthly',
            description: 'For individuals or small businesses starting.',
            features: [
                'Post up to 5 jobs per month',
                'Access to a limited pool of freelancers',
                'Basic search and filtering options',
                '1 revision request per project',
                'Standard support',
                'Featured listing for 1 job per month',
            ],
            bestFor: 'Small projects or occasional hiring needs.',
            popular: false,
        },
        {
            title: 'Standard Plan',
            price: '$699',
            frequency: 'Monthly',
            description: 'For growing businesses with more frequent hiring needs.',
            features: [
                'Post up to 15 jobs per month',
                'Access to the full pool of freelancers',
                'Advanced search and filtering options',
                '3 revision requests per project',
                'Priority support',
                'Featured listing for 3 jobs per month',
                'Post up to 15 jobs per month',
                'Access to the full pool of freelancers',
                'Advanced search and filtering options',
                '3 revision requests per project',
                'Priority support',
                'Featured listing for 3 jobs per month',
            ],
            bestFor: 'Businesses with regular freelance needs.',
            popular: true,
        },
        {
            title: 'Pro Plan',
            price: '$1200',
            frequency: 'Monthly',
            description: 'For large businesses or organizations.',
            features: [
                'Unlimited job posts',
                'Access to top-rated freelancers',
                'Advanced search, filtering, and AI job matching',
                'Unlimited revision requests',
                'Unlimited job posts',
                'Access to top-rated freelancers',
                'Advanced search, filtering, and AI job matching',
                'Unlimited revision requests',
                'Unlimited job posts',
                'Access to top-rated freelancers',
                'Advanced search, filtering, and AI job matching',
                'Unlimited revision requests',
            ],
            bestFor: 'Larger organizations with ongoing projects.',
            popular: false,
        },
    ]

    return (
        <div className=" sm:py-20 xsm:py-16 xxsm:py-12 xxxsm:py-8 md:px-[75px] sm:px-[26px] xsm:px-[15px]  xxxsm:px-[15px]">
            <h2 className="xmd:leading-[50px] sm:leading-[30px] xxxsm:leading-[30px] text-center lg:text-[55px] md:text-[45px] font-fontMedium sm:text-[35px] xxxsm:text-[25px] font-semibold mb-2">Choose a Plan That Fits Your Budget and Goals!</h2>
            <p className="text-center xl:text-[20px] md:text-[18px]  sm:text-[16x] xxxsm:text-[15px] font-[400] mb-8 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

            <div data-aos="fade-up" data-aos-duration="1500" className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 xmd:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 md:gap-12 xsm:gap-7 xxxsm:gap-5 ">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-lg rounded-3xl w-full flex flex-col"
                    >
                        {plan.popular && (
                            <img src={popular} alt='popular' className='absolute -left-3 top-5 w-8' />
                        )}
                        <div className='bg-[#A357C4] xsm:py-8 xxsm:py-6 xxxsm:py-4 sm:px-12 xsm:px-9 xxsm:px-8 xxxsm:px-6 rounded-3xl sm:rounded-[19px] xxxsm:rounded-[15px] text-white 2xl:h-64 md:h-64 xmd:h-48 sm:h-48 xsm:h-44 xxsm:h-40 xxxsm:h-36 mb-2'>
                            <h3 className="text-[#ECB202] lg:text-[24px] md:text-[20px] uppercase font-fontMedium">{plan.title}</h3>
                            <p className="font-fontMedium xl:text-[80px] lg:text-[60px] md:text-[50px] xmd:text-[30px] sm:text-[40px] xsm:text-[20px] xxsm:text-[20px] xxxsm:text-[20px] font-bold sm:-mt-4 xsm:-mt-1 xxxsm:-mt-1">{plan.price}
                                <span className="2xl:text-[40px] xl:text-[37px] lg:text-[35px] md:text-[32px] xmd:text-[30px] sm:text-[35px] xsm:text-[20px] font-medium">/{plan.frequency}</span>
                            </p>
                            <p className=" sm:leading-[30px] xsm:leading-[20px] xxsm:leading-[25px] text-[#edddf3] mb-4 font-normal text-[20px]">{plan.description}</p>
                        </div>

                        <div className='pr-6'>
                            <h1 className='lg:text-[40px] font-fontMedium px-12 font-semibold md:text-[30px]  xxxsm:text-[25px] sm:px-12  xxxsm:px-6'>Features:</h1>
                            <div className="sm:h-[350px] xsm:h-[240px] xxsm:h-64 xxxsm:h-56 lg:px-12  rounded-lg sm:px-12  xxxsm:px-6 overflow-y-auto custom-scrollbar">
                                <ul className="2xl:space-y-6 md:space-y-6 xmd:space-y-3 xxsm:space-y-2 xxxsm:space-y-1 list-disc pl-4 pt-4">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className='font-medium font-fontMedium sm:text-[20px] xsm:text-[16px]'>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='bg-[#f3f6f3] px-2 py-2 rounded-3xl sm:rounded-[20px] xxxsm:rounded-[15px]'>
                            <p className="mt-4 lg:text-[21px] md:text-[21px] xmd:text-[16px] xxxsm:text-[15px] mx-6 pb-6"><b>Best For:</b> <span className='text-[#515151]'>{plan.bestFor}</span></p>
                            <button
                                className={style.customButton}>
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingPlans;