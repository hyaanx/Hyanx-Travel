import "./hero.css";

function Hero(props) {
  return (
    <div
      className={`${props.className} absolute  ${props.height} w-full -top-[25px] -z-5`}
    >
      <img
        className="h-full w-full object-cover object-bottom-left"
        src={props.image}
        alt=""
      />
      <div className="info grid absolute w-full top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center gap-6">
        <h2>{props.title}</h2>
        <p className="text-[20px] text-white">{props.subtitle}</p>
        <a
          href="/"
          className={`${props.buttonClass} bg-white w-fit mx-auto px-5 py-2 rounded-lg text-[18px] font-semibold cursor-pointer`}
        >
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}

export default Hero;
