import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

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
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/beriel-abellana-59b44416b/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/berlizzen/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://x.com/berlirowdy" target="_blank">
            <img src="/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
