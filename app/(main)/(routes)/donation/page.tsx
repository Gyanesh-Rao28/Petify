import DonationBtn from '@/components/donation/donation-btn';
import { Button } from '@/components/ui/button';
import React from 'react'

const Donation = () => {
  return (
    <>
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="bg-[#002A48] text-[#F7DBA7] border-2 hover:text-[#002A48] hover:bg-transparent hover:border-2 hover:border-[#002A48] rounded-lg px-3 py-2 font-medium ">
          <DonationBtn />
        </div>
      </div>
      <div className="bg-[#FCEED5] h-screen"></div>
    </>
  );
}

export default Donation