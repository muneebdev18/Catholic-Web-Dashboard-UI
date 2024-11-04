import FaithConnection from './faithConnection/FaithConnection'
import ExpertSolution from './expertSolution/ExpertSolution'
import EventSlider from '../../../components/eventSlider/EventSlider'
import Slider1 from '../../../assets/images/aboutus/aboutus-slider1.webp'
import Slider2 from '../../../assets/images/aboutus/aboutus-slider2.webp'
import Slider3 from '../../../assets/images/aboutus/aboutus-slider3.webp'
import Slider4 from '../../../assets/images/aboutus/aboutus-slider4.webp'
import Slider5 from '../../../assets/images/aboutus/aboutus-slider5.webp'
import OurMission from './ourMissions/OurMission'
import StartWorking from './startWorking/StartWorking'
import BecomeASeller from '../../../components/becomeASeller/BecomeASeller'
import { useEffect } from 'react'


const AboutUs = () => {
  const successStoriesSlider = [
    {
      id: 1,
      title: "John’s Journey",
      image: Slider1
    },
    {
      id: 2,
      title: "Sarah’s Freelance Story",
      image: Slider2
    },
    {
      id: 3,
      title: "Mark’s Success",
      image: Slider3
    },
    {
      id: 4,
      title: "Maria’s Story",
      image: Slider4
    },
    {
      id: 5,
      title: "David’s Freelancing Career",
      image: Slider5
    },
  ]
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <div className='my-[110px] overflow-x-hidden '>
      <FaithConnection />
      <ExpertSolution />
      <EventSlider viewBtnHide={true} title="Success Stories" subDetails="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt." sliderData={successStoriesSlider} />
      <OurMission />
      <StartWorking />
      <BecomeASeller />
    </div>
  )
}

export default AboutUs