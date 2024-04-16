"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

import axios from "axios";
import { db } from "@/lib/db";

interface ItemQuantityprops {
  productId: string;
  cartId: string,
  currentQty: number
}

const ItemQuantity = ({ productId, cartId, currentQty }: ItemQuantityprops) => {


  const [quantity, setQuantity] = useState<number>(currentQty);

  useEffect(() => {
    const updateCart = async () => {
      try {
        const cart = await axios.patch(
          `/api/cart/${cartId}?productId=${productId}`,
          { quantity: quantity }
        );
      } catch (error) {
        console.log("[CART_UPDATION]:", error);
      }
    };

    updateCart();
  }, [quantity]);

  const handleDecrease = async () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  };

  const handleIncrease = async () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <>
      <div className="max-w-xs mx-auto my-3 ">
        <div className="relative flex items-center max-w-[8rem]">
          <ArrowDown
            className="h-5 w-5"
            onClick={() => {
              handleDecrease();
            }}
          />
          <p className="w-5 h-5 bg-white text-black flex justify-center items-center mx-3">
            {" "}
            {quantity}
          </p>
          <ArrowUp
            className="h-5 w-5"
            onClick={() => {
              handleIncrease();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ItemQuantity;


