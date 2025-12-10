import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import list from './navLinks.js';

function Header() {
  const [nav, setNav] = useState(false)
  function handleNav() {
    setNav(!nav)
  }
  return (
    <header className="flex w-[95%] mx-auto mt-5 justify-between px-[25px] py-[15px] bg-white shadow-md rounded-[10px]">
      <div className="logo">
        <h1 className="text-2xl font-semibold">Hyanx</h1>
      </div>
      <div className="links">
        <i
          onClick={handleNav}
          className={`fa-solid ${
            nav ? "fa-xmark" : "fa-bars"
          }  md:hidden! text-[28px] cursor-pointer`}
        ></i>
        <ul
          className={`flex items-center gap-3 *:p-[5px] *:transition *:duration-300 *:ease-linear *:hover:bg-[#16a094] *:hover:text-white *:rounded-[5px] *:cursor-pointer  max-md:shadow-md text-lg font-medium text-gray-700 ${
            nav ? "translate-x-0" : "max-md:-translate-x-[730px]"
          }`}
        >
          {list.map((link, index) => (
            <Link
              onClick={handleNav}
              key={index}
              to={link.path}
              className={`flex items-center gap-2 ${
                link.status === "hidden" ? "md:hidden" : ""
              }`}
            >
              <i className={link.icon}></i> {link.title}
            </Link>
          ))}

          <button className="bg-[#ededed] hover:bg-[#333]! max-md:hidden">
            Sign Up
          </button>
        </ul>
      </div>
    </header>
  );
}

export default Header;
