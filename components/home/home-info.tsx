import React from "react";
import Image from "next/image";
import flouffy from "@/public/flouffy.jpg";
import roberto from "@/public/roberto.jpg";
import HomeTypo from "./home-typo";

const HomeInfo = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 space-y-4 md:space-y-0 md:space-x-4">
        {/* ------- */}
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl lg:text-4xl font-semibold text-[#002A48]">
            At Petify, we're passionate about connecting animals with loving
            homes.
          </h1>
          <HomeTypo />
        </div>
        {/* ----- */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-1">
            <Image
              src={roberto}
              alt="Highway"
              layout="responsive"
              className="w-full h-auto"
            />
          </div>
          <div className="sm:col-span-1">
            <Image
              src={flouffy}
              alt="Cityscape"
              layout="responsive"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
