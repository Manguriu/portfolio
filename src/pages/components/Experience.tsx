"use client";
import React from "react";
import { motion } from "framer-motion";
import CardExp from "./CardExp";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className=" flex flex-col relative  md:flex-row sm:flex-col max-w-full px-20 h-screen text-center overflow-hidden justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-3  p-20 snap-x justify-center snap-mandatory">
        <CardExp />
      </div>
    </motion.div>
  );
}
