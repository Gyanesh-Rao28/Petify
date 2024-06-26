import React from "react";

import { CheckCheck, ChevronRight, Play } from "lucide-react";

const HomeTypo = () => {
  return (
    <>
      <div className="text-[#002A48] p-4 rounded-lg mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <ul>
          <li className="flex items-center mb-2">
            <CheckCheck className="h-12 w-12 mr-2 text-red-400" />
            <div>
              <strong>Adoption</strong>
              <p className="text-sm">
                We facilitate the adoption process, helping animals find forever
                homes where they're cherished and cared for.
              </p>
            </div>
          </li>

          <li className="flex items-center mb-2">
            <CheckCheck className="h-12 w-12 mr-2 text-blue-400" />
            <div>
              <strong>Transparency</strong>
              <p className="text-sm">
                We operate with transparency, ensuring that every transaction
                made on our platform is clear and accountable.
              </p>
            </div>
          </li>

          <li className="flex items-center mb-2">
            <CheckCheck className="h-12 w-12 mr-2 text-green-400" />
            <div>
              <strong>Pet Products</strong>
              <p className="text-sm">
                We offer a curated selection of high-quality pet products, from
                food and toys to accessories, to enhance the lives of pets and
                their owners.
              </p>
            </div>
          </li>

          <li className="flex items-center mb-4">
            <CheckCheck className="h-12 w-12 text-yellow-400" />
            <div>
              <strong>Impact</strong>
              <p className="text-sm">
                Above all, we measure our success by the positive impact we have
                on the lives of animals and the people who love them.
              </p>
            </div>
          </li>
        </ul>
        <button className="bg-[#F7DBA7] text-[#002A48] font-bold py-2 px-4 rounded flex items-center">
          Read More
          <ChevronRight className="h-5 w-5 mr-2" />
        </button>
      </div>
    </>
  );
};

export default HomeTypo;
