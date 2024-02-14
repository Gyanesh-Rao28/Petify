import { NextResponse } from "next/server";

import { db } from "@/libs/db";


export async function POST(
    req: Request
) {
    try {

        const { name, imageUrl, location, email, phoneNumber } = await req.json();

        const { searchParams } = new URL(req.url);

        const userId = searchParams.get("userId");


        if (!userId || !name || !location || !email || !phoneNumber) {
            return new NextResponse("fields missing", { status: 400 });
        }

        const profile = await db.profile.create({
            data: {
                userId: userId,
                name: name,
                imageUrl: imageUrl || null,
                location: location,
                email: email,
                phoneNumber: phoneNumber
            }
        })

        return NextResponse.json(profile);

    } catch (error) {
        console.log("PROFILE_CREATION", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
