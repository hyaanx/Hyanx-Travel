const list = [
    { title: 'Home', path: '/', icon: "fa-solid fa-house" },
    { title: 'About', path: '/about', icon: "fa-solid fa-circle-info" },
    { title: 'Services', path: '/services', icon: "fa-solid fa-briefcase" },
    { title: 'Contact', path: '/contact', icon: "fa-solid fa-address-book" },
    { title: 'Sign Up', path: '/signup', icon: "fa-solid fa-user-plus", status: 'hidden' },
];

export default list;


        //   <Link className="home" to="/">
        //     <i className="fa-solid fa-house"></i> Home
        //   </Link>
        //   <Link className="about" to="/about">
        //     <i className="fa-solid fa-circle-info"></i> About
        //   </Link>
        //   <Link className="service" to="/service">
        //     <i className="fa-solid fa-briefcase"></i> Service
        //   </Link>
        //   <Link className="contact" to="/contact">
        //     <i className="fa-solid fa-address-book"></i> Contact
        //   </Link>
        //   <Link className="hidden signup" to="/signup">
        //     <i className="fa-solid fa-user-plus"></i> Sign Up
        //   </Link>
