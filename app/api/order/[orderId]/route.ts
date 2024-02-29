import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";


export async function DELETE(
    req: Request, { params }: { params: { orderId: string } }
) {
    try {

        const profile = await currentProfile();


        if (!profile) {
            return new NextResponse("Unathourized", { status: 401 });
        }


        if (!params.orderId) {
            return new NextResponse("Order Id missing", { status: 400 });
        }


        const order =  await db.order.findFirst({
            where:{
                id: params.orderId
            }
        })


        if(order){
            return new NextResponse("Order not found", { status: 404 });
        }

        const discardOrder = await db.order.delete({
            where:{
                profileId: profile.id,
                id: params.orderId
            }
        })

       
        return NextResponse.json(discardOrder);

    } catch (error) {
        console.log("DONATION: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
