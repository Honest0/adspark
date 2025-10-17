import Spark from "./Spark";

export default function Core() {
  return (
    <section className="relative w-full min-h-[762.57px] bg-white overflow-hidden">
      {/* 🔹 Full background image */}
      <div className="absolute inset-0 z-10">
        <img
          src="/assets/BackPatner.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* 🔹 Content wrapper */}
      <div className="relative w-full mt-4 lg:mt-[113.48px] grid lg:grid-cols-2 md:grid-cols-2 md:justify-between items-center z-10 px-4 md:px-0 mobile:bg-red screens-largeDesktop:bg-green-400 largeDesktop:width-[1000px] lg:pr-[79.36px]">
        {/* Left content */}
        <div className="mx-auto md:ml-[80px] mt-4 lg:mt-[52px] text-center md:text-left max-w-[534px]">
          <h2 className="text-[50px] lg:text-[80px] leading-tight mb-6 md:text-[40px]">A Glimpse into Our Core</h2>
          <p className="lg:text-[16px] md:text-[14px] mb-4">
            At AdSpark, every successful campaign begins with SparkIntelligence.
          </p>
          <p className="lg:text-[16px] md:text-[14px] mb-4 leading-[26px]">
            We start with powerful insights—deep, data-driven understanding of your audience. These insights are then transformed into impactful solutions through our three core pillars: Media, Content, and Innovation.
          </p>
          <button className="w-[196px] h-[57px] mt-10 text-[14px] text-white px-6 py-3 rounded-full bg-[linear-gradient(90deg,#0F67FF_0%,#3811FF_100%)] mx-auto md:mx-0">
            Explore Our Services
          </button>
        </div>

        {/* Right Spark component */}
        <div className="relative md:relative lg:w-[697px] h-[400px] lg:h-[566px] md:w-[500px] mt-10 md:mt-0 md:mx-0 -mx-8 flex justify-center md:justify-end">
          <Spark />
        </div>
      </div>
    </section>
  );
}
