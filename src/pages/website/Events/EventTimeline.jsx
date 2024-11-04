import eventUp1 from '../../../assets/images/events/event-up1.webp';
import eventUp2 from '../../../assets/images/events/event-up2.webp';
import eventUp3 from '../../../assets/images/events/event-up3.webp';
import eventCalender from '../../../assets/images/icons/eventCalender.png';
import styles from "./style.module.css";

const EventTimeline = () => {
    const events = [
        {
            id: 1,
            date: 'Wednesday, Nov 13',
            time: '8:30 AM - 11:00 AM',
            title: 'Faith & Freelance Summit',
            description: 'Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque donec habitasse massa proin semper. Pretium pharetra amet blandit sed.Lorem ipsum dolor sit amet consec tetur. A nisi volutpat.',
            imageUrl: eventUp1
        },
        {
            id: 2,
            date: 'Saturday, Oct 28',
            time: '8:30 AM - 11:00 AM',
            title: 'Christian Creatives Conference',
            description: 'Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque donec habitasse massa proin semper. Pretium pharetra amet blandit sed.Lorem ipsum dolor sit amet consec tetur. A nisi volutpat.',
            imageUrl: eventUp2
        },
        {
            id: 3,
            date: 'Monday, Oct 30',
            time: '8:30 AM - 11:00 AM',
            title: 'Faith-Driven Freelancer Workshop',
            description: 'Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turpis magna sit faucibus aliquet lorem. Ultrices posuere odio ut massa. Nullam nec imperdiet in pellentesque donec habitasse massa proin semper. Pretium pharetra amet blandit sed.Lorem ipsum dolor sit amet consec tetur. A nisi volutpat.',
            imageUrl: eventUp3
        },
    ]

    return (
        <section className="lg:mx-[75px] sm:mx-[25px] xxxsm:mx-[15px] py-12">
            <div className="text-center mb-12">
                <h2
                    data-aos="fade-up"
                    className="lg:text-[55px] md:text-[40px] sm:text-[30px] xsm:text-[22px] xxxsm:text-[22px] font-bold mb-2"
                >Upcoming Events</h2>
                <p
                    data-aos="fade-up"
                    className="lg:text-[20px] md:text-[18px] sm:text-[16px] xsm:text-[14px] xxxsm:text-[14px] mx-auto"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>

            <div className="relative">
                <div className="space-y-20 md:ml-16">
                    {events.map(event => (
                        <div key={event.id} className="items-start md:items-center" data-aos="fade-up">
                            <div className="relative">
                                <div className="flex flex-col space-x-2">
                                    <div className='flex flex-row gap-x-4 mb-9'>
                                        <div className="bg-[#EDE2D4] sm:p-4 xsm:p-2 xxxsm:p-2 rounded-lg sm:w-20 xsm:w-12 xxsm:w-12 xxxsm:w-12 my-auto">
                                            <img src={eventCalender} alt="Calendar Icon" className="sm:w-fit xsm:w-7 xxsm:w-7 xxxsm:w-7 m-auto" />
                                            <div className="absolute sm:left-9 xsm:left-6 xxsm:left-4 xxxsm:left-2 sm:top-24 xsm:top-16 xxsm:top-16 xxxsm:top-16 bottom-0 w-[2px] h-[460px] bg-[#B6B6B6]"></div>
                                        </div>
                                        <div>
                                            <p className="md:text-[32px] sm:text-[26px] xsm:text-[22px] xxxsm:text-[20px] font-bold">{event.date}</p>
                                            <p className="md:text-[22px] sm:text-[18px] xsm:text-[16px] xxxsm:text-[16px]">{event.time}</p>
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 lg:gap-x-20">
                                        <div className='sm:pl-20 xsm:pl-9 xxsm:pl-6 xxxsm:pl-4'>
                                            <div className='overflow-hidden rounded-xl hover:rounded-xl'>
                                                <img
                                                    src={event.imageUrl} alt={event.title}
                                                    className="w-full md:h-[372px] sm:h-[302px] object-cover rounded-xl transition duration-300 hover:scale-110"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 lg:pl-0 md:pl-20 sm:pl-20 xsm:pl-9 xxsm:pl-6 xxxsm:pl-4 lg:pt-0 pt-9">
                                            <h3
                                                className="lg:text-[55px] md:text-[40px] sm:text-[30px] xsm:text-[22px] xxxsm:text-[22px] font-bold mb-2 leading-10"
                                            >{event.title}</h3>
                                            <p
                                                className="lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[16px] xxxsm:text-[16px] mb-4 md:leading-10"
                                            >{event.description}</p>
                                            <button className={`${styles.blackBtn} ${styles.yellowBtn}`}>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className={`mx-auto mt-20 ${styles.animateBtn}`} data-aos="fade-up">
                View All
            </button>
        </section>
    )
}

export default EventTimeline;