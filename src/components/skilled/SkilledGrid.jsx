import emp1 from '../../assets/images/employees/emp1.webp';
import emp2 from '../../assets/images/employees/emp2.webp';
import emp3 from '../../assets/images/employees/emp3.webp';
import emp4 from '../../assets/images/employees/emp4.webp';
import emp5 from '../../assets/images/employees/emp5.webp';
import emp6 from '../../assets/images/employees/emp6.webp';
import emp7 from '../../assets/images/employees/emp7.webp';
import emp8 from '../../assets/images/employees/emp8.webp';
import facebook from '../../assets/images/icons/fb.png';
import behance from '../../assets/images/icons/be.png';
import pintrest from '../../assets/images/icons/pintrest.png';
import yellowMark from '../../assets/images/icons/yellowMark.png';
import styles from './style.module.css';

const Card = ({ name, role, image, location, socialLinks, featured }) => {
    return (
        <div className="flex flex-col sm:p-4 xxxsm:py-[20px]  rounded-lg">
            <img
                src={image}
                alt={name}
                className="w-full h-64 rounded-lg transition object-cover"
            />
            <div className='flex flex-row justify-between pt-2'>
                <h2 className="xl:text-[32px]  lg:text-[28px] md:text-[20px] sm:text-[26px] xsm:text-[20px] font-fontMedium font-semibold">{name}</h2>
                {featured && (
                    <h3 className="mt-2 font-fontMedium bg-[#A357C4] text-white 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[11px] xsm:text-[9px] px-4 py-1 rounded">
                        Featured
                    </h3>
                )}
            </div>
            <p className=" xl:text-[18px] lg:text-[15px] md:text-[12px] sm:text-[11px] xsm:text-[9px] font-medium text-[#12440D] -mt-1">{role}</p>

            <div className="flex justify-between mt-2 border-[#C3B6A6] border-b-2 pb-4">
                <div className='flex gap-x-1'>
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.url} className="text-xl text-gray-600">
                            <img src={link.icon} className='h-6 w-6' />
                        </a>
                    ))}
                </div>
                <p className="flex font-fontMedium font-[500] text-[18px]"><img src={yellowMark} alt='mark' className='object-contain mr-1' />{location}</p>
            </div>
        </div>
    );
}

const SkilledGrid = () => {
    const profiles = [
        {
            name: "Andreas Joseph",
            role: "Web Developer",
            image: emp8,
            location: "Australia",
            socialLinks: [
                { icon: facebook, url: "/" },
                { icon: behance, url: "/" },
                { icon: pintrest, url: "/" },
            ],
            featured: true,
        },
        {
            name: "Paul Anderson",
            role: "Web Developer",
            image: emp7,
            location: "Australia",
            socialLinks: [
                { icon: facebook, url: "/" },
                { icon: behance, url: "/" },
                { icon: pintrest, url: "/" },
            ],
            featured: false,
        },
        {
            name: "Joseph Kingsley",
            role: "Web Developer",
            image: emp1,
            location: "Australia",
            socialLinks: [
                { icon: facebook, url: "/" },
                { icon: behance, url: "/" },
                { icon: pintrest, url: "/" },
            ],
            featured: false,
        },
        {
            name: "Abigail James",
            role: "Web Developer",
            image: emp2,
            location: "Australia",
            socialLinks: [
                { icon: facebook, url: "/" },
                { icon: behance, url: "/" },
                { icon: pintrest, url: "/" },
            ],
            featured: true,
        },
        {
            name: "Samuel Joseph",
            role: "Web Developer",
            image: emp6,
            location: "Australia",
            socialLinks: [
                { icon: facebook, url: "/" },
                { icon: behance, url: "/" },
                { icon: pintrest, url: "/" },
            ],
            featured: false,
        },
        {
            name: "Gazelle Johanson",
            role: "Web Developer",
            image: emp5,
            location: "Australia",
            socialLinks: [
                { icon: facebook, url: "/" },
                { icon: behance, url: "/" },
                { icon: pintrest, url: "/" },
            ],
            featured: true,
        },
        {
            name: "Andreas Joseph",
            role: "Web Developer",
            image: emp4,
            location: "Australia",
            socialLinks: [
                { icon: facebook, url: "/" },
                { icon: behance, url: "/" },
                { icon: pintrest, url: "/" },
            ],
            featured: false,
        },
        {
            name: "Elizabeth Peterson",
            role: "Web Developer",
            image: emp3,
            location: "Australia",
            socialLinks: [
                { icon: facebook, url: "/" },
                { icon: behance, url: "/" },
                { icon: pintrest, url: "/" },
            ],
            featured: false,
        },
    ]
    return (
        <section className="py-12 md:px-[75px] sm:px-[26px] msm:px-[15px] xxxsm:px-[15px] xxxsm:pb-0">
            <div className="text-center mb-8">
                <h1 className="md:text-[55px] sm:text-[40px] xsm:text-[30px] xxxsm:text-[25px] font-fontMedium font-[600]">Top Catholic Skilled at Your Fingertips!</h1>
                <p className="md:text-[20px] sm:text-[16px] sm:mt-2 xxxsm:text-[14px] xxxsm:mt-4">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>

            <div  data-aos="fade-up" data-aos-duration="1500"  className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 md:gap-6 sm:gap-4">
                {profiles.map((profile, index) => (
                    <Card key={index} {...profile} />
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    className={`${styles.communityBtn} font-fontMedium font-black`}
                >
                    View All
                </button>
            </div>
        </section>
    )
}

export default SkilledGrid;