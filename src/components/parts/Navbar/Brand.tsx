import Link from "next/link";
import React from "react";

const Brand = () => {
  return (
    <Link href="/" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
      <h1 className="text-4xl carattere tracking-wide">Damaises</h1>
    </Link>
  );
};

export default Brand;
