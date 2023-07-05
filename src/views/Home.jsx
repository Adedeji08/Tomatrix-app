import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/We harvest tomato.jpeg";

const Home = () => {
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
        <div ref={ref} animate={control} variants={list}>
          <div className="home-img">
            <motion.h4
              variants={item1}
              className="text-sm text-center text-white pt-[20%] md:pt-[8%] font-semibold tracking-wider"
            >
              WELCOME TO TOMATRIX
            </motion.h4>
            <motion.h1
              className="text-white font-bold w-[70%] text-center pt-9 10 text-base md:text-2xl  leading-10 h-[45%] break-words motto"
              variants={item2}
            >
              "Tomatrix Nigeria is a community-driven social enterprise with a
              vision to reduce rural poverty and address food losses through
              enterprising solutions, system thinking, innovation and bold
              actions."
            </motion.h1>
            <button
              className="text-white border-2 text-lg border-gray-200 bg-green-500 rounded-full text-center ml-14 mt-10 md:mt-0 md:ml-40 md:w-[12%] w-[30%] h-[11%] btn"
              variants={item1}
            >
              Read more
            </button>
          </div>
        </div>
        <motion.div
          variants={list}
          ref={ref}
          animate={control}
          className="grid md:grid-cols-3 w-full"
        >
          {/* LEFT */}
          <div className="shadow bg-red-100 rounded ml-5 mt-5 shadow-red-500 h-full ">
            <h3 className="text-2xl font-medium pl-3">Mission</h3>
            <motion.p className="font-medium pl-3" variants={item2}>
              At Tomatrix Nigeria, we promote enterprising solutions to rural
              poverty. Our mission is to empower rural communities with
              resources to fight poverty by deconcentrating productive assets,
              information, innovation, finance, and sustainable solutions. We
              are dedicated to fostering economic growth and improving the
              livelihoods of farmers and communities across Nigeria. With a
              focus on social responsibility and environmental sustainability,
              we strive to create a brighter future for all.
            </motion.p>
            <div className="w-[80%] mission-img hover:scale-105 ease-in duration-300">
              <img
                src={Image}
                alt="image"
                width={700}
                className="rounded mt-5 shadow shadow-red-500"
              />
            </div>
          </div>
          {/* MIDDLE */}
          <div className="shadow bg-red-100 rounded ml-5 md:mt-5 mt-10 shadow-red-500 h-[100%]">
            <motion.h3 className="text-2xl font-medium pl-3" variants={item1}>
              Features
            </motion.h3>
            <motion.ul className="font-sm pl-9 list-disc" variants={item1}>
              <li>Community-driven social enterprise</li>
              <li>Focus on reducing rural poverty</li>
              <li>Addressing tomato postharvest loss in Nigeria</li>
              <li>Innovative solutions to intractable challenges</li>
              <li>System thinking toward agrifood system transformation</li>
              <li>
                Bold actions towards achieving the vision of rural prosperity
              </li>
            </motion.ul>
          </div>
          {/* Right */}
          <div className="shadow bg-red-100 rounded ml-5  md:mt-5 mt-16 shadow-red-500 h-full">
            <motion.h3
              variants={item2}
              className="text-2xl text-red-500 font-medium pl-3"
            >
              Our Mission Contributes to
            </motion.h3>
            <motion.ul variants={item2} className="font-sm pl-9 list-disc">
              <li>
                SDG 1: No Poverty: End poverty in all its forms everywhere.
              </li>
              <li>
                SDG 2: Zero Hunger: Achieve food security, improve nutrition,
                and promote sustainable agriculture.
              </li>
              <li>
                SDG 8: Decent Work and Economic Growth: Promote sustained,
                inclusive, and sustainable economic growth, full and productive
                employment, and decent work for all.
              </li>
              <li>
                SDG 10: Reduced Inequalities: Reduce inequality within and among
                countries.
              </li>
              <li>
                SDG 12: Responsible Consumption and Production: Ensure
                sustainable consumption and production patterns.
              </li>
              <li>
                SDG 13: Climate Action: Take urgent action to combat climate
                change and its impacts.
              </li>
            </motion.ul>
          </div>
        </motion.div>
       
        {/* DONATION */}
        <div className="grid md:grid-cols-3 gap-3 ml-10 mt-14  rounded">
          <div className="md:col-span-2 lg:col-span-2">
            <h1 className="text-2xl text-green-600 md:mt-0 mt-7">
              Donation Link <br />
              <span className="text-black-500 font-normal text-base">
                By supporting Tomatrix Nigeria, you are contributing to efforts
                to reduce rural poverty in Nigeria.
              </span>
            </h1>
            <motion.ul variants={item1} className="list-disc">
              <li>
                With Tomatrix Nigeria's focus on reducing rural poverty and
                tomato postharvest loss, you can be sure that your investment is
                going towards a specific and urgent issue.
              </li>
              <li>
                As a community-driven social enterprise, Tomatrix Nigeria is
                committed to involving and empowering local communities in their
                work, ensuring sustainable and long-term impact.
              </li>
              <li>
                Tomatrix Nigeria's innovative and enterprising solutions mean
                that your support will go towards cutting-edge approaches to
                reducing postharvest loss and alleviating poverty
              </li>
              <li>
                With a bold and ambitious vision, Tomatrix Nigeria is committed
                to taking significant action to address the challenges facing
                Nigerian farmers and communities. By supporting us, you can be a
                part of this important work
              </li>
            </motion.ul>
          </div>
          <motion.div variants={item2} className="right">
            <h2 className="text-1xl font-bold text-green-600 underline">
              Account Details
            </h2>
            <p className="text-base font-bold text-red-600">
              Integrate Tomatrix Account (Naira and Domiciliary)
            </p>
            <p className="text-sm font-medium tracking-widest">
              Tomatrix Account (Naira):
              <br />
              GTB: 0690880064
            </p>
            <p className="text-sm font-medium tracking-widest">
              Tomatrix Account (Dollar):
              <br /> GTB: Swiss Code
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
