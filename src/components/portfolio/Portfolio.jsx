import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import pic1 from "../../assets/pic01.jpg";
import pic2 from "../../assets/pic02.jpg";
import pic3 from "../../assets/pic03.jpg";

const items = [
  {
    id: 1,
    title: "Sales Commission Tracker",
    img: pic1,
    desc: "A system that automates commission payouts for unit managers, making the process more accurate, secure, and easier to track.",
  },
  {
    id: 2,
    title: "Medical Billing System",
    img: pic3,
    desc: "A system that records patient details, services, and medicines taken, while automatically creating their bill. It helps make billing faster, more accurate, and better for the patient. ",
  },
  {
    id: 3,
    title: "Online Pharmacy",
    img: pic2,
    desc: "A system that makes it easier to order medical products from the pharmacy. It helps the pharmacy work faster, shortens customer wait times, and improves the overall experience.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/*<button>See Project</button>*/}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Software Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
