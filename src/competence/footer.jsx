function Footer(proops) {
    return (
      <footer className={`relative  bg-[#000000] ${proops.height}`}>
        <div className="footer w-[95%] mx-auto pt-8  text-white">
          <div className="head flex justify-between items-center border-b pb-4">
            <div className="row">
              <h2>Hyanx</h2>
              <p>Choose your favourite Destination.</p>
            </div>
            <div className="icons *:h-[30px]! *:w-[30px]! *:bg-white *:text-black *:flex! *:justify-center *:items-center *:text-[20px]  *:cursor-pointer *:rounded-sm flex gap-4">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="footer-links grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 py-8 max-[800px]:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
            <div className="first-col">
              <h1 className="text-[20px] font-semibold mb-2">Project</h1>
              <ul className="grid *:cursor-pointer">
                <li>Changelog</li>
                <li>Statue</li>
                <li>License</li>
                <li>All Versions</li>
              </ul>
            </div>
            <div className="second-col">
              <h1 className="text-[20px] font-semibold mb-2">Community</h1>
              <ul className="grid  *:cursor-pointer">
                <li>GitHub</li>
                <li>Issues</li>
                <li>Project</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div className="third-col">
              <h1 className="text-[20px] font-semibold mb-2">Help</h1>
              <ul className="grid  *:cursor-pointer">
                <li>Support</li>
                <li>Troubleshooting</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="fourth-col">
              <h1 className="text-[20px] font-semibold mb-2">Others</h1>
              <ul className="grid  *:cursor-pointer">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>License</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;