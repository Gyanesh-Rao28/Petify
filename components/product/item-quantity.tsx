"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";


import { hrefLocation } from "@/hooks/current-location";

interface ItemQuantityprops {
  productId: string;
  servivceTyp:string
}

const ItemQuantity = ({ productId, servivceTyp }: ItemQuantityprops) => {
  const [quantity, setQuantity] = useState<number>(0);

  // useEffect(() => {
  //   setQuantity(productQuantity(productId));
  // }, []);

  // const handleIncrease = () => {
  //   increaseQuantity(productId);
  //   setQuantity((prevQuantity) => prevQuantity + 1);
  // };

  // const handleDecrease = () => {
  //   decreaseQuantity(productId);
  //   setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  // };


  const href = process.env.LOCAL_HOST_URL + "/shop";



  return (
    <>
      {hrefLocation() === href ? (
        <>
          <div className="max-w-xs mx-auto my-3 ">
            <div className="relative flex items-center max-w-[8rem]">
              <ArrowDown className="h-5 w-5" onClick={()=>{}} />
              <p className="w-5 h-5 bg-white text-black flex justify-center items-center mx-3">
                {" "}
                {quantity}
              </p>
              <ArrowUp className="h-5 w-5" onClick={()=>{}} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemQuantity;

// {
//   typeof window !== "undefined" && hrefLocation() === href ? <></> : <></>;
// }
