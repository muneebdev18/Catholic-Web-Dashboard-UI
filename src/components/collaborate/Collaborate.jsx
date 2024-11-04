import styles from "../../pages/website/Home/style.module.css";
import ServiceIcon from "../../assets/images/icons/servicesIcon.png";
import SpeakerIcon from "../../assets/images/icons/speakers.png";
import MinistryIcon from "../../assets/images/icons/Ministers.png";
import EducationIcon from "../../assets/images/icons/education.png";
import MediaIcon from "../../assets/images/icons/Social Media Tips - iconSvg.co.png";
import LogdingIcon from "../../assets/images/icons/lodging.png";
import EventsIcon from "../../assets/images/icons/events.png";
import FundsIcon from "../../assets/images/icons/fundraising.png";
import ProductIcon from "../../assets/images/icons/Product Website Design - iconSvg.co.png";
import VocationIcon from "../../assets/images/icons/Pray For - iconSvg.co.png";
import JobIcon from "../../assets/images/icons/Job-description.png";
import SeekingIcon from "../../assets/images/icons/seeking.png";
import Marker from "../../assets/images/icons/marker.png";

const Collaborate = ({ title, isSearchVisible = true }) => {
    const SERVICE_CARDS = [
        {
            id: 1,
            title: "Services",
            image: ServiceIcon,
        },
        {
            id: 2,
            title: "Speakers",
            image: SpeakerIcon,
        },
        {
            id: 3,
            title: "Ministries",
            image: MinistryIcon,
        },
        {
            id: 4,
            title: "Education",
            image: EducationIcon,
        },
        {
            id: 5,
            title: "Media",
            image: MediaIcon,
        },
        {
            id: 6,
            title: "Lodging",
            image: LogdingIcon,
        },
        {
            id: 7,
            title: "Events",
            image: EventsIcon,
        },
        {
            id: 8,
            title: "Fundraising",
            image: FundsIcon,
        },
        {
            id: 9,
            title: "Products",
            image: ProductIcon,
        },
        {
            id: 10,
            title: "Vocation",
            image: VocationIcon,
        },
        {
            id: 11,
            title: "Job Opportunities",
            image: JobIcon,
        },
        {
            id: 12,
            title: "Seeking Employment",
            image: SeekingIcon,
        }
    ]

    return (
        <>
            <div className={`${styles.headingSection} mt-7`}>
                <p>{title}</p>
            </div>
            {/* Service Cards Section */}
            <div data-aos="fade-up"
                data-aos-duration="1500" className={`${styles.serviceCardSection} `}>
                <div
                    className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 xmd:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 xl:gap-[25px] lg:gap-[25px]
                    msm:gap-[10px] xsm:gap-[10px] msm:mx-[20px] xxsm:mx-[15px] xxxsm:mx-[15px] xxxsm:my-[10px]"
                >
                    {SERVICE_CARDS.map((item) => {
                        return (
                            <>
                                <div
                                    key={item.id}
                                    id={styles.cardContainer}
                                    className="bg-[#f8f0e7] transition hover:bg-[#faebda] hover:-translate-y-4 cursor-pointer flex flex-col justify-center items-center px-[58px] xxsm:px-[40px] pt-[30px] h-[160px] pb-[10px] rounded-xl xxxsm:my-2"
                                >
                                    <img
                                        className={`${styles.cardImg}`}
                                        src={item.image}
                                        alt=""
                                    />
                                    <p className={`${styles.cardTitle}`}>{item.title}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            {/* Search Section */}
            {
                isSearchVisible && (
                    <div
                        className={`${styles.searchWrapper} flex justify-center items-center my-16`}
                    >
                        <div id={styles.searchContainer} className="flex gap-3">
                            <div className="relative border border-[#A357C4] rounded-[4px] py-1">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    id={styles.inputBox}
                                    className="bg-transparent bg-opacity-80  py-[12px] pl-[65px] pr-4 backdrop-blur-md outline-none rounded-bl-[6px] rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] overflow-hidden text-[#494949] placeholder-[#494949]"
                                />
                                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#A357C4] py-[9px] px-[7px] rounded-[6px] overflow-hidden">
                                    <img
                                        src={Marker}
                                        alt="Marker"
                                        className="md:w-[28px] sm:w-[20px] xsm:w-[20px] xxxsm:w-[20px]"
                                    />
                                </div>
                            </div>

                            <button
                                id={styles.searchBtn}
                                className="px-14 py-2 bg-[#A357C4] text-white rounded-md  text-[19px] tracking-wider"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Collaborate;