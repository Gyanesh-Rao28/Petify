import { NextResponse } from "next/server";

import { db } from "@/lib/db";



export async function POST(
    req: Request
) {
    try {

        const { title, description, imageUrl, price } = await req.json();


        if (!title || !price || !imageUrl || !description) {
            return new NextResponse("fields missing", { status: 400 });
        }

        const product = await db.product.create({
            data: {
                title: title,
                description: description,
                imageUrl: imageUrl,
                price: price
            }
        })


        return NextResponse.json(product);

    } catch (error) {
        console.log("DONATION: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
