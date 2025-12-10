import './destinationData.css';


function DestinationData(props) {
  return (
    <div className="first-des flex items-center justify-around w-[95%] mx-auto gap-7 mt-10">
      <div className={`des-text text-start w-[50%] ${props.order}`} >
        <h1 className="text-[30px] font-semibold leading-loose">
          {props.heading}
        </h1>
        <p className="font-medium text-[#343a40] min-w-[400px]">
          {props.description}
        </p>
      </div>
      <div className="des-images *:w-[300px] *:h-[350px] flex gap-5">
        <div className="img-1">
          <img
            src={props.image1}
            alt=""
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
        <div className="img-2 relative top-[45px]">
          <img
            src={props.image2}
            alt=""
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
}

export default DestinationData;
