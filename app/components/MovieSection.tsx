"use client";

export default function MovieSection() {
  return (
    <section
      className="
        relative w-full h-[60vh] mobile:h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen
      "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/Patner.mp4" type="video/mp4" />
      </video>
      <div
        className="
          absolute bottom-[16px] left-[16px]
          sm:bottom-[24px] sm:left-[30px]
          lg:bottom-[32px] lg:left-[45px]
          w-[10px] sm:w-[10px] lg:w-auto
        "
      >
        <img
          src="/assets/Audio.png"
          alt="audio"
          className="w-full h-auto object-contain"
        />
      </div>
      <div
        className="
          absolute bottom-[16px] right-[16px]
          sm:bottom-[20px] sm:right-[25px]
          lg:bottom-[26px] lg:right-[35px]
          w-[80px] sm:w-[100px] md:w-[120px] lg:w-[129px]
          h-auto
        "
      >
        <img
          src="/assets/AdsparkLogo.png"
          alt="AdsparkLogo"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
