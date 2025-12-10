import DestinationData from "./destinationData";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/8.jpg";
import image4 from "../assets/4.jpg";

function Destination() {
  return (
    <div className="relative top-[96vh] text-center mt-8">
      <h1 className="text-[30px] font-semibold leading-loose">
        Destination Section
      </h1>
      <p className="text-[18px] text-[#1a1a1a]">
        Tours give you the oppurtunity to see a lot,within a time frame.
      </p>
      <DestinationData
        heading="Taal Volcano, Batangas"
        description="Self-driving in gridlocked Manila can be brutal. Skip the trauma on this door-to-door tour of Taal Volcano, one of the Philippines' favorite volcanoes, in a group no larger than 10. Ride a jeepney up to People’s Park in the Sky, an unfinished palace, tour the Aguinaldo Shrine, brave a zipline, and see a record-breaking collection of jigsaw puzzles—all without so much as thinking about parking."
        image1={image1}
        image2={image2}
      />
      <DestinationData
        heading="Mt.Daguldul, Batangas"
        description="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests"
        image1={image3}
        image2={image4}
        order="min-[1125px]:order-2"
      />
    </div>
  );
}

export default Destination;
