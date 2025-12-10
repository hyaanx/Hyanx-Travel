import Navbar from "../competence/navbar.jsx";
import Hero from "../competence/Hero.jsx";
import nightImage from "../assets/night.jpg";
import Trips from "../competence/trips.jsx";
import Footer from "../competence/footer.jsx";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        className="service"
        height="h-[65vh]"
        image={nightImage}
        title="Service"
        buttonClass="hidden"
      />

      <Trips height="top-[55vh]" />
      <Footer height="top-[64vh]" />
    </>
  );
}

export default Service;
