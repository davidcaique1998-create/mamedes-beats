"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useTransform } from "framer-motion";
import { useIntroScroll } from "./ScrollContext";

export default function Navbar() {
  const { scrollYProgress } = useIntroScroll();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v >= 0.85) setRevealed(true);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const navOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
  const navY = useTransform(scrollYProgress, [0.5, 0.85], [-20, 0]);

  return (
    <motion.header
      className="navbar"
      style={
        revealed
          ? { opacity: 1, y: 0 }
          : { opacity: navOpacity, y: navY }
      }
    >
      <div className="container">
        <Link href="/" className="logo">
          <span className="logoWhite">MAMEDES</span>
          <span className="logoBlue">BEATS</span>
        </Link>
        <nav>
          <Link href="/beats">Beats</Link>
          <Link href="/licenses">Licenças</Link>
          <Link href="/exclusive">Exclusivos</Link>
          <Link href="/contact">Contato</Link>
        </nav>
      </div>
    </motion.header>
  );
}