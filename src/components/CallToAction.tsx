'use client'
import helix2 from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  })
  const translateY = useTransform(scrollYProgress, [0,1], [-40, 40])
  return (
    <section 
    ref={containerRef}
    className="bg-black text-white py-[72px] sm:py-24 text-center overflow-x-clip">
      <div className="container max-w-xl relative">
        
        <motion.div style={{translateY}}>
        <Image src={helix2} alt="" className="absolute top-6 left-[calc(100%+36px)]" />
        </motion.div>
        
        <motion.div style={{translateY}}>
        <Image src={emojiStar} alt="" className="absolute -top-[120px] right-[calc(100%+24px)]" />
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>

        <form action="" className="mt-10 flex flex-col gap-3 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3Af] md:flex-1" />
          <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
        
      </div>
    </section>
  );
};
 