"use client"
import React from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { PawPrint } from "lucide-react";

interface CheckOutBtnProps {
  profileId: string;
  totalPrice: number;
  totalQuantity: number;
}

const CheckOutBtn = ({
  profileId,
  totalPrice,
  totalQuantity,
}: CheckOutBtnProps) => {

  const router = useRouter()
   const { toast } = useToast();

  const handleCheckOut = async () => {
    try {
      const res = await axios.post("/api/checkout", {
        totalPrice,
        totalQuantity,
      });
      toast({
        title: "Thank you!",
        description: (
          <>
            We appreciate your decision to choose us for your needs, have a
            Pawsitively and happy life with our cute pets.
            <PawPrint className="h-8 w-8" />
          </>
        ),
      });
      router.push('/shop')
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      { totalPrice!==0 ? <Button onClick={handleCheckOut}>Check Out</Button>:<Button onClick={()=>{router.push('/shop')}}>Go to Shop</Button>}
    </>
  );
};

export default CheckOutBtn;
