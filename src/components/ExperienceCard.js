import { motion } from "framer-motion";
import { urlFor } from "../../sanity";

import { format } from "date-fns";

function ExperienceCard({ experience }) {
  const startDate = new Date(experience?.dateStarted);
  const endDate = new Date(experience?.dateEnded);

  const formatDate = (date) => {
    return format(new Date(date), "MMM yyyy");
  };

  const getDateDifference = (startDate, endDate) => {
    var diffInMonths = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 30));
    var years = Math.floor(diffInMonths / 12);
    var months = diffInMonths % 12;
    return { years, months };
  };

  const { years, months } = getDateDifference(startDate, endDate);

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[rgb(56,55,55)] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        alt=""
        src={urlFor(experience?.companyImage).url()}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>

        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <img key={tech._id} className="h-10 w-10 rounded-full" src={urlFor(tech.image).url()} alt="" />
          ))}
        </div>

        <div className="flex flex-row space-x-2 items-center text-center">
          <p className="uppercase py-5 text-gray-300">
            {formatDate(experience?.dateStarted)} -{" "}
            {experience?.isCurrentlyWorkingHere ? "Present" : formatDate(experience?.dateEnded)}
          </p>
          <p className="text-xs text-gray-300">{years >= 1 ? `(${years} years, ${months} months)` : `(${months} months)`}</p>
        </div>

        <div className="list-disc space-y-2 ml-2 text-lg h-56 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 pr-5">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
