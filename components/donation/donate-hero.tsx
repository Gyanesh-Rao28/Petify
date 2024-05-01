import React from 'react'
import Image from "next/image";
import yeong from "@/public/yeong.jpg";
import hannah from "@/public/hannah.jpg";
import tron from "@/public/tron.jpg";
import roberto from "@/public/roberto.jpg";
import { Button } from '../ui/button';
import DonationBtn from './donation-btn';

const DonateHero = () => {
    const collectibleImages = [yeong, hannah, tron, roberto];
    return (
      <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
        <h1>
          <title>Collectible Platform</title>
        </h1>

        <div className="flex flex-row md:flex-row items-start md:items-center justify-between w-full">
          <div className="flex flex-col space-y-4 p-4 text-black md:w-2/3">
            <h1 className="text-4xl font-bold w-1/2 mb-10">
              We foster a supportive community of pet lovers.
            </h1>
            <p className="text-xl">
              Help pets find their perfect match by donating through Petify's
              adoption page. Your contribution can transform lives and bring joy
              to both animals and their new families
            </p>

            <div className="bg-[#002A48] text-[#F7DBA7] border-2 hover:text-[#002A48] hover:bg-transparent hover:border-2 hover:border-[#002A48] rounded-lg px-3 py-2 font-medium w-20">
              <DonationBtn />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 w-1/3">
            {collectibleImages.map((url, index) => (
              <Image
                key={index}
                src={url}
                alt="Collectible"
                width={200}
                height={300}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default DonateHero