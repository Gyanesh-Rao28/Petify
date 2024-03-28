import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";


const Adoption = async() => {

  const profile = await currentProfile()

  const donated = await db.donation.findMany({
    where: {
      NOT: {
        profileId: profile?.id,
      },
    },
    include:{
      pet:true
    }
  });
  

  return (
    <>
      <div className="bg-white h-2/3 flex justify-center items-center">
        <div className="w-4/5 h-1/2 lg:h-2/3 rounded-3xl bg-[#FCEED5] mt-12 relative overflow-hidden">
          <div className="h-full w-4/5 rounded-3xl bg-[#002A48] absolute bottom-10 lg:bottom-24 left-[70%] lg:left-[80%] -rotate-[30deg]"></div>
          <div className="bg-[#B9E3C6] h-1/2 w-1/2 absolute top-1/4 right-5 text-right text-white">
            <h1 className="text-3xl">One More Friend</h1>
            <h2 className="text-xl">Thousands More Fun</h2>
            <p className="text-sm">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
          </div>
        </div>
      </div>
      <hr className="my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="bg-white h-screen">
        
      </div>
    </>
  );
};

export default Adoption;
