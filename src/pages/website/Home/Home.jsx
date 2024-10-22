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

const Home = () => {

  return (
    <>
      <Collaborate />
      <CommunitiesGrid />
      <PostYourJob />
      <SkilledGrid />
      <WhyChoose />
      <PricingPlans />
      <HomeSlider />
      <Faqs />
      <EventSlider />
      <BecomeASeller />
    </>
  );
};

export default Home;
