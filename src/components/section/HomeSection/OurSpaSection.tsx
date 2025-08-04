import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import Spa from "@/assets/images/spa.jpg";

const OurSpaSection = () => {
  return (
    <section className="relative h-full lg:h-screen w-screen mt-20 lg:mt-0">
      <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full gap-4 lg:gap-32">
        <Image
          src={Spa}
          alt="our-spa"
          className="w-full h-[400px] lg:w-[500px] lg:h-[600px] object-cover px-4 lg:hidden"
        />
        <div className="text-left px-4">
          <h3 className="text-[#140D0A]/50">Our Restaurant</h3>
          <h1 className="carattere text-4xl lg:text-8xl text-[#903C02] mt-5 lg:mt-10">
            Prize Winning
            <br />
            Balinese Bistro
          </h1>
          <p className="lg:w-[520px] text-[#322018]/70 font-light mt-5 lg:mt-10">
            The food at Damai is easy to enjoy. Simple brasserie dishes.
            Balinese classics. Tropical, local and good.
            <br className="hidden lg:block" />
            <br />
            Our cuisine has won international awards and have been featured in
            two cook books.
          </p>
          <Button className="self-center mt-5 lg:mt-10 bg-[#903C02] hover:bg-[#b04f0f]">
            Explore our village
          </Button>
        </div>
        <Image
          src={Spa}
          alt="our-spa"
          className="w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] object-cover hidden lg:block"
        />
      </div>
    </section>
  );
};

export default OurSpaSection;
