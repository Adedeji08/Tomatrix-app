import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/We harvest tomato.jpeg";

const AboutUs = () => {
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
    <div className="pt-20">
      <motion.div ref={ref} animate={control} variants={list}>
        <div className="about-img">
          <motion.h4
            variants={item1}
            className="text-sm text-center pt-[20%] md:pt-[8%] font-semibold tracking-wider"
          >
            ABOUT US
          </motion.h4>
          <motion.h1
            className=" font-bold w-[70%] text-center pt-9 10 text-base md:text-2xl  leading-10 h-[45%] break-words motto"
            variants={item2}
          >
            "Promoting enterprising solutions, reducing food loss"
          </motion.h1>
        </div>
      </motion.div>
      <motion.div className="ml-20" animate={control} variants={list}>
        <motion.h1
          variants={item1}
          className="text-center text-3xl underline text-green-600 pt-7 font-extrabold"
        >
          What do we do?
        </motion.h1>
        <h2 className="text-2xl font-semibold">Tomato Processing </h2>
        <motion.p variants={item1}>
          Our tomato processing service is designed to cater to the needs of
          small-scale tomato farmers and local consumers that require
          high-quality, consistent, and cost-effective tomato products. We are a
          leading provider of tomato processing training and services, offering
          a range of options to meet the specific requirements of our clients,
          community, and consumers.
        </motion.p>
        
      </motion.div>
    </div>
  );
};

export default AboutUs;
