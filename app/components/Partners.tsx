'use client';

import { motion } from "framer-motion";

const cards = [
  {
    title: "Data-Driven Marketing",
    description:
      "Leaving unique data from the Globe Group to deliver highly targeted campaigns and proven, measurable results.",
    image: "/assets/Patner1.jpg",
    logo: "/assets/Data.png",
  },
  {
    title: "Strategic Scale+ Expertise",
    description:
      "With 10+ years of experience, we leverage the strength and expertise of Globe’s ecosystem - while maintaining expertise in data-driven marketing.",
    image: "/assets/Patner2.jpg",
    logo: "/assets/Group.png",
  },
  {
    title: "AI-Powered Innovation",
    description:
      "Integrating AI tech - from precise audience segmentation and predictive analytics to AI-powered optimization to enhance campaign performance.",
    image: "/assets/Patner3.jpg",
    logo: "/assets/Ai.png",
  },
];

export default function Partners() {
  return (
    <section className="relative w-full overflow-hidden pb-[100px] sm:pb-[120px] lg:pb-[159.13px] bg-gradient-to-b from-[#f8f8ff] to-[#ffffff]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/BackPatner.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Header Section */}
      <div className="relative w-full z-10 mx-auto mt-8 md:mt-12 lg:mt-[128.05px] px-6 sm:px-10 lg:px-[77.78px]">
        <motion.div
          className="flex flex-col text-black lg:flex-row items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-medium leading-tight lg:leading-[60px] lg:w-[598.74px]">
            AdSpark - your Strategic Partner for <br className="hidden md:block" /> data-driven success
          </h2>

          {/* Description */}
          <p className="text-[14px] sm:text-[16px] md:text-[16px] w-full sm:w-[80%] md:w-[400px] lg:w-[543px] text-black leading-[24px] md:leading-[26px] mt-4 lg:mt-[8px] lg:ml-[97.48px]">
            AdSpark's unique edge lies in our integrated approach and unparalleled access to data. Our affiliation with Globe Telecom's 917Ventures grants exclusive access to vast audience insights, enabling precision targeting and deep consumer understanding others can't match. Our decade of hands-on AdTech expertise consistently delivers tangible results.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden text-left shadow-2xl group cursor-pointer mobile:h-[200px] h-[200px]"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* Card Content */}
              <motion.div
                className="relative z-10 mt-[60px] sm:mt-[80px] lg:mt-[105.51px] h-full px-4 sm:px-6 lg:px-8 mobile:mt-[20px] mt-[10px]"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.img
                  src={card.logo}
                  alt={`${card.title} logo`}
                  className="h-[50px] sm:h-[60px] lg:h-[73.72px] object-contain mb-2 sm:mb-6 mobile:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
                <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-medium leading-[28px] sm:leading-[32px] lg:leading-[35px] text-white mb-[14.1px]">
                  {card.title}
                </h3>
                <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[22px] lg:leading-[20px] text-white">
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
