import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/We harvest tomato.jpeg";

const Footer = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
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
    <div className="mt-14">
      <motion.div
        variants={list}
        ref={ref}
        animate={control}
        className="bg-[#0d3c00] grid lg:grid-cols-4 grid-cols-2 pl-5"
      >
        <div>
          <h1 className="text-2xl font-black border-b-1 text-white border-red-500">
            Testimony
          </h1>
          <motion.p
            variants={item2}
            className="pt-5 font-medium text-sm text-white leading-7"
          >
            Tomatrix Nigeria’s unwavering commitment to reducing rural poverty
            and tackling tomato postharvest loss through innovative and bold
            solutions has earned us the trust and admiration of our customers.
          </motion.p>
        </div>
        <div>
          <h1 className="text-2xl font-black border-b-1 text-white border-red-500">
            Contact Us
          </h1>
          <motion.ul
            variants={item1}
            className="text-white pt-5 font-medium text-sm leading-7"
          >
            <li>
              <span className="text-red-500">Phone:</span> +2349056833756, +234
              806 017 2591
            </li>
            <li>
              <span className="text-red-500">Email:</span> info@tmnigeria.com
            </li>
            <li>
              <span className="text-red-500">Address:</span> Block B2, TIC
              Building, Mani Road, Katsina, Nigeria
            </li>
          </motion.ul>
        </div>
        <div>
          <h1 className="text-2xl font-black border-b-1 text-white border-red-500">
            Our Company
          </h1>
          <motion.ul
            variants={item2}
            className="pt-5 font-medium text-sm text-white leading-7"
          >
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/aboutus"> About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Buy Now</Link>
            </li>
          </motion.ul>
        </div>

        <div>
        <h1 className="text-2xl font-black border-b-1 text-white border-red-500">
          NewsLetter
          </h1>
         <motion.div variants={item2} className="mt-5">
           <input
                type="email"
                placeholder="Enter your email"
                className="border border-red-400  h-10 pl-5 newsletter block"
              />
              <button className="newsletter-btn border text-white border-white w-[65%] mt-5 bg-red-600  h-10">
                Subscribe
              </button>
         </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
