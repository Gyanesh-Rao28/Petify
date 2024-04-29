

import { db } from "@/lib/db";
import React from "react";
import ItemTable from "./item-table";
import { Button } from "../ui/button";
import CheckOutBtn from "./check-out-btn";

interface CheckOutProps {
  profileId: string;
}

const CheckOut = async ({ profileId }: CheckOutProps) => {
  const cartItems = await db.cart.findMany({
    where: {
      profileId: profileId,
      // checkedOut: false
    },
    include: {
      product: true,
    },
  });

  // console.log(cartItems)

  const calculateTotalPrice = () => {

    return cartItems.reduce((total, order) => {
      const orderTotal = parseInt(order.price) * order.qty;
      return total + orderTotal;
    }, 0);

  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, order) => total + order.qty, 0);
  };

  const totalPrice = calculateTotalPrice();
  const totalQuantity = calculateTotalQuantity();

  return (
    <>
      <div className="bg-white overflow-y flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl mt-24 lg:mt-32 tracking-wide font-semibold text-[#002A48]">
          Check Out
        </h1>
        <div className="w-full flex max-w-7xl p-6 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                      Product Name
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((product, index) => (
                    <ItemTable
                      key={product.id}
                      productId={product.product.id}
                      name={product.product.title}
                      qty={product.qty}
                      price={product.price}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr className="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" className="px-6 py-3 text-base">
                      Total
                    </th>
                    <td className="px-6 py-3">{totalQuantity}</td>
                    <td className="px-6 py-3">₹{totalPrice}</td>
                  </tr>
                </tfoot>
              </table>
              <div className="w-4/5 h-10 mx-auto mb-2 flex justify-center items-end">
                <CheckOutBtn profileId={profileId} totalPrice={totalPrice} totalQuantity={totalQuantity}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
