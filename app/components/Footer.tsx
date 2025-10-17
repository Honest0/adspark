import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { a } from "framer-motion/m";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t px-4 md:px-10 lg:px-[76px] py-4 md:pt-10 lg:pt-[100px]">
      <div className="flex flex-col gap-4 md:gap-10">
        <div className="relative flex flex-col md:flex-row w-full justify-between gap-10">
          <div className="h-full mt-[4px]">
            <div className="flex items-center">
              <img
                src="/assets/FooterLogo.png"
                alt="AdSpark Logo"
                className="h-[105px] w-[287px]"
              />
            </div>
          </div>
          <div className="pr-0 md:pr-[20px] lg:pr-[100px] flex flex-col md:flex-row flex-wrap text-sm text-black gap-4 md:gap-10 lg:gap-20 xl:gap-[100px]">
            {/* About Us */}
            <div className="grid grid-cols-2 md:flex flex-row md:flex-col gap-2 md:gap-[26px] md:justify-start">
              <h4 className="text-[18px]">{`About Us`}</h4>
              <ul className="space-y-[13px] text-medium md:text-[16px] leading-[16px]">
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Our People</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Core Values</a></li>
                <li><a href="#">BCHII Family</a></li>
              </ul>
            </div>

            {/* Product & Services */}
            <div className="grid grid-cols-2 md:flex flex-row md:flex-col gap-2 md:gap-[26px] md:justify-start">
              <h4 className="text-[18px] ">Product & Services</h4>
              <ul className="space-y-[13px] text-medium md:text-[16px] leading-[16px]">
                <li><a href="#">Spark Intelligence</a></li>
                <li><a href="#">Spark Suite</a></li>
                <li><a href="#">Spark Studio</a></li>
                <li><a href="#">Spark Rewards</a></li>
                <li><a href="#">Spark Tech</a></li>
              </ul>
            </div>

            {/* Inquiries */}
            <div className="grid grid-cols-2 md:flex flex-row md:flex-col gap-2 md:gap-[26px] md:justify-start">
              <h4 className="text-[18px]">Inquiries</h4>
              <ul className="space-y-[13px] text-medium md:text-[16px] leading-[16px]">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Join Our Team</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative w-full w-full">
          <div className="w-full border-t border-gray-300 flex flex-col-reverse md:flex-row justify-between items-center text-[16px] md:flex-row text-black py-4">
            <p className="text-[16px] text-center font-normal leading-[16px]">{`© Copyright 2024 AdSpark, Inc. | All Rights Reserved`}</p>
            <div className="w-full md:w-max justify-end right-0 flex flex-row gap-3 pb-2">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors w-[14px] h-[22px]">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition-colors w-[22px] h-[22px]">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors w-[22px] h-[22px]">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
