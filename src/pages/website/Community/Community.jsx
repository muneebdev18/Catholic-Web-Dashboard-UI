import CommunitiesGrid from "../../../components/community/CommunitiesGrid"
import CommunityCardsBanner from "./communityCardsBanner/CommunityCardsBanner"
import ch1 from '../../../assets/images/communities/ch1.webp';
import ch2 from '../../../assets/images/communities/ch2.webp';
import ch3 from '../../../assets/images/communities/ch3.webp';
import ch4 from '../../../assets/images/communities/ch4.webp';
import ch5 from '../../../assets/images/communities/ch5.webp';
import ch6 from '../../../assets/images/communities/ch6.webp';
import ch7 from '../../../assets/images/communities/ch7.webp';
import ch8 from '../../../assets/images/communities/ch8.webp';
import CommunityMoments from "./communityMoments/CommunityMoments";
import InnovativeLeaders from "./innovativeLeaders/InnovativeLeaders";
import BecomeASeller from "../../../components/becomeASeller/BecomeASeller";
import { useEffect } from "react";

const Community = () => {
  const communitiesData = [
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Online', imageUrl: ch1 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Onsite', imageUrl: ch2 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', status: 'Onsite', imageUrl: ch3 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', imageUrl: ch4 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', imageUrl: ch8 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', imageUrl: ch7 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', imageUrl: ch6 },
    { name: 'Community Name', description: 'I will design unique modern minimalist business logo design', imageUrl: ch5 },
  ]
  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <div className="">
      <CommunityCardsBanner />
      <CommunitiesGrid isBtnVisible={false} communities={communitiesData} />
      <CommunityMoments />
      <InnovativeLeaders />
      <BecomeASeller />
    </div>
  )
}

export default Community