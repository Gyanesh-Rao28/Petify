
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { cartId: string } }
){
    try {

        const {searchParams} = new URL(req.url)
        const productId = searchParams.get("productId")
        const profile = await currentProfile();

        const { quantity } = await req.json();

        if(!profile){
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if(!params.cartId){
            return new NextResponse("carId not found", { status: 400 })
        }

        if (!productId) {
            return new NextResponse("productId not found", { status: 400 })
        }

        const updatedCart  = await db.cart.update({
            where:{
                id: params.cartId,
                productId: productId,
                profileId:profile?.id
            },
            data:{
                qty:quantity
            }
        })

        return NextResponse.json(updatedCart);
        
    } catch (error) {
        console.log("[CART_UPDATION]: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { cartId: string } }
){
    try {

        const profile = await currentProfile();
        
        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if (!params.cartId) {
            return new NextResponse("carId not found", { status: 400 })
        }

        const updatedCart = await db.cart.delete({
            where: {
                id: params.cartId,
                profileId: profile?.id
            }
        })

        return NextResponse.json(updatedCart);

    } catch (error) {
        console.log("[CART_DELETION]: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
