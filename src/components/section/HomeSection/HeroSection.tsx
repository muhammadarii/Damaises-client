import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-screen h-screen">
      <div className="absolute w-full h-full bg-black opacity-40" />
      <video
        src="/videos/Hero.mp4"
        muted
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#eae5df]">
        <h1 className="text-6xl font-light text-center carattere">D</h1>
        <h1 className="text-xl font-light text-center">Hotel & Resort</h1>
        <p className="text-[120px] font-extralight text-center carattere tracking-wide">
          Find the spirit of Bali at Damaises
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
