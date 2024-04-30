// components/HeroSection.js
import React from "react";
import Image from "next/image";
import heroImage from "@/public/jamie-street.jpg"; // make sure to add your image in the public folder

const HeroSection = () => {
    return (
        <div className="relative h-screen">
            {/* Background image */}
            <Image
                src={heroImage}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Background"
                className="z-0"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Overlay content */}
            <div className="absolute top-1/4 left-1/4 text-white z-20 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
        WELCOME to the family.
    </h1>
    <p className="mt-4 text-sm sm:text-base md:text-lg font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat.
    </p>
    <div className="mt-6">
        <a
            href="/shop"
            className="inline-block bg-[#F7DBA7] text-[#002A48] font-medium text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
            Order Online
        </a>
    </div>
</div>

        </div>
    );
};

export default HeroSection;
