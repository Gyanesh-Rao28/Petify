'use client'
import React from 'react'
import { Button } from '../ui/button';

interface AddToCartprops{
    productId: string
}

const AddToCart = ({ productId }: AddToCartprops) => {

    const onClick = ()=>{
      
    }
  return (
    <>
      <Button className="w-1/2 mb-2" onClick={onClick}>Add To Cart</Button>
    </>
  );
};



export default AddToCart