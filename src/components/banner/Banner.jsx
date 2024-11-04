import styles from '../navbar/style.module.css';

const Banner = ({ image, title, details, imageClass }) => {
    return (
        <div className="px-[20px] lg:px-[108px] xl:pt-28 lg:pt-28 md:pt-[130px] sm:pt-0 xxxsm:pt-0 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-[100%] justify-between lg:items-center">
                {/* Left side: Text content */}
                <div className="lg:pr-[40px]">
                    <h1
                        style={{ fontStretch: "condensed" }}
                        className="xl:text-[98px] lg:text-[75px] md:text-[60px] sm:text-[35px] xsm:text-[25px] xxxsm:text-[25px] leading-[85px] font-fontMedium font-semibold lg:mb-[20px]"
                    >{title}</h1>
                    <p className="text-[16px] lg:text-[22px] md:text-[18px] sm:text-[14px] text-[#000000] font-fontMedium ">
                        {details}
                    </p>
                </div>
                {/* Right side: Image content */}
                <div className={`${styles.BannerleftImg}`}>
                    <img src={image} alt="aboutus" className={imageClass} />
                </div>
            </div>
        </div>
    )
}

export default Banner;