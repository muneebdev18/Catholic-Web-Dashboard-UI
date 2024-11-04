import { useState } from 'react';
import Slider from 'react-slick';
import styles from './style.module.css';
import Prev from '../../assets/images/icons/prev-icon-black.png';
import Next from '../../assets/images/icons/next-icon-black.png';

const EventSlider = ({ title, subDetails, viewBtnHide, sliderData, buttonFlag = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = sliderData.length;

  const settings = {
    infinite: false, // No infinite scrolling
    speed: 500,
    slidesToShow: 3, // Show 3 slides on large screens
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow currentSlide={currentSlide} totalSlides={totalSlides} />,
    prevArrow: <SamplePrevArrow currentSlide={currentSlide} />,
    afterChange: (index) => setCurrentSlide(index), // Update the current slide index
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <div className={`${styles.eventSliderContainer} ${!buttonFlag && "bg-[#12440D] xl:mx-[26px] lg:mx-[26px] md:mx-[26px] sm:mx-[15px] xxxsm:mx-[15px] rounded-3xl  text-white xl:py-20 sm:py-10 xxxsm:py-5"}`}>
      <div className="pb-8">
        <div>
          {/* Header */}
          <div className={`${styles.eventSliderWrapper} ${buttonFlag ? "flex justify-between items-center" : "mx-auto text-center"}`}>
            <div>
              <h2>{title}</h2>
              <p className={`${styles.eventSubTitle} mb-6 ${buttonFlag ? "text-gray-700" : "text-[#d0dacf]"}`}>
                {subDetails}
              </p>
            </div>
            {
              buttonFlag && (
                <button className={`${viewBtnHide && "hidden"} bg-white border border-black text-black px-6 py-2 rounded-lg`}>
                  View All
                </button>
              )
            }
          </div>
          {/* Slider */}
          <div className="relative">
            <Slider {...settings}>
              {sliderData.map((event, index) => (
                <div data-aos="fade-up" data-aos-duration="1500" key={index} className="px-2">
                  <div className="relative group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full rounded-lg"
                    />
                    <h3 className={`${styles.eventsTitle}`}>{event.title}</h3>
                    {
                      !buttonFlag && (
                        <p className='w-11/12 text-[#d0dacf] xl:text-[22px] sm:text-[18px] xxxsm:text-[16px]'>{event.details}</p>
                      )
                    }
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Next Arrow
function SampleNextArrow(props) {
  const { onClick, currentSlide, totalSlides } = props;

  return (
    currentSlide < totalSlides - 3 && ( // Adjust 3 based on slidesToShow
      <div
        onClick={onClick}
        className={`${styles.arrowNextBtnBg} transform bg-white p-2 rounded-full cursor-pointer z-10`}
      >
        <img src={Next} alt="Next" className={styles.arrowIcon} />
      </div>
    )
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props) {
  const { onClick, currentSlide } = props;

  // Show the Previous button only if not on the first slide
  return (
    currentSlide > 0 && ( // Show Prev button only if not on the first slide
      <div
        onClick={onClick}
        className={`${styles.arrowPrevBtnBg} transform bg-white border p-2 rounded-full cursor-pointer z-10`}
      >
        <img src={Prev} alt="Prev" className={styles.arrowIcon} />
      </div>
    )
  );
}

export default EventSlider;
