import { motion } from "framer-motion";
import { urlFor } from "../../sanity";

function Skill({ directionLeft, skill }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="rounded-xl p-2 border border-gray-500 bg-gray-500/80 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
        src={urlFor(skill.image).url()}
      />

      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-xl z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
