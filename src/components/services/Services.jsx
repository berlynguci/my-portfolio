import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import random from "../../assets/random_pic.png";
import networking from "../../assets/Networking.png";
import network from "../../assets/Network.png";
import databases from "../../assets/Databases.png";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Aspiring Software Developer
          <br /> and UI/UX Designer
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={random} alt="Random" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Certification</motion.b>{" "}
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>List</motion.b> of
            Certificates
          </h1>
          <a
            href="Resume_Abellana.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>See Resume</button>
          </a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Networking</h2>
          <p>
            <img
              src={networking}
              alt="Networking"
              style={{ verticalAlign: "middle" }}
            />
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Databases</h2>
          <p>
            <img
              src={databases}
              alt="Databases"
              style={{ verticalAlign: "middle" }}
            />
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Network Security</h2>
          <p>
            {" "}
            <img
              src={network}
              alt="Network"
              style={{ verticalAlign: "middle" }}
            />
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
