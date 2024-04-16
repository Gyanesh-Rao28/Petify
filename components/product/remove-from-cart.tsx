"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import axios from "axios";

interface RemoveFromCartProps{
  cartId: string
}

const RemoveFromCart = ({cartId}:RemoveFromCartProps) => {
  const router = useRouter()
  const handleRemoveCart = async() => {
    try {
      const cart = await axios.delete(`/api/cart/${cartId}`);
      router.refresh()
    } catch (error) {
      console.log("[CART_REMOVING]:", error)
    }
  };


  return (
    <>
      <Button className="w-1/2 mb-2 z-30" onClick={() => {handleRemoveCart()}}>
        Remove
      </Button>
    </>
  );
};

export default RemoveFromCart;
