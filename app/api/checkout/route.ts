import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";


export async function POST(

    req: Request

) {

    try {

        const { totalPrice, totalQuantity } =await req.json()

        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse("Unathourized", { status: 401 });
        }

        const cartItems = await db.cart.findMany({
            where:{
                profileId: profile.id,
                checkedOut: false
            }
        })

        // console.log(cartItems)

        if (!cartItems) {
            return new NextResponse("Cart Not Found", { status: 404 });
        }

        const Order = await db.order.create({
            data:{
                profileId:profile.id,
                cartItems: cartItems,
                totalPrice,
                totalQuantity
            }
        })

        cartItems.forEach(async(item)=>{
            await db.cart.update({
                where:{
                    id:item.id
                },
                data:{
                    checkedOut:true
                }
            })
        })

        // console.log(Order)

        return NextResponse.json(Order)


    } catch (error) {
        console.log("[CART_CHECK_OUT]: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

