"use client";
import { motion, useTransform } from "framer-motion";
import { useIntroScroll } from "./ScrollContext";

export default function OpeningLogo() {
  const { ref, scrollYProgress } = useIntroScroll();

  const blurAmount = useTransform(scrollYProgress, [0, 0.15], [20, 0]);
  const filter = useTransform(blurAmount, (b) => `blur(${b}px)`);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.75, 0.95], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.25, 0.95], [1, 0.12]);
  const x = useTransform(scrollYProgress, [0.25, 0.95], ["0vw", "-38vw"]);
  const y = useTransform(scrollYProgress, [0.25, 0.95], ["0vh", "-42vh"]);

  return (
    <section ref={ref} id="openingWrapper" className="openingWrapper">
      <motion.div
        className="openingText"
        style={{ x, y, scale, opacity, filter }}
      >
        <span className="logoWhite">MAMEDES</span>
        <span className="logoBlue">BEATS</span>
      </motion.div>
    </section>
  );
}