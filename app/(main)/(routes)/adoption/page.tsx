import ItemLayout from "@/components/item-layout";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";


const Adoption = async () => {

  const profile = await currentProfile()

  const donated = await db.donation.findMany({
    where: {
      NOT: {
        profileId: profile?.id,
      },
      pet:{
        available:true
      }
    },
    include: {
      pet: true
    }
  });
  // console.log("donatedd: ", donatedd);


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
      <hr className="my-3 border-black sm:mx-auto lg:my-8 w-4/5" />
      <h1 className="w-full text-center mt-4 text-[48px] lg:text-[64px] font-semibold">
        Adopt
      </h1>
      <div className="bg-white h-screen flex flex-col lg:flex-row">
        <div className="bg-[#ACE2E1] w-full lg:w-1/4 h-full">
          {" "}
          <h1 className="w-full text-center">Filter</h1>{" "}
        </div>
        <ScrollArea className="w-full lg:w-3/4 flex items-center justify-center">
          <div className="flex max-w-7xl p-6 lg:px-8 w-full">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {donated.map((item, index) => (
                  <ItemLayout
                    key={item.petId || index}
                    serviceTyp="adoption"
                    id={item.id}
                    name={donated[index].pet?.name}
                    type={donated[index].pet?.type}
                    breed={donated[index].pet?.breed}
                    imgUrl={donated[index].pet?.imageUrl}
                    desc={donated[index].pet?.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default Adoption;
