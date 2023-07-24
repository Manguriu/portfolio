import React, { useRef } from "react";
import { motion } from "framer-motion";

("use client");

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="  h-screen relative flex  overflow-hidden flex-col text-left md:flex-row  justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            width={500}
            height={700}
            src="react.png"
          />
          <div>
            <h4 className="text-4xl font-semibold text-center ">
              <span className="title-p underline decoration-[black]/50">
                React Emmorce App
              </span>
            </h4>
            <p className="text-lg text-center md:text-left subtitle-p">
              Front-end e-commerce development encompasses responsive design,
              product catalog display, shopping cart functionality, checkout
              process facilitation, user authentication and account management,
              payment gateway integration, dynamic user interactions.
            </p>
          </div>
          <div className="btn-morph mt-6">
            <a href="https://github.com/Manguriu/ecom-react-app">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Go to..</span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            width={500}
            height={700}
            src="lara.png"
          />
          <div>
            <h4 className="text-4xl font-semibold text-center ">
              <span className=" title-p underline decoration-[red]/50">
                Ecom Backend Laravel
              </span>
            </h4>
            <p className="text-lg text-center md:text-left subtitle-p">
              he "Ecom-backend" project is a backend implementation for an
              e-commerce application. It focuses on server-side functionalities,
              including user management for authentication and authorization,
            </p>
          </div>
          <div className="btn-morph mt-6">
            <a href="https://github.com/Manguriu/Ecom-backend">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Go to..</span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            width={500}
            height={700}
            src="billing.png"
          />
          <div>
            <h4 className="text-4xl font-semibold text-center ">
              <span className="title-p underline decoration-[red]/50">
                Simple Billing Calculator
              </span>
            </h4>
            <p className="text-lg text-center md:text-left subtitle-p">
              a simple billing site focuses on basic expense and income
              tracking, with a clear presentation of the balance. It provides
              users with a convenient way to manage their financial information
              and gain insights into their overall financial health
            </p>
          </div>
          <div className="btn-morph mt-6">
            <a href="https://billingsitealpha.netlify.app/">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Go to..</span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            width={500}
            height={700}
            src="simple.png
            "
          />
          <div>
            <h4 className="text-4xl font-semibold text-center ">
              <span className="underline decoration-[red]/50 title-p">
                Test Data
              </span>
            </h4>
            <p className="text-lg text-center md:text-left subtitle-p">
              Welcome to our website, where you can view routing information and
              retrieve data from an API. Provide a brief overview of routing and
              how it works in the context of your website. This could include
              information on the different routes available, how to access them,
              and any important details about the routing process
            </p>
          </div>
          <div className="btn-morph mt-6">
            <a href="https://next-js-first-xi.vercel.app/">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Go to..</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* line accross the project */}
      <div className="w-full absolute top-[30%] bg-[#430f58]/20 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
