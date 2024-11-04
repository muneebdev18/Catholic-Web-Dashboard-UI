import { useEffect, useState } from "react";
import { PlusIcon, MinusIcon } from "lucide-react"; // Or use FontAwesome icons
import styles from './style.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

const FAQItem = ({ faq, isOpen, onClick, aosDelay }) => (
  <div
    className="border border-black bg-white rounded-lg mb-6"
    data-aos="fade-up"
    data-aos-delay={aosDelay} // Stagger animation delay
  >
    <button
      id={styles.faqBtn}
      className="w-full flex justify-between items-center text-left"
      onClick={onClick}
    >
      <span className="font-faq">{faq.question}</span>
      {isOpen ? (
        <div className="border border-black p-1 rounded-[3px]">
          <MinusIcon className={styles.addsubIcon} />
        </div>
      ) : (
        <div className="border border-black p-1 rounded-[3px]">
          <PlusIcon className={styles.addsubIcon} />
        </div>
      )}
    </button>
    {isOpen && (
      <div className={`${styles.faqAnswer} py-4 px-6 border-t text-[#333333] border-black`}>
        <p>{faq.answer}</p>
      </div>
    )}
  </div>
);

const Faqs = ({ faqs, title = "Frequently Ask Questions" }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Easing function (optional)
      once: true, // Whether animation should happen only once (optional)
    });
  }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split the FAQ array for left and right columns
  const leftColumnFAQs = faqs?.slice(0, 5); // First 5 FAQs go to the left column
  const rightColumnFAQs = faqs?.slice(5); // Remaining FAQs go to the right column

  return (
    <div className={` ${styles.faqContainer} `}>
      <h2 className="">
        {title}
      </h2>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="grid sm:grid-cols-2 gap-x-6">
        {/* Left Column */}
        <div>
          {leftColumnFAQs?.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Right Column */}
        <div>
          {rightColumnFAQs?.map((faq, index) => (
            <FAQItem
              key={index + 5} // Shift the index for right column to avoid conflicts
              faq={faq}
              isOpen={openIndex === index + 5}
              onClick={() => toggleFAQ(index + 5)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
