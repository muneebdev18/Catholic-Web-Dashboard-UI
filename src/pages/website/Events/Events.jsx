import EventTimeline from './EventTimeline';
import EventSlider from '../../../components/eventSlider/EventSlider';
import BecomeASeller from '../../../components/becomeASeller/BecomeASeller';
import Event1 from '../../../assets/images/events/ev1.webp';
import Event2 from '../../../assets/images/events/ev2.webp';
import Event3 from '../../../assets/images/events/ev3.webp';
import Event4 from '../../../assets/images/events/ev4.webp';
import Event5 from '../../../assets/images/events/ev5.webp';
import { useEffect } from 'react';

const Events = () => {
  const eventsSliderData = [
    {
      title: 'Mission Meetups',
      image: Event1,
      details: 'Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turconse cteturpis magna.'
    },
    {
      title: 'Holy Huddles',
      image: Event2,
      details: 'Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turconse cteturpis magna.'
    },
    {
      title: 'Grace Gatherings',
      image: Event3,
      details: 'Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turconse cteturpis magna.'
    },
    {
      title: 'Fellowship Fest',
      image: Event4,
      details: 'Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turconse cteturpis magna.'
    },
    {
      title: 'Fellowship Fest',
      image: Event5,
      details: 'Lorem ipsum dolor sit amet consectetur. A nisi volutpat non turconse cteturpis magna.'
    }
  ]
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <EventTimeline />
      <EventSlider
        sliderData={eventsSliderData}
        title="Explore Our Previous Events"
        subDetails={"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt."}
        buttonFlag={false}
      />
      <BecomeASeller />
    </>
  )
}

export default Events