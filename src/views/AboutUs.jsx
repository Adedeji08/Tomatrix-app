import React, {  useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "../assets/Product Front View.jpeg";
import Image1 from "../assets/Tomatrix Cover.jpeg";
import Image2 from "../assets/WhatsApp Image 2021-11-23 at 9.32.32 PM (1).jpeg";
import Image3 from "../assets/Where are buyers.jpeg";

const AboutUs = () => {
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


   // const images = [Image, Image1, Image2, Image3]; // Import your image paths here

  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 8000); // Change image every 3 seconds

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="pt-20">
      <motion.div ref={ref} animate={control} variants={list}>
        <div>
          <div className="about-img">
            <motion.h4
              variants={item1}
               className="text-5xl text-center pt-[20%] md:pt-[8%] font-black text-opacity-100"
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
        <div></div>
        <motion.div className="md:ml-20 ml-5 mr-5 text-justify" ref={ref} animate={control} variants={list}>
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
            high-quality, consistent, and cost-effective tomato products. We are
            a leading provider of tomato processing training and services,
            offering a range of options to meet the specific requirements of our
            clients, community, and consumers.
          </motion.p>

          <h2 className="text-2xl font-bold text-green-600 mt-8 underline">
            Why Tomato?
          </h2>
          <div className="md:flex md:flex-cols">
            <motion.ul variants={item1} className="list-disc">
              <li>
                Nigeria is the second largest producer of tomatoes in Africa
                only behind Egypt and 12th globally (FAO, 2020).
              </li>
              <li>Over 200,000 smallholder farmers grow tomatoes in Nigeria</li>
              <li>Tomatoes grow in every part of the Country.</li>
              <li>
                More than 20 percent of Nigerians’ daily vegetable consumption
                is tomato{" "}
              </li>
              <li>
                Sadly, over 45 percent of our annual tomato yield output is lost
                along the value chains
              </li>
              <li>
                Due to the high postharvest losses (PHLs), Nigeria imports
                tomato products valued at over N8 billion naira per annum to
                meet the supply deficit.
              </li>
            </motion.ul>
            <motion.p className="xs:mt-5 mt-5" variants={item2}>
              Through system thinking, bold ideas and community initiatives, we
              will end tomato postharvest losses in Nigeria as a proof of
              concept for net zero food loss strategy across diverse crop value
              chains
            </motion.p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mt-10 justify-center justify-items-center align-baseline">
            <div className="rounded ">
              <img
                style={{ height: "300px" }}
                src={Image}
                alt="tomatrix"
                className="shadow rounded-lg shadow-gray-300 hover:scale-105 ease-in duration-300"
              />
            </div>
            <div className="rounded">
              <img
                style={{ height: "300px" }}
                src={Image1}
                alt="tomatrix"
                className="rounded-lg shadow shadow-gray-300 hover:scale-105 ease-in duration-300"
              />
            </div>
            <div className="rounded">
              <img
                style={{ height: "300px" }}
                src={Image2}
                alt="tomatrix"
                className="rounded-lg shadow shadow-gray-300 hover:scale-105 ease-in duration-300"
              />
            </div>
            <div className="rounded">
              <img
                style={{ height: "300px" }}
                src={Image3}
                alt="tomatrix"
                className="rounded-lg shadow shadow-gray-300 hover:scale-105 ease-in duration-300"
              />
            </div>
          
          </div>
        </motion.div>

        <motion.div variants={list} animate={control} ref={ref} className="grid md:grid-cols-3 mt-14 ml-5 mr-5 text-justify gap-5">
          <div className=" w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <h1 className="text-center text-2xl underline text-green-600  font-bold">
              Market Access
            </h1>
            <motion.p variants={item1}>
              We facilitate market opportunities that connect farmers with
              buyers as a key strategy to reduce postharvest losses in peak
              production seasons. Our offline channels and semi-formal platform
              enable primary producers to showcase their products to potential
              wholesale and retail buyers and increase their sales revenue. Our
              data-driven market insight provides valuable information to
              farmers about market trends, consumer preferences and pricing
              strategies. This information help farmers to make informed
              decisions about their products and pricing. Through market
              linkage, smallholder farmers gain access to a wider market and
              reach a larger customer base, which helps them grow their
              business, increase their sales revenue and reduce postharvest
              loss.
            </motion.p>
          </div>
          <div className=" w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <h1 className="text-center text-2xl underline text-green-600  font-bold">
              Farmers Outreach & Training
            </h1>
            <motion.p variants={item1}>
              Our Farmers Training & Aggregation model is designed to provide
              farmers with the necessary knowledge and skills to improve their
              agricultural productivity and improve their livelihoods. We
              believe that by educating farmers on modern farming techniques,
              and value addition activities we can help them increase their
              yield, reduce crop losses, and ultimately improve their
              livelihoods. Our training program covers a wide range of themes,
              including digital agriculture, agronomic, value addition,
              socio-innovations, and value chain approaches. Our training is
              hands-on and context-specific to ensure that farmers can apply
              what they learn on their farms.
            </motion.p>
          </div>
          <div className=" w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <h1 className="text-center text-2xl underline text-green-600  font-bold">
              Access to Finance
            </h1>
            <motion.p variants={item1}>
              In addition to training, we also provide farmers with access to
              capital through our aggregation service, cooperative and
              agro-processing hub. We work with a network of farmers and buyers
              to facilitate the flow of production capital and agriculture
              output. Our aggregation service also provides farmers with access
              to quality inputs, such as seeds and fertilizers, at affordable
              prices. By providing farmers with training and access to capital,
              technology and markets, we aim to create a sustainable agrifood
              system that benefits both farmers, consumers and our Nation.
            </motion.p>
          </div>
        </motion.div>

        {/* TEAMS */}
        <motion.div className=" mt-14 ml-5 mr-5 text-justify">
          <h1 className="text-center text-2xl  text-red-600  font-bold">
            TEAM
          </h1>
          <div className="grid md:grid-cols-3 gap-5">
            <div className=" w-full h-full shadow rounded-xl p-4">
              <h1 className="text-center text-md  text-green-600  font-bold">
                John Babadara
              </h1>
              <motion.p variants={item1}>
                A development practitioner, digital innovator, and seasoned
                entrepreneur with a background in agriculture and rural
                development. He brings expertise in digital agriculture,
                circularity, system thinking, policy, agrifood systems
                transformation, social enterprise development and community
                engagement to drive the success of Tomatrix Nigeria.
              </motion.p>
            </div>
            <div className=" w-full h-full shadow rounded-xl p-4">
              <h1 className="text-center text-md  text-green-600  font-bold">
                Olawale Adeoje
              </h1>
              <motion.p variants={item1}>
                With a passion for community development and poverty
                eradication, Olawale has a background in accounting and finance,
                small business management, and production process. He leads our
                team in identifying priority, fund allocation and developing
                innovative solutions to reduce tomato postharvest loss and
                improve the livelihoods of rural farmers in Nigeria.
              </motion.p>
            </div>
            <div className=" w-full h-full shadow rounded-xl p-4">
              <h1 className="text-center text-md  text-green-600  font-bold">
                Precious Mayokun
              </h1>
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
    </div>
  );
};

export default AboutUs;
