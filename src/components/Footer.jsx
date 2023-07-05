import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/We harvest tomato.jpeg";

const Footer = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [nav, setNav] = useState(false);
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
        className="bg-[#0d3c00] grid lg:grid-cols-4 grid-cols-1 pl-10 pt-5"
      >
        <div>
          <h1 className="text-2xl font-black border-b-1 text-white border-red-500">
            Testimony
          </h1>
          <motion.p
            variants={item1}
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
              <span className="text-red-500">Address:</span>
              <Link to="https://www.google.com/maps/search/Block+B2,+TIC+Building,+Mani+Road,+Katsina,+Nigeria/@12.975794,7.6316639,17z/data=!3m1!4b1?authuser=0&entry=ttu"
                    target='_blank' rel='noreferrer'
              >
                {" "}
                Block B2, TIC Building, Mani Road, Katsina, Nigeria
              </Link>
            </li>
          </motion.ul>
        </div>
        <div>
          <h1 className="text-2xl font-black border-b-1 text-white border-red-500">
            Our Company
          </h1>
          <motion.ul
            variants={item1}
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
          <motion.p
            variants={item1}
            className="text-white text-xs font-extralight"
          >
            Subscribe to our Newsletter & Event right now to be updated.
          </motion.p>
          <div className="mt-5">
            <motion.input
              variants={item1}
              type="email"
              placeholder="Enter your email"
              className="border border-red-400 w-[65%] h-10 pl-5 newsletter block"
            />
            <button className="newsletter-btn border text-white border-white w-[65%] mt-5 bg-red-600  h-10">
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-red-500 font-extralight text-xs mt-4">
          © Tomatrix 2023. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
