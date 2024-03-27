import { PetType } from '@prisma/client';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import React from 'react'



interface ItemLayoutProps {
    id:string
    name?: string;
    breed?: string
    type?: PetType
    imgUrl?: string;
    desc?: string;
    price?: number
}

const ItemLayout = ({id,
name,
breed,
type,
imgUrl,
desc,
price}: ItemLayoutProps) => {
    return (
      <>
        <a href={`/donation/${id}`} className="group block">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image
              src={imgUrl || ""}
              alt={desc||""}
              width={256}
              height={256}
              className="object-cover h-64 w-96 group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{breed}</p>
        </a>
      </>
    );
};

export default ItemLayout