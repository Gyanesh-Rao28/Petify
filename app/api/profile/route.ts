import { NextResponse } from "next/server";

import { db } from "@/lib/db";


export async function POST(
    req: Request
) {
    try {

        const { instaProfile,name, imageUrl, email, phoneNumber } = await req.json();

        const { searchParams } = new URL(req.url);

        const userId = searchParams.get("userId");


        if (!instaProfile||!userId || !name || !email || !phoneNumber) {
            return new NextResponse("fields missing", { status: 400 });
        }

        const profile = await db.profile.create({
            data: {
                userId: userId,
                instaProfile: instaProfile,
                name: name,
                imageUrl: imageUrl || null,
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
