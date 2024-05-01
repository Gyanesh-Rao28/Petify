import DonateHero from '@/components/donation/donate-hero';
import Image from 'next/image';
import React from 'react'
import anoir from "@/public/anoir.jpg";
import DonateSucces from '@/components/donation/donate-success';

const Donation = () => {
  return (
    <>
      <div className="bg-white ">
        <DonateHero />
      </div>
      <div className="bg-[#FCEED5]">
        <DonateSucces />
      </div>
    </>
  );
}

export default Donation