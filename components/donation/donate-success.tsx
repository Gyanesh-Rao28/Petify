import React from 'react'
import Image from "next/image";
import user from '@/public/user.jpg'
import user2 from "@/public/female-user.jpg";
import user3 from "@/public/user3.jpg";
const DonateSucces = () => {
    const breads = [
      {
        img: user,
        title: "Aradhy",
        description:
          "Aradhy discovered Bella on Petify, instantly connecting with her soulful eyes. After adopting Bella, they share endless adventures, from park strolls to cozy snuggles.Their bond proves that the perfect pet match is just a click away on Petify.",
      },
      {
        img: user2,
        title: "Sarayu",
        description:
          "Sarayu found Luna on Petify, instantly drawn to her playful spirit.After adoption, Luna brings love and joy into Sarayu's home.Now, Sarayu and Luna share precious moments of cuddles and laughter.Their bond is a reminder of the joy pets bring into our lives.",
      },
      {
        img: user3,
        title: "Kavya",
        description:
          "Kavya, an animal lover, discovered Petify's donation page. she donated her time and care by fostering a shy cat named Whiskers.Whiskers eventually found his forever home, thanks to Kavya's efforts.Kavya's act of donating her time showcased the power of love and kindness in animal rescue.",
      },
    ];
  return (
    <div className="min-h-screen bg-[#FCEED5] p-8 flex flex-col items-center justify-around">
      <h1 className=" text-[#002A48] text-[52px] font-semibold">
       Success Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {breads.map((bread, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <Image
              src={bread.img}
              alt={bread.title}
              width={128}
              height={128}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold">{bread.title}</h2>
            <p>{bread.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonateSucces