import React from "react";
import { motion } from "framer-motion";
type Props = {};

function PopupCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 0, 1.5, 0, 1, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "20%", "20%"],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center">
      {/*center the whole div*/}
      {/*a div representing an object like circels*/}
      <div className="absolute border border-blue-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />{" "}
      {/*creating the circle and the ping*/}
      <div className="absolute rounded-full border border-blue-500 h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="rounded-full border border-blue-500 opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
}

export default PopupCircles;
