import ItemLayout from "@/components/item-layout";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ScrollArea } from "@/components/ui/scroll-area";
import AdoptHero from "@/components/adoption/adopt-hero";
import PetFilter from "@/components/adoption/pet-filter";




const Adoption = async () => {

  const profile = await currentProfile()

  const donatedPets = await db.donation.findMany({
    where: {
      pet: {
        available: true,
      },
      NOT: {
        profile: {
          id: profile?.id,
        },
      },
    },
    include: {
      pet: true,
    },
  });

  



  return (
    <>
      <AdoptHero />

      <div className="mt-12">
        <h1 className="w-full text-center my-4 text-[48px] lg:text-[64px] font-semibold">
          Adopt
        </h1>
        <div className="bg-white h-screen flex flex-col lg:flex-row">
          <div className="bg-[#FCEED5] w-full lg:w-1/4 lg:h-full">
            <PetFilter />
          </div>
          <ScrollArea className="w-full lg:w-3/4 flex items-center justify-center">
            <div className="flex max-w-7xl p-6 lg:px-8 w-full">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {donatedPets.map((item, index) => (
                    <ItemLayout
                      key={item.petId || index}
                      serviceTyp="adoption"
                      id={item.id}
                      name={donatedPets[index].pet?.name}
                      type={donatedPets[index].pet?.type}
                      breed={donatedPets[index].pet?.breed}
                      imgUrl={donatedPets[index].pet?.imageUrl}
                      desc={donatedPets[index].pet?.description}
                      avail={donatedPets[index].pet?.available}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default Adoption;
