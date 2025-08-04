import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import Spa from "@/assets/images/spa.jpg";

const OurSpaSection = () => {
  return (
    <section className="relative h-screen w-screen border-b border-[#903C02]/30">
      <div className="flex flex-row items-center justify-center h-full w-full gap-32">
        <div>
          <h3 className="text-[#140D0A]/50">Our Spa</h3>
          <h1 className="carattere text-8xl text-[#903C02] mt-10">
            Be pampered
            <br />
            in paradise
          </h1>
          <p className="w-[520px] text-[#322018]/70 font-light mt-10">
            The Spa at Damai offers a wide range of pampering and therapeutic
            massage treatments based on traditional Balinese techniques.
          </p>
          <Button className="self-center mt-10 bg-[#903C02] hover:bg-[#b04f0f]">
            Explore our village
          </Button>
        </div>
        <Image
          src={Spa}
          alt="our-restaurant"
          className="w-[500px] h-[600px] object-cover"
        />
      </div>
    </section>
  );
};

export default OurSpaSection;
