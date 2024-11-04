import HomeSlider from "../../../components/homeSlider/HomeSlider";
import EventSlider from "../../../components/eventSlider/EventSlider";
import Faqs from "../../../components/faqs/Faqs";
import CommunitiesGrid from "../../../components/community/CommunitiesGrid";
import PostYourJob from "../../../components/postjob/PostYourJob";
import SkilledGrid from "../../../components/skilled/SkilledGrid";
import WhyChoose from "../../../components/whychoose/WhyChoose";
import PricingPlans from "../../../components/pricingplan/PricingPlans";
import BecomeASeller from "../../../components/becomeASeller/BecomeASeller";
import Collaborate from "../../../components/collaborate/Collaborate";
import Event1 from '../../../assets/images/events/ev1.webp';
import Event2 from '../../../assets/images/events/ev2.webp';
import Event3 from '../../../assets/images/events/ev3.webp';
import Event4 from '../../../assets/images/events/ev4.webp';
import ch1 from '../../../assets/images/communities/ch1.webp';
import ch2 from '../../../assets/images/communities/ch2.webp';
import ch3 from '../../../assets/images/communities/ch3.webp';
import ch4 from '../../../assets/images/communities/ch4.webp';
import ch5 from '../../../assets/images/communities/ch5.webp';
import ch6 from '../../../assets/images/communities/ch6.webp';
import ch7 from '../../../assets/images/communities/ch7.webp';
import ch8 from '../../../assets/images/communities/ch8.webp';
import { useEffect } from "react";

const Home = () => {
  const communitiesData = [
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Online', imageUrl: ch1 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Onsite', imageUrl: ch2 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Onsite', imageUrl: ch3 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Online', imageUrl: ch4 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Online', imageUrl: ch5 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Onsite', imageUrl: ch6 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Onsite', imageUrl: ch7 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Online', imageUrl: ch8 },
  ]

  const eventsSliderData = [
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

  ]

  const faqQuestion = [
    {
      question: "How much does a Shopify website cost?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. A sed pla tea morbi quisque gravida dictum vel. Vesti bulum au gue congue elit aliquam.",
    },
    {
      question: "How does communication work if we start a project?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "Do you have an hourly rate for ADHOC tasks?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How does communication work if we start a project?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, distinctio?",
    },
    {
      question: "How does communication work if we start a project?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How does communication work if we start a project?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How does communication work if we start a project?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How does communication work if we start a project?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, distinctio?",
    },
    {
      question: "How does communication work if we start a project?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How does communication work if we start a project?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },

    // Add more FAQs as needed
  ];
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  

  return (
    <>
      <Collaborate title={"Connect. Create. Collaborate."} />
      <CommunitiesGrid communities={communitiesData} />
      <PostYourJob />
      <SkilledGrid />
      <WhyChoose />
      <PricingPlans />
      <HomeSlider />
      <Faqs faqs={faqQuestion} />
      <EventSlider sliderData={eventsSliderData} title="Explore Our Events" subDetails={"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt."} />
      <BecomeASeller />
    </>
  );
};

export default Home;
