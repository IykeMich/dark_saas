'use client'
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Trusted by the world&apos;s most innovative teams</h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div 
            animate={{
              translateX: "-50%"
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          className="flex gap-16 pr-14 flex-none">
            {images.map((imageSrc, index) => (
              <Image key={index} src={imageSrc.src} alt={imageSrc.alt} className="flex-none h-8 w-auto"/>
            ))}
            {images.map((imageSrc, index) => (
              <Image key={index} src={imageSrc.src} alt={imageSrc.alt} className="flex-none h-8 w-auto"/>
            ))}
          </motion.div>
        </div>  
      </div>
    </section>
  );
};
