import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

function ContactMe({ pageInfo }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    window.location.href = `mailto:${pageInfo?.email}?subject=${formData.subject} -  (${formData.email})&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="title">Contact</h3>

      <div className="flex flex-col space-y-10 px-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need. <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <FontAwesomeIcon icon={faPhone} className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <FontAwesomeIcon icon={faLocationDot} className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
          </div>

          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />

          <textarea {...register("message")} placeholder="Message" className="contactInput" />

          <button className="bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]/80">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
