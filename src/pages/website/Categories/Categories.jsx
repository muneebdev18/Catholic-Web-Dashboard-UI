import { useEffect } from "react";
import BecomeASeller from "../../../components/becomeASeller/BecomeASeller";
import Collaborate from "../../../components/collaborate/Collaborate"
import Faqs from "../../../components/faqs/Faqs"
import Tags from "../../../components/tags/Tags";
import ExploreCategories from "./exploreCategories/ExploreCategories"

const Categories = () => {
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
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
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

  return (
    <div>
      <Collaborate title={"Most Popular Services"} isSearchVisible={false} />
      <ExploreCategories />
      <div className='mt-8 xl:rounded-[50px] md:rounded-[35px] xsm:rounded-[28px] xxxsm:rounded-[25px] bg-[#EDE2D4] sm:mx-8 xsm:mx-6 xxsm:mx-2 xxxsm:mx-0'>
        <Faqs faqs={faqQuestion} title="Categories FAQ's" />
      </div>
      <div className="my-[100px]">
        <Tags title={`You might be interested in These Categories`} details={`Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt.`} tags={tagsData} />
      </div>
      <BecomeASeller />
    </div>
  )
}

export default Categories