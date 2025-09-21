import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2, TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold">
          Fre<span className="text-orange-500 uppercase">s</span>hify
        </a>

        {/* Desktop menu */}
        <ul className="md:flex items-center gap-x-12 hidden">
          <li>
            <a href="#" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav actions */}
        <div className="flex items-center gap-x-5">
          {/* Desktop Search */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              placeholder="search..."
              autoComplete="off"
              className="h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoIosSearch />
            </button>
          </div>

          {/* Icons */}
          <a href="#" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <HiMiniShoppingBag />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="text-zinc-800 text-3xl md:hidden focus:outline-none"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          className={`flex flex-col gap-y-8 bg-orange-500/15 backdrop-blur-xl rounded-xl p-8 items-center md:hidden absolute top-[90px] left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            showMenu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <li>
            <a href="#" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>

          {/* Mobile search */}
          <li className="flex p-1 border-2 border-orange-500 rounded-full w-full max-w-[250px]">
            <input
              type="text"
              placeholder="search..."
              autoComplete="off"
              className="flex-1 px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoIosSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
