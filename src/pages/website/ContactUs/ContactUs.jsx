import { useEffect } from "react"
import ContactForm from "./contactForm/ContactForm"

const ContactUs = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <div>
      <ContactForm/>
    </div>
  )
}

export default ContactUs