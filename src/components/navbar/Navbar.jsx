import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import instaIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          berlynguci
        </motion.span>
        <div className="social">
          <a href="https://github.com/berlynguci" target="_blank">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/beriel-abellana-59b44416b/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/berlizzen/" target="_blank">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <a href="https://x.com/berlirowdy" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
