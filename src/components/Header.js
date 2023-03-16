import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Header({ socials }) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon key={social._id} url={social.url} target="_blank" fgColor="gray" bgColor="transparent" />
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center  text-gray-400 cursor-pointer space-x-2 py-4"
        >
          <FontAwesomeIcon icon={faEnvelope} className="h-5" />
          <p className="uppercase hidden md:inline-flex text-sm">Get in Touch</p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
