import styles from "./style.module.css";
import Logo from "../../assets/images/logos/logo.webp";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
const Footer = () => {
  const isRouteMatch = useMatch('/dashboard/*')
  return (
    <>
    {isRouteMatch ? '' :(
    <footer className={styles.footerContainer}>
      <div id={styles.footerWrapper} className=" grid  xl:gird-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3  xsm:grid-cols-1 justify-evenly  border border-[#cabfb1] px-[75px] py-[45px]  my-5">
        <div className={`${styles.firstSection}`}>
          <img src={Logo} alt="" className="w-[223px] mb-4" />
          <p className="mb-1">+ 012 345 6789</p>
          <p className="mb-1">Info@catholicgrapevine.com</p>
          <p className="mb-1">11038 126 A st unit 104 Surrey BC V3V3J7</p>
        </div>
        <div className={`${styles.secondSection}`}>
          <h1>Quick Links</h1>
          <p className="mb-1"><Link to={"/catholicgrapevine/"}>Home</Link></p>
          <p className="mb-1"><Link to={"/catholicgrapevine/aboutus"}>About Us</Link></p>
          <p className="mb-1"><Link to={"/catholicgrapevine/services"}>Services</Link></p>
          <p className="mb-1"><Link to={"/catholicgrapevine/community"}>Community</Link></p>
          <p className="mb-1"><Link to={"/catholicgrapevine/events"}>Events</Link></p>
          <p className="mb-1"><Link to={"/catholicgrapevine/contactus"}>Contact Us</Link></p>
        </div>
        <div className={`${styles.thirdSection}`}>
          <h1>Other Links</h1>
          <p className="mb-1">Privacy Policy</p>
          <p className="mb-1">Terms & Conditions</p>
          <p className="mb-1">FAQ's</p>
        </div>
        <div className={`${styles.fourthSection}`}>
          <h1>Community </h1>
          <p className="mb-1">Customer Success</p>
          <p className="mb-1">Community Hub</p>
          <p className="mb-1">Events</p>
          <p className="mb-1">Events</p>
          <p className="mb-1">Blog</p>
          <p className="mb-1">Invite a Friend</p>
          <p className="mb-1">Become a Seller</p>
        </div>
        <div className={`${styles.fifthSection}`}>
          <h1>Newsletter</h1>
          <p className="mb-1">Lorem ipsum dolor sit amet consectetur.</p>
          <form action="">
            <input type="text" name="" id="" placeholder="Enter Your Email Address" />
            <button>Submit Now</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© Copyright 2024 <span>|</span> Catholic Grapevine<span>|</span> All Right Reserved.</p>
      </div>
    </footer>
    )}
    </>

  );
};

export default Footer;
