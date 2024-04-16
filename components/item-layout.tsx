
import { PetType } from "@prisma/client";
import { CheckCheck, Loader } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import AddToCart from "./product/add-to-cart";
import { currentProfile } from "@/lib/current-profile";
import ItemQuantity from "./product/item-quantity";
import RemoveFromCart from "./product/remove-from-cart";
import { db } from "@/lib/db";



interface ItemLayoutProps {
  id: string;
  serviceTyp: string;
  cartId?: string
  name?: string;
  breed?: string;
  type?: PetType;
  imgUrl?: string;
  desc?: string;
  price?: string;
  avail?: boolean;
}

const ItemLayout = async ({
  id,
  name,
  breed,
  serviceTyp,
  type,
  imgUrl,
  desc,
  price,
  avail,
  cartId,
}: ItemLayoutProps) => {
  const profile = await currentProfile();

  const cart = await db.cart.findFirst({
    where: {
      id: cartId,
      profileId: profile?.id,
      productId: id
    },
  });



  return (
    <>
      <div className="group block max-w-sm text-white bg-[#002A48] border border-[#002A48] rounded-lg shadow relative">
        {!avail && serviceTyp === "adoption" ? (
          <Badge className="absolute -right-5 -top-2 px-4 z-10 bg-[#002A48] hover:bg-[#002A48]">
            Adopted <CheckCheck className="ml-2" />
          </Badge>
        ) : (
          <></>
        )}
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <a href={`/${serviceTyp}/${id}`}>
            <Image
              src={imgUrl || ""}
              alt={desc || ""}
              width={512}
              height={512}
              className="object-cover h-64 w-96 group-hover:opacity-75"
            />
          </a>
        </div>
        <div className="my-2 mx-4 flex justify-between ">
          <div>
            <h3 className="text-lg text-white py-0.5">{name}</h3>
            <p className="mt-1 text-sm text-white py-0.5">{breed}</p>
          </div>
          <p className="text-sm font-medium text-white">
            {price ? "₹" : ""}
            {type || price}{" "}
          </p>
        </div>

        {serviceTyp === "cart" ? (
          <div className="flex justify-center">
            <div className="flex justify-center">
              <ItemQuantity
                productId={id}
                cartId={cartId || ""}
                currentQty={cart?.qty || 1}
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        {serviceTyp === "shop" ? (
          <div className="flex justify-center">
            <AddToCart
              profileId={profile?.id || ""}
              productId={id}
              quantity={1}
              price={price || ""}
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <RemoveFromCart cartId={cartId || ""} />
          </div>
        )}
      </div>
    </>
  );
};

export default ItemLayout;
