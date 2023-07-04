import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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
          <div className="contact-img opacity-90">
            <motion.h4
              variants={item1}
              className=" text-white text-5xl text-center pt-[20%] md:pt-[8%] font-black text-opacity-100"
            >
              CONTACT US
            </motion.h4>
            <motion.h1
              className=" font-black text-white  w-[70%] text-center pt-9 10 text-xl md:text-2xl  leading-10 h-[45%] break-words motto"
              variants={item2}
            >
              We'd love to show you how you can digitize and manage your farm
              operations at scale or integrate predictive intelligence to
              improve productivity or mitigate risk.
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
