import { currentProfile } from "@/lib/current-profile";
import { RedirectToSignIn, SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const profile = await currentProfile();

  if (profile) {
    redirect(`/profile/${profile.id}`);
  }

  return (
    <>
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="bg-[#002A48] text-[#F7DBA7] border-2 hover:text-[#002A48] hover:bg-transparent hover:border-2 hover:border-[#002A48] rounded-lg px-3 py-2 font-medium ">
          Loading ...<RedirectToSignIn />
        </div>
      </div>
      <div className="bg-[#FCEED5] h-screen"></div>
    </>
  );
};

export default ProfilePage;
