import Image from "next/image";
import React from "react";
import Sate from "@/assets/images/sate.jpg";
import Button from "@/components/ui/Button";

const OurRestaurantSection = () => {
  return (
    <section className="relative h-screen w-screen">
      <div className="flex flex-row items-center justify-center h-full w-full gap-[100px]">
        <Image
          src={Sate}
          alt="our-restaurant"
          className="w-[400px] h-[500px] object-cover"
        />
        <div>
          <h3 className="text-[#140D0A]/50">Our Restaurant</h3>
          <h1 className="carattere text-6xl text-[#903C02] mt-10">
            Prize Winning
            <br />
            Balinese Bistro
          </h1>
          <p className="w-[520px] text-[#322018]/70 font-light mt-10">
            The food at Damai is easy to enjoy. Simple brasserie dishes.
            Balinese classics. Tropical, local and good.
            <br />
            <br />
            Our cuisine has won international awards and have been featured in
            two cook books.
          </p>
          <Button className="self-center mt-10 bg-[#903C02] hover:bg-[#b04f0f]">
            Explore our village
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurRestaurantSection;
