import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
("use Client");

type Props = {};

function header({}: Props) {
  return (
    <header className="sticky top-0   flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-row  items-center">
        {/*social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/brian-manguriu-3b0b07207/"
          fgColor="green"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/Mainnet14"
          fgColor="blue"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Manguriu"
          fgColor="black"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="z-20 text-red-300 flex  flex-row items-center overflow-hidden text-grey-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="red"
          bgColor="transparent"
          url="https://mail.google.com/mail/u/0/#inbox"
        />
      </motion.div>
    </header>
  );
}

export default header;
