import { Section } from "./MainLayout";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, top: 8 },
  visible: {
    opacity: 1,
    top: 0,
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, left: -100 },
  visible: {
    opacity: 1,
    left: 0,
  },
};

const HeroBanner = () => {
  return (
    <div className="flex flex-col gap-2 md:px-2 lg:px-2 bg-gradient-to-r from-slate-400 to-purple-400 justify-center">
      <Section>
        <div className="flex flex-col gap-5">
          <motion.div
            className="bg-slate-100 w-fit py-1 px-2 rounded-md text-sm cursor-default relative"
            initial="hidden"
            animate="visible"
            variants={slideFromLeft}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 0.7,
              delay: 1.1,
            }}
          >
            Web Developer at{" "}
            <a
              href="https://www.vodafone.gr"
              className="text-red-600 hover:tracking-wide hover:underline duration-300"
            >
              Vodafone
            </a>
          </motion.div>

          <motion.div
            className="text-4xl relative"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            Hello there, I'm Panos 👋
          </motion.div>
          <motion.div
            className="font-light relative"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            I am a web developer and I am currently working full-time at
            Vodafone, but I always find extra time for interesting projects.
          </motion.div>
          <a
            href="#contact"
            className="bg-black text-white px-5 py-2 rounded-md w-fit hover:bg-purple-200 hover:text-black ease-out duration-200 mt-12"
          >
            Let's talk
          </a>
        </div>
      </Section>
    </div>
  );
};

export default HeroBanner;
