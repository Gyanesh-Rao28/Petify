import { NextResponse } from "next/server";


import { db } from "@/lib/db";

export async function PATCH(
    req: Request,
    { params }: { params: { productId: string } }
) {

    try {


        const { title, description, imageUrl, price } = await req.json();


        if (!title || !price || !imageUrl || !description) {
            return new NextResponse("fields missing", { status: 400 });
        }


        if (!params.productId) {
            return new NextResponse("Product ID missing", { status: 400 });
        }


        const product = await db.product.update({
            where: {
                id: params.productId
            },
            data: {
                title: title,
                description: description,
                imageUrl: imageUrl,
                price: price
            }
        })


        return NextResponse.json(product);
    } catch (error) {
        console.log("[UPDATE_PRODUCT]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { productId: string } }

) {

    try {

        if (!params.productId) {
            return new NextResponse("Product ID missing", { status: 400 });
        }

        const product = await db.product.delete({
            where:{
                id: params.productId
            }
        })


        return NextResponse.json(product)

    } catch (error) {
        console.log("[UPDATE_DONATION]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

