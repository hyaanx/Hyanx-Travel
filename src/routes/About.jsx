import Navbar from "../competence/navbar.jsx";
import Hero from "../competence/Hero.jsx";
import nightImage from "../assets/night.jpg";
import Text from "../competence/aboutText.jsx";
import Footer from "../competence/footer.jsx";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        className="about"
        height="h-[65vh]"
        image={nightImage}
        title="About"
        buttonClass="hidden"
      />
      <Text />
      <Footer height="top-[65vh]" />
    </>
  );
}

export default About;
