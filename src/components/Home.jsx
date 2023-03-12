import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
export default function Home() {
  const container = {
    hidden: { opacity: 0, x: "-100%" },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 1.5,
        delayChildren: 0.5,
      },
    },
  };
  const items = {
    hidden: { x: "-100%", opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 1.5, ease: "easeInOut" },
    },
  };
  return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        animate="show"
        className="min-h-screen flex flex-col justify-center text-white"
      >
        <motion.h1 variants={items} className="text-xl text-neonBlue">
          Hey, my name is
        </motion.h1>
        <motion.h1
          variants={items}
          className="text-6xl md:text-7xl landscape:text-5xl hover:text-neonBlue"
        >
          Gopal Kaul.
        </motion.h1>
        <motion.div
          variants={items}
          className="flex flex-row text-2xl md:text-4xl landscape:text-3xl whitespace-nowrap"
        >
          <motion.h2>I&apos;m a</motion.h2> &nbsp;
          <motion.div className="text-light">
            <Typewriter
              options={{
                autoStart: true,
                strings: [
                  "Full Stack Developer.",
                  "JavaScript Developer.",
                  "Gamer.",
                  "NodeJS Developer.",
                  "Linux Enthusiast.",
                  "React Developer.",
                  "Musician.",
                  "Svelte Developer.",
                  "AstroJS Developer.",
                ],
                loop: true,
                delay: 75,
              }}
            />
          </motion.div>
        </motion.div>
        <motion.h2
          variants={items}
          className="pt-16 landscape:pt-0 text-xl md:text-2xl landscape:text-lg text-white"
        >
          I&apos;m a Computer Science Engineer pursuing my degree from Osmania
          University, Hyderabad. <br />I am a Full Stack Web Developer who loves
          React. I also am an avid Arch Linux user.
          <br />
        </motion.h2>
      </motion.div>
  );
}
