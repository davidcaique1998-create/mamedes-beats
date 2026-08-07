"use client";
import { createContext, useContext, useRef } from "react";
import { useScroll } from "framer-motion";

const ScrollCtx = createContext(null);

export function ScrollProvider({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <ScrollCtx.Provider value={{ ref, scrollYProgress }}>
      {children}
    </ScrollCtx.Provider>
  );
}

export function useIntroScroll() {
  return useContext(ScrollCtx);
}