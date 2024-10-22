import  { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";
import Prev from "../../assets/images/icons/prev-icon.png";
import Next from "../../assets/images/icons/next-icon.png";
import SliderProfile from '../../assets/images/feedbacks/feedback1.webp';

const HomeSlider = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const feedbackData = [
    {
      name: "Amelia Joseph",
      title: "Chief Manager",
      image: SliderProfile, // replace with actual image link
      feedback: "“Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum au gue congue elit aliquam. A faucibus vitae ullam corp er se mper gravida dictum ve.”",
    },
    {
      name: "Gazelle Johanson",
      title: "Chief Manager",
      image: SliderProfile,
      feedback: "Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum au gue congue elit aliquam. A faucibus vitae ullam corp er se mper gravida dictum ve.”",
    },
    {
      name: "Luke James",
      title: "Chief Manager",
      image: SliderProfile,
      feedback: "“Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum au gue congue elit aliquam. A faucibus vitae ullam corp er se mper gravida dictum ve.”",
    },
  ];

  return (
    <div className={`${styles.homeSliderContainer} `}>
      <div className={`${styles.homeSliderWrapper} `}>
        <div className="">
          <div
            className={`${styles.sliderUpperWrapper} flex justify-between items-center mb-4`}
          >
            <h2>Our Community Feedback</h2>
            <div className="flex gap-x-[14px]">
              {/* These buttons will control the slider */}
              <button onClick={() => sliderRef.current.slickPrev()}>
                <SamplePrevArrow />
              </button>
              <button onClick={() => sliderRef.current.slickNext()}>
                <SampleNextArrow />
              </button>
            </div>
          </div>
          <p id={styles.subHeadingSlider} className="text-white  mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>

          {/* Attach the ref to the Slider component */}
          <Slider ref={sliderRef} {...settings}>
            {feedbackData.map((item, index) => (
              <div data-aos="fade-up" data-aos-duration="1500" id={styles.sliderCardContainer} key={index} className="px-4">
                <div id={styles.sliderCardWrapper} className="bg-white rounded-[16px] p-6 shadow-md">
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-full w-16 h-16  mb-4"
                    />
                    <div className="flex flex-col">
                      <h3 className={`${styles.sliderProfileName}`}>
                        {item.name}
                      </h3>
                    
                    <p className={`${styles.sliderProfileTitle}`}>{item.title}</p>
                    </div>
                  </div>
                  <p className={`${styles.sliderProfileFeedback}`}>
                    {item.feedback}
                  </p>
                  <div className="">
                    <span className="text-[#ECB202] " id={styles.ratingSlider}>★★★★★</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

function SampleNextArrow() {
  return (
    <div className={` ${styles.arrowBtn}`}>
      {/* <span className="text-white text-xl">{'>'}</span> */}
      <img src={Next} alt="" />
    </div>
  );
}

function SamplePrevArrow() {
  return (
    <div className={styles.arrowBtn}>
      {/* <span className="text-white text-xl">{'<'}</span> */}
      <img src={Prev} alt="" />
    </div>
  );
}

export default HomeSlider;
