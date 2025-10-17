'use client';

export default function CallToAction() {
  return (
    <section className="relative w-full h-[500px] mobile:h-[550px] md:h-[680px] lg:h-[718px] overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/Hero.mp4" type="video/mp4" />
      </video>

      {/* 🌟 Main Content */}
      <div className="relative z-10 text-white text-center flex flex-col mt-[80px] md:mt-[100px] lg:mt-[120.27px] items-center h-full px-4">
        <div className="flex flex-col justify-center items-center">
          {/* Logo */}
          <img
            src="/assets/CallLogo.png"
            alt="CallLogo"
            className="w-[220px] sm:w-[320px] md:w-[380px] lg:w-[430px] h-auto"
          />

          {/* Main Title */}
          <h1
            className="
              text-[28px] sm:text-[48px] md:text-[60px] lg:text-[80px]
              mt-[-4px] md:mt-[-8px]
              bg-gradient-to-r from-[#FFFFFF] to-[#FFCB3C]
              bg-clip-text text-transparent leading-tight md:leading-none
            "
          >
            A MADTECH
          </h1>

          {/* Secondary Button */}
          <button
            className="
              w-[180px] h-[45px] sm:w-[220px] sm:h-[55px] md:w-[350px] md:h-[70px] lg:w-[531px] lg:h-[98px]
              text-[16px] sm:text-[20px] md:text-[30px] lg:text-[80px]
              font-medium border border-white rounded-full
              flex items-center justify-center text-center
            "
          >
            INNOVATOR
          </button>

          {/* Description */}
          <p
            className="
              text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px]
              mt-[20px] md:mt-[25px] lg:mt-[29.75px]
              px-4 md:px-6
            "
          >
            Spark your next big campaign with us
          </p>

          {/* CTA Button */}
          <button
            className="
              mt-[50px] md:mt-[70px] lg:mt-[80.47px]
              relative px-4 sm:px-6 py-2 sm:py-3 rounded-full 
              bg-[linear-gradient(90deg,#1A52FF_0%,#3616FF_100%)] text-white
              text-[12px] sm:text-[14px] md:text-[16px]
              transition-all duration-300 ease-linear hover:bg-blue-700
              before:content-[''] before:absolute before:right-1/2 before:top-1/2
              before:h-3/4 before:w-2/3 before:-translate-y-1/2 before:translate-x-1/2
              before:origin-center before:rounded-full 
              before:bg-blue-400 before:opacity-60 before:blur-md before:animate-ping
            "
          >
            Spark A Conversation with us
          </button>
        </div>
      </div>

      {/* 🌈 Bottom Decorations */}
      <div className="absolute bottom-0 w-full flex justify-between items-end px-2 md:px-4 lg:px-0">
        {/* Left Section */}
        <div className="relative w-[220px] md:w-[370px] h-auto">
          {/* Gradient background */}
          <div
            className="
              absolute left-[5px] sm:left-[10px] md:left-[20px] lg:left-[41px] bottom-0
              w-[120px] sm:w-[160px] md:w-[220px] lg:w-[316px]
              h-[150px] sm:h-[180px] md:h-[260px] lg:h-[363px]
              bg-[linear-gradient(90deg,#FFBB00_0%,#ED4F00_100%)]
              rounded-tr-[80px] sm:rounded-tr-[100px] md:rounded-tr-[140px] lg:rounded-tr-[200px]
              z-0 hidden lg:block
            "
          ></div>

          {/* Foreground Images */}
          <img
            src="assets/Call1.png"
            alt="Left"
            className="
              absolute bottom-[20px] sm:bottom-[30px] md:bottom-[50px] lg:bottom-[80px]
              left-[40px] sm:left-[60px] md:left-[90px] lg:left-[130px]
              h-auto object-contain z-10
              scale-[1.8]
            "
          />
          <img
            src="assets/CallLeft1.png"
            alt="CallLeft1"
            className="
              absolute left-[10px] sm:left-[20px] md:left-[30px] lg:left-[41px]
              bottom-[100px] sm:bottom-[140px] md:bottom-[200px] lg:bottom-[312px]
              w-[35px] sm:w-[45px] md:w-[70px] lg:w-[95px]
              h-[35px] sm:h-[45px] md:h-[70px] lg:h-[95px]
              z-20 hidden lg:block
            "
          />
          <img
            src="assets/CallRight2.png"
            alt="CallRight2"
            className="
              absolute left-[10px] sm:left-[30px] md:left-[120px] lg:left-[270px]
              bottom-[80px] sm:bottom-[120px] md:bottom-[180px] lg:bottom-[225px]
              w-[35px] sm:w-[45px] md:w-[70px] lg:w-[95px]
              h-[35px] sm:h-[45px] md:h-[70px] lg:h-[95px]
              z-20 hidden lg:block
            "
          />
        </div>

        {/* Right Section */}
        <div className="relative w-[220px] md:w-[370px] h-auto">
          {/* Gradient background */}
          <div
            className="
              absolute right-[5px] sm:right-[10px] md:right-[20px] lg:right-[39px] bottom-0
              w-[120px] sm:w-[160px] md:w-[220px] lg:w-[316px]
              h-[150px] sm:h-[180px] md:h-[260px] lg:h-[363px]
              bg-[linear-gradient(90deg,#4000FF_0%,#0084FF_100%)]
              rounded-tl-[80px] sm:rounded-tl-[100px] md:rounded-tl-[140px] lg:rounded-tl-[200px]
              z-0 hidden lg:block
            "
          ></div>

          {/* Foreground Images */}
          <img
            src="assets/Call2.png"
            alt="Right"
            className="
              absolute bottom-[20px] sm:bottom-[30px] md:bottom-[50px] lg:bottom-[87px]
              right-[20px] sm:right-[30px] md:right-[50px] lg:right-[60px]
              h-auto object-contain z-10
              scale-[1.6] lg:scale-[1.8]
            "
          />
          <img
            src="assets/CallRight1.png"
            alt="CallRight1"
            className="
              absolute left-[-5px] sm:left-[0px] md:left-[-10px] lg:left-[-25px]
              bottom-[90px] sm:bottom-[120px] md:bottom-[160px] lg:bottom-[192px]
              w-[35px] sm:w-[45px] md:w-[70px] lg:w-[95px]
              h-[35px] sm:h-[45px] md:h-[70px] lg:h-[95px]
              z-20 hidden lg:block
            "
          />
          <img
            src="assets/CallLeft2.png"
            alt="CallLeft2"
            className="
              absolute right-[20px] sm:right-[30px] md:right-[45px] lg:right-[63px]
              bottom-[130px] sm:bottom-[180px] md:bottom-[250px] lg:bottom-[312px]
              w-[35px] sm:w-[45px] md:w-[70px] lg:w-[95px]
              h-[35px] sm:h-[45px] md:h-[70px] lg:h-[95px]
              z-20 hidden lg:block
            "
          />
        </div>
      </div>
    </section>
  );
}
