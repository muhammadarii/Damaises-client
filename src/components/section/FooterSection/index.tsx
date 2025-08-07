import Link from "next/link";
import React from "react";

const menu = [
  { name: "Stay", link: "/stay" },
  { name: "Dining", link: "/dining" },
  { name: "Relax", link: "/relax" },
  { name: "Discover", link: "/discover" },
];

const FooterSection = () => {
  return (
    <section className="w-screen h-[500px] border-t border-[#903C02]/10 mt-14 grid grid-cols-3 gap-4 items-start justify-items-center">
      <div className="w-full">
        <div className="flex flex-col items-start pl-4 lg:pl-10 lg:pt-20">
          {/* Menu */}
          <h1 className="opacity-50 tracking-widest">MENU</h1>
          <div className="flex flex-col gap-5 items-start mt-8">
            {menu.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  className="text-[#903C02] hover:text-[#a57452] duration-500 text-4xl lg:text-6xl carattere tracking-widest"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row items-start justify-start gap-20 pl-4 lg:pl-10 lg:pt-20 border-x border-[#903C02]/10">
        <div className="flex flex-col">
          <h1 className="opacity-50 tracking-widest">STAY</h1>
          <div className="flex flex-col gap-6 mt-8 opacity-70">
            <span>Garden Villa</span>
            <span>Pool Studio</span>
            <span>Pool Villa</span>
            <span>Master Pool Villa</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="opacity-50 tracking-widest">DISCOVER</h1>
          <div className="flex flex-col gap-6 mt-8 opacity-70">
            <span>Secret Waterfall</span>
            <span>Dolphins of Lovina</span>
            <span>Ceremonies</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col pl-4 lg:pl-10 lg:pt-20">
        <h1 className="opacity-50 tracking-widest">CONTACT</h1>
        <div className="flex flex-col items-start gap-6 mt-8 opacity-70">
          <span>
            Jl. Damai, Kayu Putih<br></br> Kayu Putih, Lovina, Buleleng, Bali,
            Indonesia
          </span>
          <span>info@damaises.com</span>
          <span>Phone: +62 812 3456 7890</span>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
