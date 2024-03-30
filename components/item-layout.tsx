import { PetType } from "@prisma/client";
import { CheckCheck, Loader } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface ItemLayoutProps {
  id: string;
  serviceTyp: string;
  name?: string;
  breed?: string;
  type?: PetType;
  imgUrl?: string;
  desc?: string;
  price?: number;
  avail?: boolean
}

const ItemLayout = ({
  id,
  name,
  breed,
  serviceTyp,
  type,
  imgUrl,
  desc,
  price,
  avail,
}: ItemLayoutProps) => {
  return (
    <>
      <a
        href={`/${serviceTyp}/${id}`}
        className="group block max-w-sm text-white bg-[#002A48] border border-[#002A48] rounded-lg shadow relative"
      >
        {avail ? (
          <Badge className="absolute -right-5 -top-2 px-4 z-10 bg-[#002A48] hover:bg-[#002A48]">
            Adopted <CheckCheck className="ml-2" />
          </Badge>
        ) : (
          <></>
        )}
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image
            src={imgUrl || "/public/avatar-512.png"}
            alt={desc || ""}
            width={512}
            height={512}
            className="object-cover h-64 w-96 group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 p-4 flex justify-between">
          <div>
            <h3 className="text-lg text-white py-0.5">{name}</h3>
            <p className="mt-1 text-sm text-white py-0.5">{breed}</p>
          </div>
          <p className="text-sm font-medium text-white">{type}</p>
        </div>
      </a>
    </>
  );
};

export default ItemLayout;
