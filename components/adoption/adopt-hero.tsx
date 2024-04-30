import Image from "next/image";
import dogImage from "@/public/jamie.jpg";


const AdoptHero = () => {
    return (
      <>
        <div className="relative min-h-screen z-0">
          <Image
            src={dogImage}
            alt="Dogs"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

          <div className="absolute top-1/4 px-4 sm:px-6 lg:px-8 z-20 w-full text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              WELCOME to the family.
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-white font-light max-w-md mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              elit, tristique placerat.
            </p>
            <div className="mt-4">
              <a
                href="/shop"
                className="inline-block bg-[#F7DBA7] text-[#002A48] font-medium text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </>
    );
};

export default AdoptHero;
