'use client';

export default function Header() {
  return (
    <header className="absolute text-center flex w-full top-0 left-0 h-2 z-10  ml-[76px] mt-[61px]">
      {/* Logo */}
      <div className="flex items-center relative">
        <img
          src="/assets/HeaderLogo.png"
          alt="AdSpark Logo"
          className="w-1 object-contain max-w-[171px]"
        />
      </div>
      {/* Navigation */}
      <nav className="md:flex items-center space-x-12 text-white font-medium ml-[698px]">
        <a href="#" className="hover:text-gray-300 transition text-white mr-[40px]">Who We Are</a>
        <a href="#" className="hover:text-gray-300 transition text-white">The Spark</a>
      </nav>

      {/* Button */}
      <button className="relative md:block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
        Get In Touch
      </button>


    </header>
  );
}
