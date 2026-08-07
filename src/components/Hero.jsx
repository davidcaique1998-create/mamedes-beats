"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="heroContent">
        <p className="subtitle">PRODUÇÃO MUSICAL</p>
        <h1>
          BEATS QUE <span>ENTRAM NA MENTE</span>
        </h1>
        <p>
          Encontre beats exclusivos e licenciados para elevar o nível das suas
          músicas. Sons diferenciados, personalização e licenças
          seguras.
        </p>
        <div className="buttons">
          <button className="primary">Comprar Beats</button>
          <button className="secondary">Ouvir Agora</button>
        </div>
      </div>
    </motion.section>
  );
}