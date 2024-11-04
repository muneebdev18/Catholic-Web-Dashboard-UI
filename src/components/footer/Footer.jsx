import styles from "./style.module.css";
import Logo from "../../assets/images/logos/logo.webp";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
const Footer = () => {
  const isRouteMatch = useMatch('/dashboard/*');

  const handleNewsLetter = (e) => {
    e.preventDefault()
  }

  const quickLinks = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About Us',
      link: '/about'
    },
    {
      title: 'Services',
      link: '/service'
    },
    {
      title: 'Community',
      link: '/community'
    },
    {
      title: 'Events',
      link: '/events'
    },
    {
      title: 'Contact Us',
      link: '/contact-us'
    },
  ]

  const otherLinks = [
    {
      title: 'Privacy Policy',
      link: '/'
    },
    {
      title: 'Terms & Conditions',
      link: '/'
    },
    {
      title: "FAQ's",
      link: '/'
    }
  ]

  return (
    <>
      {isRouteMatch ? '' : (
        <footer className={styles.footerContainer}>
          <div id={styles.footerWrapper} className=" grid  xl:gird-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3  xsm:grid-cols-1 justify-evenly  border border-[#cabfb1] px-[75px] py-[45px]  my-5">
            <div className={`${styles.firstSection}`}>
              <img src={Logo} alt="" className="w-[223px] mb-4" />
              <p onClick={() => window.open('tel://0123456789', '_blank')} className="mb-1">+ 012 345 6789</p>
              <p onClick={() => window.open("mailto://Info@catholicgrapevine.com", "_blank")} className="mb-1">Info@catholicgrapevine.com</p>
              <p
                onClick={() => window.open('https://www.google.com/maps/place/11038+126A+St+%23104,+Surrey,+BC+V3V+3J7,+Canada/data=!4m2!3m1!1s0x5485d822111eef1d:0x3a5a5e38c5a11597?sa=X&ved=1t:242&ictx=111', "_blank")}
                className="mb-1">11038 126 A st unit 104 Surrey BC V3V3J7</p>
            </div>
            <div className={`${styles.secondSection}`}>
              <h1>Quick Links</h1>
              {
                quickLinks?.map((link, index) => (
                  <p key={index}><Link className="mb-1" to={link.link}>{link.title}</Link></p>
                ))
              }
            </div>
            <div className={`${styles.thirdSection}`}>
              <h1>Other Links</h1>
              {
                otherLinks?.map((link, index) => (
                  <p key={index}><Link className="mb-1" to={link.link}>{link.title}</Link></p>
                ))
              }
            </div>
            <div className={`${styles.fourthSection}`}>
              <h1>Community</h1>
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
              <form onSubmit={handleNewsLetter}>
                <input type="text" name="" id="" placeholder="Enter Your Email Address" />
                <button type="submit">Submit Now</button>
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
