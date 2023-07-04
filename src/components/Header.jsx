import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRoutes } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../assets/Tomatrix Logo(1).png";

const Header = () => {
  // const router = useRoutes()
  const control = useAnimation();
  const [ref, inView] = useInView();

  const [nav, setNav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [bgColor, setBgColor] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  function changeNavbarBackgroundColor() {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  window.addEventListener("scroll", changeNavbarBackgroundColor);

  // MOTION FRAMER
  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <div
      className={
        bgColor ? ` w-full fixed bg-red-200 shadow z-[100]` : `shadow fixed w-full h-20 z-[100]`
      }
      // style={{ background: `${navBg}` }}
    >
      <div className="flex justify-between items-center w-full px-5 pt-3 2xl:px-16">
        <Link to="/">
          <img src={Logo} alt="/" width="70" height="50" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm font-bold uppercase hover:border-b headers">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-10 text-sm font-semibold uppercase hover:border-b headers">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="ml-10 text-sm font-semibold uppercase hover:border-b headers">
              <Link to="/#skills">Contact Us</Link>
            </li>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu
              className="cursor-pointer"
              style={{ color: `${linkColor}` }}
              size={25}
            />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <img src={Logo} alt="/" width="40" height="35" />

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose className="cursor-pointer" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary togther!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link to="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link to="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About Us
                </li>
              </Link>
              <Link to="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact Us
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between py-4 w-full sm:w-[80%]">
                <Link
                  to="https://www.linkedin.com/in/oluwadamilola-adedeji-aa9a34167/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  to="https://github.com/Adedeji08"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link to="/#contact" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link to="/#about" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
