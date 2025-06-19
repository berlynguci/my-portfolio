import "./hero.scss";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import profile from "../../assets/Profile_Pic2.png";
import scroll from "../../assets/scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hello, I Am</motion.h2>
          <motion.h1 variants={textVariants}>Beriel B. Abellana</motion.h1>
          <Typewriter />
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Scroll Down</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        010101010101010101010101010101010101010101010101010101010101010101010101010
      </motion.div>
      <div className="imageContainer">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;
