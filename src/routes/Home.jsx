import Navbar from "../competence/navbar.jsx";
import Hero from "../competence/Hero.jsx";
import travelImage from "../assets/trv.png";
import Destination from "../competence/destination.jsx";
import Trips from "../competence/trips.jsx";
import Footer from "../competence/footer.jsx";


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        className="hero"
        height="h-[104vh]"
        image={travelImage}
        title="Your Journey Your Story"
        subtitle="Choose your Favourite destination"
        buttonText="Travel Plan"
      />
      <Destination />
      <Trips height="top-[104vh]"/>
      <Footer height="top-[104vh]"/>
    </>
  );
}

export default Home;
