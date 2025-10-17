'use client';

export default function Awards() {
  return (
    <section
      className="relative w-full transition-all lg:h-[650px] h-full overflow-visible bg-cover bg-center bg-no-repeat lg:block px-4 md:px-[30px] lg:px-[60px] pb-4 lg:py-0 mt-10 lg:mt-0"
      style={{ backgroundImage: "url('/assets/Award.jpg')" }}
    >
      <div className="transition-all w-full flex flex-col lg:flex-row gap-4 md:gap-[56px] flex-raw flex-nowrap justify-between items-center flex-1 h-full">
        {/* 🏅 Left Badge Image */}
        <div
          className="z-20 flex justify-center w-full flex-1 -mt-8 lg:-mt-16"
        >
          <img
            src="/assets/Award1.png"
            alt="Award Badge"
            className="w-full 2xl:w-auto max-w-[820px]"
          />
        </div>

        {/* 🪩 Right Card */}
        <div className="transition-all md:mr-0 lg:mr-[80px] xl:mr-[120px] w-[250px] lg:w-[340px] mobile:h-[300px] sm:h-[300px] md:h-[440px] lg:h-[480px] z-30 rounded-3xl overflow-hidden shadow-2xl bg-[#12054D] text-white flex flex-col justify-between">
          <div className="p-4 md:p-5 w-full h-full flex flex-col justify-between relative">
            {/* Header */}
            <div className="flex flex-row items-center gap-3">
              <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-left">
                {`AdSpark AI Chatbot`}
              </h3>
            </div>

            {/* Top Card Section */}
            <div
              className="
              relative bg-[#0A033C] rounded-xl p-3 sm:p-4 mb-4
              h-[130px] sm:h-[140px] md:h-[150px] lg:h-[152px]
              flex flex-col items-center justify-center text-center
            "
            >
              <img
                src="/assets/Dot.png"
                alt="menu"
                className="absolute right-3 top-3 w-[18px] md:w-[20px] cursor-pointer"
              />
              <img
                src="/assets/AwardLogo.png"
                alt="AdSpark"
                className="mb-2 w-[120px] sm:w-[140px] md:w-[150px] h-auto"
              />
              <p className="text-[12px] sm:text-[13px] opacity-40 leading-snug px-1 sm:px-2">
                Learn more about upcoming events and rewards related to this ad.
              </p>
            </div>

            {/* Bottom Card Section */}
            <div
              className="
              relative bg-[#0A033C] rounded-xl p-3 sm:p-4
              h-[200px] sm:h-[220px] md:h-[230px] lg:h-[233px]
              text-left
            "
            >
              <p className="text-[12px] sm:text-[13px] mb-3 opacity-40">
                Ask me anything about this ad...
              </p>
              <button
                className="
                absolute right-[10px] bottom-[10px]
                w-[60px] sm:w-[65px] md:w-[70px]
                h-[32px] sm:h-[34px] md:h-[36px]
                bg-[linear-gradient(90deg,#FF4803_0%,#FF9800_100%)]
                text-white text-[12px] sm:text-[13px] md:text-[14px]
                font-medium rounded-[10px]
                flex items-center justify-center
              "
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
