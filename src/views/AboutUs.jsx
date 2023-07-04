import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/Product Front View.jpeg";
import Image1 from "../assets/Tomatrix Cover.jpeg"
import Image2 from "../assets/WhatsApp Image 2021-11-23 at 9.32.32 PM (1).jpeg"
import Image3 from "../assets/Where are buyers.jpeg"

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
      <div>
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
      </div>
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
        
        <h2 className="text-2xl font-bold text-green-600 mt-8 underline">Why Tomato?</h2>
        <div className="flex flex-cols">
          <motion.ul variants={item1} className="list-disc">
            <li>
              Nigeria is the second largest producer of tomatoes in Africa only
              behind Egypt and 12th globally (FAO, 2020).
            </li>
            <li>Over 200,000 smallholder farmers grow tomatoes in Nigeria</li>
            <li>Tomatoes grow in every part of the Country.</li>
            <li>
              More than 20 percent of Nigerians’ daily vegetable consumption is
              tomato{" "}
            </li>
            <li>
              Sadly, over 45 percent of our annual tomato yield output is lost
              along the value chains
            </li>
            <li>
              Due to the high postharvest losses (PHLs), Nigeria imports tomato
              products valued at over N8 billion naira per annum to meet the
              supply deficit.
            </li>
          </motion.ul>
          <motion.p variants={item2}>
            Through system thinking, bold ideas and community initiatives, we
            will end tomato postharvest losses in Nigeria as a proof of concept
            for net zero food loss strategy across diverse crop value chains
          </motion.p>
        </div>
        <div className="grid grid-cols-4 mt-10">
            <div className="rounded ml-3">
                <img style={{height: '300px'}} src={Image} alt='image' className="shadow rounded-full shadow-gray-300 hover:scale-105 ease-in duration-300" />
            </div>
            <div className="rounded ml-3">
            <img style={{height: '300px'}} src={Image1} alt='image' className="rounded-full shadow shadow-gray-300 hover:scale-105 ease-in duration-300" />
            </div>
            <div className="rounded ml-3">
            <img style={{height: '300px'}} src={Image2} alt='image'className="rounded-full shadow shadow-gray-300 hover:scale-105 ease-in duration-300" />
            </div>
            <div className="rounded ml-3">
            <img style={{height: '300px'}} src={Image3} alt='image' className="rounded-full shadow shadow-gray-300 hover:scale-105 ease-in duration-300" />
            </div>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
