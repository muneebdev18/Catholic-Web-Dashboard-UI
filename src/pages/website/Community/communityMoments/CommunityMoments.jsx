import community1 from '../../../../assets/images/communities/community-moment1.webp';
import community2 from '../../../../assets/images/communities/community-moment2.webp';
import community3 from '../../../../assets/images/communities/community-moment3.webp';
import community4 from '../../../../assets/images/communities/community-moment4.webp';
import community5 from '../../../../assets/images/communities/community-moment5.webp';
import styles from './style.module.css'
const CommunityMoments = () => {
    return (
        <div className='xl:mx-[26px] lg:mx-[26px] md:mx-[26px] sm:mx-[15px] xxxsm:mx-[15px] bg-[#A357C4] xl:py-[110px] xl:px-[200px] lg:px-[120px] md:px-[70px] sm:px-[30px] xsm:px-[15px] xxxsm:px-[15px] sm:py-[80px] xsm:py-[40px] xxxsm:py-[40px] xl:rounded-[50px] md:rounded-[25px] xsm:rounded-[20px] xxxsm:rounded-[18px] xl:my-[30px] md:my-[30px] xsm:my-[10px] xxxsm:my-[10px]'>
            <div className="grid xl:grid-cols-2 lg:grid-col-2 md:grid-cols-2 xmd:grid-cols-2 sm:grid-col-1 gap-3  rounded-[19px]">
                <div data-aos="fade-right" className={`${styles.hover14}  overflow-hidden rounded-[19px]`} data-aos-duration="2000">
                    <img src={community1} className='w-full h-[450px] object-cover rounded-[10px] transition-transform duration-300 ' alt="" />
                </div>
                <div data-aos="fade-left" className={`${styles.hover14}  overflow-hidden rounded-[19px]`} data-aos-duration="2000">
                    <img src={community2} className='w-full h-[450px] object-cover rounded-[10px] transition-transform duration-300 ' alt="" />
                </div>
            </div>
            <div className="grid xl:grid-cols-3 xmd:grid-cols-2 sm:grid-col-2 gap-3 mt-3">
                <div data-aos="fade-up" className={`${styles.hover14}  overflow-hidden rounded-[19px]`} data-aos-duration="2000">
                    <img src={community3} className='w-full h-[450px] object-cover rounded-[10px] transition-transform duration-300 ' alt="" />
                </div>
                <div data-aos="fade-up" className={`${styles.hover14}  overflow-hidden rounded-[19px]`} data-aos-duration="2000">
                    <img src={community4} className='w-full h-[450px] object-cover rounded-[10px] transition-transform duration-300' alt="" />
                </div>
                <div data-aos="fade-up" className={`${styles.hover14}  overflow-hidden rounded-[19px]`} data-aos-duration="2000">
                    <img src={community5} className='w-full h-[450px] object-cover rounded-[10px] transition-transform duration-300 ' alt="" />
                </div>
            </div>
        </div>
    );
}

export default CommunityMoments;
