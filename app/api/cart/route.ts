import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";


export async function POST(

    req: Request

) {

    try {
        const { productId, profileId, quantity, price } = await req.json();

        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse("Unathourized", { status: 401 });
        }

        if (!productId|| !profileId|| !quantity|| !price) {
            return new NextResponse("fields missing", { status: 400 });
        }


        let myCart = await db.cart.findFirst({
            where: {
                profileId:profileId,
                productId: productId
            }
        });

        if (!myCart) {
            const newCart = await db.cart.create({
                data: {
                    profileId: profileId,
                    productId: productId,
                    qty: quantity,
                    price: price
                }
            });

            return NextResponse.json(
                newCart
            );

        }
        return NextResponse.json({
           cart: myCart}
        );


    } catch (error) {
        console.log("[CART_ADDITION]: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

