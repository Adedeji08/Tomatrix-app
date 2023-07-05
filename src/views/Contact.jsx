import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "../assets/Product Front View.jpeg";

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
              BUY NOW
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

        <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
          <h2 className="py-4 text-xl tracking-widest uppercase text-[#6bed12]">
            Make a purchase
          </h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full shadow-xl bg-red-100 shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <div>
                  <img
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={Image}
                    alt="image"
                  />
                </div>
                <div>
                  <p className="py-4 text-2xl font-extrabold  tracking-wider">
                    To make a <span className="text-green-600">purchase</span>{" "}
                    fill the form and will be delivered approiately
                  </p>
                </div>
                <div></div>
              </div>
            </div>

            {/* right and form */}
            <div className="col-span-3 w-full h-auto shadow-xl bg-red-100 shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  action="https://getform.io/f/4ab5ae01-8a7f-492d-a978-d530457bcd45"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Full Name or Business Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-green-300 purchase-input"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 purchase-input">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-green-300 purchase-input"
                        type="number"
                        name="phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                      Email Address
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-green-300 purchase-input"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                      Delivery Address
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-green-300 purchase-input"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">
                      Unit Size (1litre or 500 ml):
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-green-300 purchase-input"
                      type="text"
                      name="size"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Quantity</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-green-300 purchase-input"
                      type="number"
                      name="quantity"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message (optional)</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-green-300 purchase-input"
                      rows="10"
                      name="message"
                    ></textarea>
                  </div>
                  <button className="w-full p-4 mt-4 text-white bg-[#0d3c00] rounded">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
         
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
