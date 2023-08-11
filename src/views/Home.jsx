import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/WhatsApp Image 2021-11-23 at 9.32.32 PM (1).jpeg";
import Image1 from "../assets/Tomatrix Cover.jpeg";
import Image2 from "../assets/WhatsApp Image 2021-11-23 at 9.32.32 PM (1).jpeg";

const Home = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

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
              className="text-white border-2 text-lg border-gray-200 bg-green-500 rounded-full text-center ml-14  mt-[30%] md:mt-0 md:ml-40 md:w-[12%] w-[30%] h-[11%] btn"
              variants={item1}
            >
              <Link to='/aboutus'>
              Read more
              </Link>
            </button>
          </div>
        </div>
          <motion.div ref={ref} animate={control} variants={list}>
            <motion.div className=" mt-14 ml-5 mr-5 text-justify">
              {/* first card */}
              <div className="grid md:grid-cols-3 gap-5">
                <div className=" w-full h-full shadow rounded-xl p-4">
                  <div className="rounded mb-5">
                    <img
                      style={{ height: "300px" }}
                      src={Image}
                      alt="tomatrix"
                      className="rounded-full shadow shadow-gray-300 hover:scale-105 ease-in duration-300"
                    />
                  </div>
                <motion.p variants={item1}>
                  A development practitioner, digital innovator, and seasoned
                  entrepreneur with a background in agriculture and rural
                  development. He brings expertise in digital agriculture,
                  circularity, system thinking, policy, agrifood systems
                  transformation, social enterprise development and community
                  engagement to drive the success of Tomatrix Nigeria.
                </motion.p>
              </div>
              {/* second card */}
              <div className=" w-full h-full shadow rounded-xl p-4">
                <div className="rounded mb-5">
                  <img
                    style={{ height: "300px" }}
                    src={Image1}
                    alt="tomatrix"
                    className="rounded-full shadow shadow-gray-300 hover:scale-105 ease-in duration-300"
                  />
                </div>
                <motion.p variants={item1}>
                  With a passion for community development and poverty
                  eradication, Olawale has a background in accounting and finance,
                  small business management, and production process. He leads our
                  team in identifying priority, fund allocation and developing
                  innovative solutions to reduce tomato postharvest loss and
                  improve the livelihoods of rural farmers in Nigeria.
                </motion.p>
              </div>
              {/* third card */}
              <div className=" w-full h-full shadow rounded-xl p-4">
                <div className="rounded mb-5">
                <img
                  style={{ height: "300px" }}
                  src={Image2}
                  alt="tomatrix"
                  className="rounded-full shadow shadow-gray-300 hover:scale-105 ease-in duration-300"
                />
              </div>
                <motion.p variants={item1}>
                  She is a certified food scientist and serial entrepreneur with
                  expertise in using human-centred design (HCD) to meet the unique
                  needs of consumers. She leads the product development team and
                  works closely with our clients to understand their needs and
                  develop customized solutions that meet their requirements.
                </motion.p>
              </div>
            </div>
          </motion.div>
          </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
