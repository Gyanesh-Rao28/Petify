"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Donation, Adoption, Order } from "@prisma/client";
import ItemLayout from "../item-layout";

import React, { useState, useEffect } from "react";

interface ManageBtnProps {
  donateArr: Donation[];
  adoptArr: Adoption[];
  orderArr: Order[];
}

const ManageBtn = ({ donateArr, adoptArr, orderArr }: ManageBtnProps) => {

  const [item, setitem] = useState('')


  const onFilter = (filter: string) => {
    if (filter === "donated") {
      console.log(donateArr);
    } else if (filter === "adopted") {
      console.log(adoptArr);
    } else {
      console.log(orderArr);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-around w-full">
        <Button
          className="text-xs m-2 lg:text-lg  text-white rounded-lg bg-[#002A48] p-2"
          variant="link"
          onClick={() => {
            onFilter("donated");
          }}
        >
          Donated
        </Button>
        <Button
          className="text-xs m-2 lg:text-lg  text-white rounded-lg bg-[#002A48] p-2"
          variant="link"
          onClick={() => {
            onFilter("adopted");
          }}
        >
          Adopted
        </Button>
        <Button
          className="text-xs m-2 lg:text-lg  text-white rounded-lg bg-[#002A48] p-2"
          variant="link"
          onClick={() => {
            onFilter("order");
          }}
        >
          Order
        </Button>
      </div>

      <div className="h-full w-full">
        {/* components grid structure */}

        {donateArr.map((item) => (
          
          <ItemLayout />
        ))}
      </div>
    </>
  );
};

export default ManageBtn;
