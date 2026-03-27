import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {};

const WorkExperience = (props: Props) => {

    const [callculatedExperience, setCallculatedExperience] = useState<number>(0.0);

    useEffect(() => {
      const startDate = new Date("2024-11-01");
      const endDate = new Date();
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const diffMonths = Math.ceil(diffDays / 30);
      const diffYears = (diffMonths / 12).toFixed(2);
      setCallculatedExperience(Number(diffYears));
    }, [callculatedExperience]);

    
  return (
    <motion.div
      id="work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-10 section-gradient"
    >
      <h2 className="text-5xl md:text-6xl font-bungee mb-10">Work</h2>

      <div className="border-y border-gray-800">
        <div className="py-4 grid grid-cols-[1fr_0.5fr_1fr_0.5fr_1fr]  gap-4">
          <div>
            <p className="text-sm">Oct 2025 - Present</p>
            <p className="text-xs text-gray-500"> Working</p>
          </div>
          <div></div>
          <div>
            <h3 className="font-medium">Revenzatech Private Limited</h3>
            <p className="text-sm text-gray-400">Frontend Developer</p>
          </div>
          <div></div>
          <div className="justify-self-center">
            <h3 className="font-medium">Visit</h3>
            <a
              href="https://www.linkedin.com/company/revenzatech/posts/?feedView=all"
              className="text-sm text-blue-400 gap-3 flex animate-in"
            >
              LinkedIn
              <ArrowRight color="black" className="  bg-white rounded-full" />
            </a>
          </div>
        </div>
        <div className="py-4 grid grid-cols-[1fr_0.5fr_1fr_0.5fr_1fr] gap-4">
          <div>
            <p className="text-sm">July 2025 - Present</p>
            <p className="text-xs text-gray-500"> Working</p>
          </div>
          <div></div>
          <div>
            <h3 className="font-medium">Intellect Sprouts</h3>
            <p className="text-sm text-gray-400">Junior Web Developer Intern</p>
          </div>
          <div></div>
          <div className="justify-self-center">
            <h3 className="font-medium">Visit</h3>
            <a
              href="https://www.linkedin.com/company/intellect-sprouts/posts/?feedView=all"
              className="text-sm text-blue-400 gap-3 flex animate-in"
            >
              LinkedIn
              <ArrowRight color="black" className="  bg-white rounded-full" />
            </a>
          </div>
        </div>
        <div className="py-4 grid grid-cols-[1fr_0.5fr_1fr_0.5fr_1fr] gap-4">
          <div>
            <p className="text-sm">Nov 2024 - Apr 2025</p>
            <p className="text-xs text-gray-500"> 6 months</p>
          </div>
          <div></div>
          <div>
            <h3 className="font-medium">Zeptik</h3>
            <p className="text-sm text-gray-400">
              Frontend developer | React & Vue
            </p>
          </div>
          <div></div>
          <div className="justify-self-center">
            <h3 className="font-medium">Visit</h3>
            <a
              href="https://www.zeptik.com"
              className="text-sm text-blue-400 gap-3 flex animate-in"
            >
              Zeptik.com
              <ArrowRight color="black" className="  bg-white rounded-full" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-right mt-4">
        <p className="text-gray-400">Proffesional Work experience</p>
        <p className="font-medium">{callculatedExperience} years</p>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
