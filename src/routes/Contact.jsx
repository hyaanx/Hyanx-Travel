import Navbar from "../competence/navbar.jsx";
import Hero from "../competence/Hero.jsx";
import Image2 from "../assets/2.jpg";
import ContactArea from "../competence/contactArea.jsx";
import Footer from "../competence/footer.jsx";

function Contact() {
 return (
   <>
     <Navbar />
     <Hero
       className="contact"
       height="h-[65vh]"
       image={Image2}
       title="Contact"
       buttonClass="hidden"
     />
      <ContactArea />
      <Footer height="top-[70vh]" />
   </>
 );
}

export default Contact;
