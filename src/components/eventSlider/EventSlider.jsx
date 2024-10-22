import { useState } from 'react';
import Slider from 'react-slick';
import styles from './style.module.css';
import Prev from '../../assets/images/icons/prev-icon-black.png';
import Next from '../../assets/images/icons/next-icon-black.png';
import Event1 from '../../assets/images/events/ev1.webp';
import Event2 from '../../assets/images/events/ev2.webp';
import Event3 from '../../assets/images/events/ev3.webp';
import Event4 from '../../assets/images/events/ev4.webp';

const EventSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const eventsData = [
    {
      title: 'Mission Meetups',
      image: Event1,
    },
    {
      title: 'Holy Huddles',
      image: Event2,
    },
    {
      title: 'Grace Gatherings',
      image: Event3,
    },
    {
      title: 'Fellowship Fest',
      image: Event4,
    },
  ];

  const totalSlides = eventsData.length;

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
    <div className={`${styles.eventSliderContainer} `}>
      <div className="pb-8">
        <div>
          {/* Header */}
          <div className={`${styles.eventSliderWrapper} flex justify-between items-center mb-6`}>
            <h2 className="text-4xl font-bold">Explore Our Events</h2>
            <button className="bg-white border border-black text-black px-6 py-2 rounded-lg">
              View All
            </button>
          </div>

          <p className={`${styles.eventSubTitle} mb-6 text-gray-700`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>

          {/* Slider */}
          <div className="relative">
            <Slider {...settings}>
              {eventsData.map((event, index) => (
                <div data-aos="fade-up" data-aos-duration="1500" key={index} className="px-2">
                  <div className="relative group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full rounded-lg"
                    />
                    <h3 className={`${styles.eventsTitle}`}>{event.title}</h3>
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

  // Show the Next button only if there are more slides to show
  return (
    currentSlide < totalSlides - 3 && ( // Adjust 3 based on slidesToShow
      <div
        onClick={onClick}
        className={`${styles.arrowNextBtnBg} absolute  top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer z-10`}
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
        className={`${styles.arrowPrevBtnBg} absolute  top-1/2 transform -translate-y-1/2 bg-white border p-2 rounded-full cursor-pointer z-10`}
      >
        <img src={Prev} alt="Prev" className={styles.arrowIcon} />
      </div>
    )
  );
}

export default EventSlider;
