function ContactArea() { 
    return (
      <div className="relative top-[65vh] w-[95%] mx-auto">
        <h1 className="text-center text-[30px] font-semibold">
          Send a message to us!
        </h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-gray-300 rounded-md p-2 w-[48%] max-md:w-full mt-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 border-gray-300 rounded-md p-2 w-[48%] max-md:w-full mt-4 md:ml-4"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="border-2 border-gray-300 rounded-md p-2 w-[98%] mt-4"
          />
          <br />
          <textarea
            placeholder="Your Message"
            className="border-2 border-gray-300 rounded-md p-2 w-[98%] mt-4 h-[150px]"
          ></textarea>
          <br />
          <button className="bg-[#adadada3]  cursor-pointer font-semibold transition duration-300 ease-linear py-2 w-full rounded-md mt-4 hover:bg-black hover:text-white">
            Send Message
          </button>
        </div>
      </div>
    );
}

export default ContactArea;