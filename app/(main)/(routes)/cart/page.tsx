import CheckOut from "@/components/cart/check-out";
import ItemLayout from "@/components/item-layout";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import React from "react";

const Cart = async () => {
  const profile = await currentProfile();

  if(!profile){
    return redirectToSignIn
  }


  const cart = await db.cart.findMany({
    where: {
      profileId: profile?.id,
    },
  });
  const productIds = cart.map((item) => item.productId);
  const products = await db.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  return (
    <>
      <div className="bg-white overflow-y flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl mt-24 lg:mt-32 tracking-wide font-semibold text-[#002A48]">
          Cart
        </h1>
        <div className="w-4/5 flex max-w-7xl p-6 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {cart.map((item, index) => {

                const product = products.find(
                  (product) => product.id === item.productId
                );

                return (
                  product && (
                    <ItemLayout
                    serviceTyp="cart"
                    key={product.id || index}
                      id={item.productId}
                      cartId={item.id}
                      name={product.title}
                      price={item.price}
                      imgUrl={product.imageUrl}
                      desc={product.description}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CheckOut profileId={profile?.id}/>
    </>
  );
};

export default Cart;
