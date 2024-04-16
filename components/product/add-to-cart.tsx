"use client";
import React from "react";
import { Button } from "../ui/button";
import { addProduct } from "@/lib/addCart";
import axios from "axios";

interface AddToCartProps {
  profileId: string;
  productId: string;
  quantity: number;
  price: string;
}

const AddToCart = ({
  profileId,
  productId,
  quantity,
  price,
}: AddToCartProps) => {
  const onAddCart = async () => {
    try {
      const cart = await axios.post('/api/cart',{profileId,productId,quantity,price})
      // console.log("Cart: ", cart.data)
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <>
      <Button className="w-1/2 mb-2" onClick={onAddCart}>
        Add To Cart
      </Button>
    </>
  );
};

export default AddToCart;
