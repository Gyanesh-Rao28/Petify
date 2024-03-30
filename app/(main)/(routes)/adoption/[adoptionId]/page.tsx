import AdoptBtn from "@/components/adoption/adopt-btn";
import { db } from "@/lib/db";
import Image from "next/image";

interface AdoptionIdPageProps {
    params: {
        adoptionId: string;
    };
}

const AdoptionIdPage = async({ params }: AdoptionIdPageProps) => {
  const donate = await db.donation.findFirst({
    where: {
      id: params.adoptionId,
    },
    include: {
      pet: true,
    },
  });

  const profile = await db.profile.findUnique({
    where: {
      id: donate?.profileId,
    },
  });

  // console.log("donate: ", donate);

  return (
    <div className="bg-white relative z-0">
      <div className="pt-24">
        {/* <!-- Image gallery --> */}
        <div className="mx-auto mt-6 w-1/4">
          <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block ">
            <Image
              src={donate?.pet.imageUrl || ""}
              alt={donate?.pet.description || "pet pohto"}
              className="h-full w-full object-cover object-center"
              height={256}
              width={256}
            />
          </div>
        </div>

        {/* <!-- Product info --> */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {donate?.pet.name}
            </h1>
          </div>

          {/* <!-- Options --> */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {profile?.name}
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">
                Owner Details
              </h3>
              {/* Owner Details */}
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-md">
                  <li className="text-gray-400">
                    <span className="text-gray-600">{profile?.email}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      {profile?.phoneNumber}
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      {profile?.instaProfile || "Not Available"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* adoption button */}
            <AdoptBtn petId={donate?.petId || ""} />
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-2">
            {/* <!-- Description and details --> */}

            <div className="mt-10">
              <h3 className="text-xl font-medium text-gray-900">Highlights</h3>
              {/* Highlights */}
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-md">
                  <li className="text-gray-400">
                    <span className="text-gray-600">{donate?.pet.breed}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      {donate?.pet.age} months
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      {donate?.pet.location}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="text-xl font-medium text-gray-900">Description</h2>

              <div className="mt-4 space-y-6">
                <p className="text-md text-gray-600">
                  {donate?.pet.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionIdPage;
