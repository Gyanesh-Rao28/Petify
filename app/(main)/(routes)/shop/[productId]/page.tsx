import AdoptBtn from "@/components/adoption/adopt-btn";
import { db } from "@/lib/db";
import Image from "next/image";

interface ShopIdPageProps {
  params: {
    productId: string;
  };
}

const ShopIdPage = async ({ params }: ShopIdPageProps) => {
  

  const product = await db.product.findFirst({
    where: {
      id: params.productId,
    },
  });

  return (
    <div className="bg-white h-full relative z-0">
      
    </div>
  );
};

export default ShopIdPage;
