import React from "react";
import damaisesDolphins from "@/assets/images/damaisesDolphins.jpg";
import damaisesSpa from "@/assets/images/damaisesSpa.jpg";
import damaisesCulinary from "@/assets/images/damaisesCulinary.jpg";
import Image from "next/image";
import Button from "@/components/ui/Button";

const data = [
  {
    id: 1,
    title: "Damaises & Dolphins",
    description:
      "Experience a unique interaction with dolphins in their natural habitat.",
    image: damaisesDolphins,
    promo: "Save Over 20%",
  },
  {
    id: 2,
    title: "Damaises Spa Retreat",
    description:
      "Indulge in a luxurious spa experience with our exclusive spa package.",
    image: damaisesSpa,
    promo: "Relax and Save 15%",
  },
  {
    id: 3,
    title: "Damaises Culinary",
    description:
      "Join us for a culinary adventure with our award-winning chefs.",
    image: damaisesCulinary,
    promo: "Taste and Save 10%",
  },
];

const PackageSection = () => {
  return (
    <section className="h-full w-screen py-10 px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl lg:text-8xl carattere">Damaises Package</h1>
        <p className="text-md lg:text-lg text-[#322018]/70 font-light text-center mt-4">
          Upgrade your stay with one of our package offers to let you
          <br /> enjoy more of The Damai at a special promotional rate.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative w-full lg:w-[450px] h-[600px]"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 text-white px-4 py-2" />
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute top-10 left-0 w-full h-full flex items-start justify-center uppercase opacity-80 text-white">
                {item.promo}
              </h3>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-4 gap-6">
                <h2 className="text-3xl lg:text-4xl mt-2">{item.title}</h2>
                <p className="mt-2">{item.description}</p>
              </div>
              <Button className="absolute bottom-8 left-1/2 -translate-x-1/2 self-center mt-4 bg-white/50 backdrop-blur-md hover:bg-black/50 hover:backdrop-blur-md transition-all duration-300">
                More Info
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
