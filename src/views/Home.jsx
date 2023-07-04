import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRoutes } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const [nav, setNav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shadow, setShadow] = useState(false);
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
    <div>
      <motion.div ref={ref} animate={control} variants={list}>
        <div className="home-img">
          <motion.h4
            variants={item1}
            className="text-sm text-center text-white pt-20 font-semibold 	tracking-wider"
          >
            WELCOME TO TOMATRIX
          </motion.h4>
          <motion.h1
            className="text-white font-bold w-[50%] ml-80 pt-2 10 text-3xl leading-10 h-[57%] break-words"
            variants={item2}
          >
            "Tomatrix Nigeria is a community-driven social enterprise with a
            vision to reduce rural poverty and address food losses through
            enterprising solutions, system thinking, innovation and bold
            actions."
          </motion.h1>
          <button
            className="text-white border-2 text-lg border-gray-200 bg-green-500 rounded-full text-center ml-80 w-[12%] h-[11%] btn"
            variants={item1}
          >
            Read more
          </button>
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 w-full">
        {/* LEFT */}
        <div className="shadow bg-red-500 rounded ml-5 mt-5 shadow-red-500 ">
          <motion.p className="text-1xl font-medium pl-3" variants={item2}>
            At Tomatrix Nigeria, we promote enterprising solutions to rural
            poverty. Our mission is to empower rural communities with resources
            to fight poverty by deconcentrating productive assets, information,
            innovation, finance, and sustainable solutions. We are dedicated to
            fostering economic growth and improving the livelihoods of farmers
            and communities across Nigeria. With a focus on social
            responsibility and environmental sustainability, we strive to create
            a brighter future for all.
          </motion.p>
        </div>
        {/* RIGHT */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
