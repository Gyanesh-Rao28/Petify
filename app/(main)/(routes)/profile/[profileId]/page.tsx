  import ItemLayout from "@/components/item-layout";
  import UserAvatar from "@/components/navigation/UserProfile";
  import { Button } from "@/components/ui/button";
  import { currentProfile } from "@/lib/current-profile";
  import { db } from "@/lib/db";
  import React from "react";
  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
  import { ExternalLink } from "lucide-react";
import { SignIn } from "@clerk/nextjs";



  const ProfileIdPage = async () => {

    const profile = await currentProfile();

  

    if (!profile) {
      return <SignIn />;
    }

  const donate = await db.donation.findMany({
    where: {
      profileId: profile.id,
    },
    include: {
      pet: true
    }
  });

  const adopt = await db.adoption.findMany({
    where: {
      profileId: profile.id,
    },
    include: {
      pet: true
    }
  });

  const order = await db.order.findMany({
    where: {
      profileId: profile.id,
    },
    include: {
      product: true
    }
  });

  const uniqueOrdersMap = new Map();

  order.forEach((item) => {

    const key = item.profileId + "-" + item.productId;

    if (!uniqueOrdersMap.has(key)) {
      uniqueOrdersMap.set(key, item);
    }
  });

  const uniqueOrders = Array.from(uniqueOrdersMap.values());




  return (
    <>
      <div className="h-screen flex flex-col flex-wrap items-center bg-white ">
        <header className="bg-[#FCEED5] shadow mt-24 lg:mt-32 w-4/5">
          <div className="mx-auto max-w-7xl p-2 lg:px-8">
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>

        <main className="w-4/5 bg-amber-100 mt-5">
          <div className="ml-2 py-5 lg:px-8 flex items-center">
            <UserAvatar src={profile.imageUrl || undefined} />
            <p className="ml-4 text-2xl font-semibold">{profile.name}</p>
          </div>
        </main>
        <section>To Be Done</section>
      </div>

      <div className="bg-[#FCEED5] overflow-y flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl mt-24 lg:mt-32 tracking-wide font-semibold text-[#002A48]">
          Manage History
        </h1>
        {/* Manage content */}
        <div className="w-4/5  m-4 flex max-w-7xl p-6 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-semibold my-24">Donations</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {donate.length !== 0 ? (
                donate.map((item, index) => (
                  <ItemLayout
                    key={item.id}
                    serviceTyp="donation"
                    id={donate[index].pet?.id}
                    name={donate[index].pet?.name}
                    type={donate[index].pet?.type}
                    breed={donate[index].pet?.breed}
                    imgUrl={donate[index].pet?.imageUrl}
                    desc={donate[index].pet?.description}
                    avail={donate[index].pet?.available}
                  />
                ))
              ) : (
                <>
                  <a
                    href="/donation"
                    className="transition duration-800 ease-in-out hover:scale-110"
                  >
                    <Alert className="w-full">
                      <AlertTitle>Get your new best friend...</AlertTitle>{" "}
                      {/*To Be Done*/}
                      <AlertDescription>
                        <Button variant="link">
                          Donate
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </Button>
                      </AlertDescription>
                    </Alert>
                  </a>
                </>
              )}
            </div>

            <h2 className="text-3xl font-semibold my-24">Adoptions</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {adopt.length !== 0 ? (
                adopt.map((item, index) => (
                  <ItemLayout
                    key={item.id}
                    serviceTyp="adoption"
                    id={adopt[index].pet.id}
                    name={adopt[index].pet.name}
                    type={adopt[index].pet.type}
                    breed={adopt[index].pet.breed}
                    imgUrl={adopt[index].pet.imageUrl}
                    desc={adopt[index].pet.description}
                  />
                ))
              ) : (
                <>
                  <a
                    href="/adoption"
                    className="transition duration-800 ease-in-out hover:scale-110"
                  >
                    <Alert className="w-full">
                      <AlertTitle>Get your new best friend...</AlertTitle>
                      <AlertDescription>
                        <Button variant="link">
                          Adopt
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </Button>
                      </AlertDescription>
                    </Alert>
                  </a>
                </>
              )}
            </div>

            <h2 className="text-3xl font-semibold my-24">Products</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {uniqueOrders.length !== 0 ? (
                uniqueOrders.map((item, index) => (
                  <ItemLayout
                    serviceTyp="shop"
                    key={item.id}
                    id={uniqueOrders[index].productId}
                    name={uniqueOrders[index].product.title}
                    imgUrl={uniqueOrders[index].product.imageUrl}
                    desc={uniqueOrders[index].product.description}
                    price={uniqueOrders[index].product.price}
                  />
                ))
              ) : (
                <>
                  <a
                    href="/shop"
                    className="transition duration-800 ease-in-out hover:scale-110"
                  >
                    <Alert className="w-full">
                      <AlertTitle>Get your best friend a new toy...</AlertTitle>
                      <AlertDescription>
                        <Button variant="link">
                          Get Product
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </Button>
                      </AlertDescription>
                    </Alert>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Manage content end */}
      </div>
      <div className="bg-[#FFE6E6] h-screen flex flex-col items-center"></div>
    </>
  );
};

export default ProfileIdPage;
