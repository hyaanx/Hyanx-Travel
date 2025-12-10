import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image10 from "../assets/10.jpg";

function Trips(props) {
  return (
    <div
      className={`trips relative mb-6 mt-[70px] text-center w-[80%] max-[965px]:w-[95%] mx-auto ${props.height}`}
    >
      <h1 className="text-[30px] font-semibold">Recent Trips</h1>
      <p className="text-[18px] text-[#1a1a1a]">
        You can discover unique destinations.
      </p>
      <div className="cards grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-10 mt-8">
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <div className="image overflow-hidden rounded-[10px] mb-4">
            <img
              src={image5}
              alt="Trip 1"
              className="w-full h-[250px] object-cover transition duration-300 ease-in-out transform hover:scale-[1.3]  max-[965px]:h-auto"
            />
          </div>
          <div className="trip-text text-start grid gap-2">
            <h1 className="text-[20px] font-semibold">Trip in Indonesia</h1>
            <p className="text-[15px] text-[#393333]">
              Indonesia,officially the Republic of Indonesia,is a country in
              Southeast Asia and Oceania between the Indian and Pacific
              oceans.It consits of over 17,000 islands,including Sumatra ,Java
              ,Sulawesiand parts of Borneo and New Guinea.Both nature and
              culture are major components of Indonesian tourism.These natural
              attractions are complemented by a rich cultural heritage that
              reflects Indonesia's dynamic history and ethnic diversity
            </p>
          </div>
        </div>
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <div className="image overflow-hidden rounded-[10px] mb-4">
            <img
              src={image10}
              alt="Trip 1"
              className="w-full h-[250px] object-cover transition duration-300 ease-in-out transform hover:scale-[1.3] max-[965px]:h-auto"
            />
          </div>
          <div className="trip-text text-start grid gap-2">
            <h1 className="text-[20px] font-semibold">Trip in Indonesia</h1>
            <p className="text-[15px] text-[#393333]">
              Indonesia,officially the Republic of Indonesia,is a country in
              Southeast Asia and Oceania between the Indian and Pacific
              oceans.It consits of over 17,000 islands,including Sumatra ,Java
              ,Sulawesiand parts of Borneo and New Guinea.Both nature and
              culture are major components of Indonesian tourism.These natural
              attractions are complemented by a rich cultural heritage that
              reflects Indonesia's dynamic history and ethnic diversity
            </p>
          </div>
        </div>
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <div className="image overflow-hidden rounded-[10px] mb-4">
            <img
              src={image6}
              alt="Trip 1"
              className="w-full h-[250px] object-cover transition duration-300 ease-in-out transform hover:scale-[1.3] max-[965px]:h-auto"
            />
          </div>
          <div className="trip-text text-start grid gap-2">
            <h1 className="text-[20px] font-semibold">Trip in Indonesia</h1>
            <p className="text-[15px] text-[#393333]">
              Indonesia,officially the Republic of Indonesia,is a country in
              Southeast Asia and Oceania between the Indian and Pacific
              oceans.It consits of over 17,000 islands,including Sumatra ,Java
              ,Sulawesiand parts of Borneo and New Guinea.Both nature and
              culture are major components of Indonesian tourism.These natural
              attractions are complemented by a rich cultural heritage that
              reflects Indonesia's dynamic history and ethnic diversity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;
