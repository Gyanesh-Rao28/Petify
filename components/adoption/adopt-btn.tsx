'use client'

import qs from "query-string";
import axios from "axios";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";



interface AdoptBtnProps {
    petId: string
}

const AdoptBtn = ({ petId }: AdoptBtnProps) => {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false);

    const onAdopt = async () => {
        try {
            setIsLoading(true);
            const url = qs.stringifyUrl({
              url: `/api/adopt`,
              query: {
                petId: petId,
              },
            });

            await axios.post(url);
            router.push("/")

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
      <>
        {!isLoading ? (
          <button
            onClick={onAdopt}
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#002A48] px-8 py-3 text-base font-medium text-[#FCEED5] hover:bg-[#002A48] focus:outline-none focus:ring-2 focus:ring-[#002A48] focus:ring-offset-2"
          >
            Adopt
          </button>
        ) : (
          <div className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#002A48] px-8 py-3 text-base font-medium text-[#FCEED5] hover:bg-[#002A48] focus:outline-none focus:ring-2 focus:ring-[#002A48] focus:ring-offset-2">
            <Loader className="h-2 w-2 " />
          </div>
        )}
      </>
    );
};

export default AdoptBtn