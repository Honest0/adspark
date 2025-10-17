'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-[60vh] md:h-[80vh] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-5xl md:text-7xl mb-4">{title}</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">{description}</p>
      </motion.div>
    </section>
  );
}
