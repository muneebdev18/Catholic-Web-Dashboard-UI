import Collaborate from '../../../components/collaborate/Collaborate';
import ServiceCard from "./ServiceCard";
import Faqs from "../../../components/faqs/Faqs";
import BecomeASeller from '../../../components/becomeASeller/BecomeASeller';
import Tags from '../../../components/tags/Tags';
import { useEffect } from 'react';

const Service = () => {
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
  const tagsData = [
    'SEO Services',
    'Marketing Strategy',
    'Social Media Marketing',
    'Affiliate Marketing',
    'eCommerce Marketing',
    'Music Promotion',
    'Influencer Marketing',
    'Search Engine Marketing',
    'Shoutouts & Promotions',
    'Music Promotion',
  ]
useEffect(()=>{
  window.scroll(0,0)
},[])
  return (
    <>
      <Collaborate title={"Most Popular Services"} />
      <ServiceCard />
      <div className='mt-9  bg-[#EDE2D4] xl:mx-[26px] lg:mx-[26px] md:mx-[26px] sm:mx-[15px] xxxsm:mx-[15px] xl:rounded-[50px] md:rounded-[25px] xsm:rounded-[20px] xxxsm:rounded-[18px]'>
        <Faqs faqs={faqQuestion} title="Services FAQ's" />
      </div>
      <Tags title={`You might be interested in These Services`} details={`Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt.`} tags={tagsData}  />
      <BecomeASeller />
    </>
  )
}

export default Service;