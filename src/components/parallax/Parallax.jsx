import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import sun from "../../assets/sun.png";
import stars from "../../assets/stars.png";
import planets from "../../assets/planets.png";
import mountains from "../../assets/mountains.png";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      {type !== "About me" ? (
        <div className="skills-section">
          <motion.p style={{ y: yText }} className="skills-title">
            Technical Skills
          </motion.p>
          <div className="skills-row">
            <div className="skill">
              <Icon icon="devicon:html5" width="48" className="glow" />
              <span>HTML</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:css3" width="48" className="glow" />
              <span>CSS</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:react" width="48" className="glow" />
              <span>React</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:tailwindcss" width="48" className="glow" />
              <span>Tailwind CSS</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:javascript" width="48" className="glow" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:typescript" width="48" className="glow" />
              <span>TypeScript</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:python" width="48" className="glow" />
              <span>Python</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:java" width="48" className="glow" />
              <span>Java</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:php" width="48" className="glow" />
              <span>PHP</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:mysql" width="48" className="glow" />
              <span>MySQL</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:nodejs" width="48" className="glow" />
              <span>Node JS</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:firebase" width="48" className="glow" />
              <span>Firebase</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:github" width="48" className="glow" />
              <span>Github</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:figma" width="48" className="glow" />
              <span>Figma</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:visualstudio" width="48" className="glow" />
              <span>VS Code</span>
            </div>
            <div className="skill">
              <Icon icon="devicon:canva" width="48" className="glow" />
              <span>Canva</span>
            </div>
          </div>
        </div>
      ) : (
        <motion.p style={{ y: yText }}>
          I started programming during my freshmen year in mid-2019, so I’ve
          been programming for almost seven years now. Building projects taught
          me a lot about problem-solving, persistence, and thinking creatively.
          These experiences helped me become a much more confident programmer. I
          have 3 years of experience in frontend development. On the web, I
          started with HTML, CSS, and JavaScript, gradually learning frameworks
          like React and Next.js. I mostly design my own UIs, but I’ve recently
          adopted third-party libraries for components like logos, which has
          helped me streamline my workflow and focus on delivering efficient,
          high-quality designs.
        </motion.p>
      )}

      <motion.div
        className="mountains"
        style={{
          backgroundImage: `url(${mountains})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 3,
        }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? planets : sun})`,
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          x: yBg,
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
