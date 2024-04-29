"use client";
import React from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { PawPrint } from "lucide-react";

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
const { toast } = useToast();


  const onAddCart = async () => {
    try {
      const cart = await axios.post('/api/cart',{profileId,productId,quantity,price})


      toast({
        title: "Added to cart successfully!",
        description: (
          <>
            Congratulations! Your selected item has been successfully added to
            your shopping cart.
            <PawPrint className="h-8 w-8" />
          </>
        ),
      });
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
