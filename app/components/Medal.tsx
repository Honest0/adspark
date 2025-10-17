'use client';

import { motion } from "framer-motion";
import React from "react";

const medals = [
  { title: "BRONZE CSR", image: "/assets/AwardBronze2.png" },
  { title: "BRONZE CSR", image: "/assets/AwardBronze2.png" },
  { title: "SILVER", image: "/assets/AwardSilver.png" },
  { title: "BRONZE", image: "/assets/AwardBronze1.png" },
  { title: "BRONZE", image: "/assets/AwardBronze1.png" },
  { title: "BRONZE", image: "/assets/AwardBronze1.png" },
  { title: "SILVER", image: "/assets/AwardSilver.png" },
];

// Duplicate medals for seamless scrolling
const repeatedMedals = [...medals, ...medals];

export default function Medal() {
  return (
    <section className="relative w-full overflow-hidden mobile:pt-[0px] mobile:pb-[20px] md:pt-[30px] md:pb-[96px] bg-white ">
      {/* 🏅 Scrolling container */}
      <motion.div
        className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mobile:gap-3 pt-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20, // smooth and steady on lg
          repeat: Infinity,
        }}
      >
        {repeatedMedals.map((medal, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center justify-center text-center mobile:w-[80px] 
              min-w-[100px] sm:min-w-[160px] md:min-w-[190px] lg:min-w-[231px]
            "
          >
            <img
              src={medal.image}
              alt={medal.title}
              className="
                w-[120px] sm:w-[150px] md:w-[190px] lg:w-[231px]
                h-auto object-contain
              "
            />
            <p className="
              mt-2 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]
              font-semibold text-gray-700
            ">
              {medal.title}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
