import { db } from '@/lib/db';
import React from 'react'
import ItemLayout from '../item-layout';


const ProductItem = async () => {
  const product = await db.product.findMany();
  //   console.log(product)
  return (
    <>
      <div className="bg-white overflow-y flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl mt-24 lg:mt-32 tracking-wide font-semibold text-[#002A48]">
          Product
        </h1>
        {/* Manage content */}
        <div className="w-4/5 flex max-w-7xl p-6 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {product.map((item, index) => (

                <ItemLayout
                  key={item.id || index}
                  serviceTyp="shop"
                  id={item.id}
                  name={item.title}
                  desc={item.description}
                  price={item.price}
                  imgUrl={item.imageUrl}
                />

              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem