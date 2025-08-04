import Button from "@/components/ui/Button";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative h-screen w-screen">
      <div className="absolute flex flex-col w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl lg:text-[120px] text-[#322018] font-light text-center carattere lg:leading-24">
          Hard to Find,
          <br /> hard to leave
        </h1>
        <p className="text-lg lg:text-xl text-[#322018]/70 font-light text-center mt-4">
          Just a few hours from the airport, on a green hill overlooking the
          sea. A<br /> small resort with a big view and a great restaurant. Here
          you find the true Bali.
        </p>
        <Button className="self-center mt-4 bg-[#903C02] hover:bg-[#b04f0f]">
          Explore our village
        </Button>
      </div>
      <div className="absolute flex flex-col w-full bottom-0 text-center text-xs mb-4">
        <h1 className="opacity-50 tracking-widest">WELCOME TO DAMAISES</h1>
        <p className="mt-4 opacity-80">
          A dozen villas, blessed by breezes from nearby spice farms. A prize
          winning cuisine, served under
          <br /> the stars. A spa with the spirit of Bali and a pool with a view
          of distant volcanoes.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
