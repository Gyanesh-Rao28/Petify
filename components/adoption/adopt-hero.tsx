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

          <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-6 text-center">
            <h1 className="text-5xl font-bold text-white">
              <span className="text-[#F7DBA7]">Premium </span> 
              Natural Pet Foods
            </h1>
            <p className="mt-4 text-md md:text-xl text-white  md:w-2/3">
              Experience the fusion of traditional farming and modern nutrition
              with our all-natural pet food, formulated from the best Indian
              ingredients.
            </p>
            {/* Updated button with animation */}
            <div className="mt-10">
              <a
                href="/shop"
                className="inline-block bg-[#F7DBA7] text-[#002A48] font-semibold text-lg px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
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
