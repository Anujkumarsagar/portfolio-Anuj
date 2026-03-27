import { skills } from '@/data/tags'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutMe = (props: Props) => {
  return (
   
    <motion.section
    id="about"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="p-6 md:p-10 section-gradient"
  >
    <div className="lg:grid lg:grid-cols-2 items-center overflow-hidden  justify-center lg:gap-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-5xl md:text-6xl font-bungee mb-10 text-right">
          About
        </h2>
        <p className="mb-4">
          Hello!{" "}
          <span className="font-bold font-bungee">I'm Anuj</span>, I'm
          a{" "}
          <span className="font-bold italic">
            full-stack developer
          </span>
          .<br />
          With Expertise{" "}
          <span className="font-medium">Many other fields</span>.
        </p>

        <div className="mt-8 mb-6">
          {
            skills.map((skill, index) => (

              <div key={index} className="bg-gray-900 squircle-a-30 p-4 mb-4">
                <h4 className="font-medium font-bungee mb-2">{skill.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {
                    skill.skills.map((skill, index) => (

                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative inline-flex group cursor-pointer"
                      >
                        <motion.button whileTap={{ scale: 0.85 }}>
                          <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1"></div>
                          <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full">
                            {skill}
                          </span>
                        </motion.button>
                      </motion.span>
                    ))
                  }

                </div>
              </div>
            ))
          }
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 lg:mt-0"
      >
        <div className="relative w-full   max-w-[400px] mx-auto group rounded-3xl overflow-hidden">
          {/* Glow Background */}
          <motion.button whileTap={{ scale: 0.85 }}>
            <div className="absolute inset-0  squircle-a-30 bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] drop-shadow-xl transition-all duration-500 "></div>


            {/* Actual Photo */}
            <Image
              src="/assets/projects/personal.png"
              alt="Developer photo"
              width={400}
              height={450}
              loading="lazy"
              className=" md:opacity-70 cursor-pointer transition-all duration-200  group-hover:opacity-100 p-1 relative w-full object-cover rounded-3xl"
            />
          </motion.button>
        </div>
      </motion.div>
    </div>


  </motion.section>
  )
};

export default AboutMe;