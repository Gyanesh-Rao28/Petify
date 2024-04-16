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
            className="my-2 w-4/5 bg-[#002A48] text-[#F7DBA7] border-2 hover:text-[#F7DBA7] hover:bg-transparent hover:border-2 hover:border-[#F7DBA7] rounded-lg px-3 py-2 font-medium"
          >
            Adopt
          </button>
        ) : (
          <div className="my-2 w-4/5 bg-[#002A48] text-[#F7DBA7] border-2 hover:text-[#002A48] hover:bg-transparent hover:border-2 hover:border-[#002A48] rounded-lg px-3 py-2 font-medium ">
            <Loader className="h-2 w-2 " />
          </div>
        )}
      </>
    );
};

{/* <div className="bg-[#002A48] text-[#F7DBA7] border-2 hover:text-[#002A48] hover:bg-transparent hover:border-2 hover:border-[#002A48] rounded-lg px-3 py-2 font-medium ">
  <DonationBtn />
</div>; */}

export default AdoptBtn