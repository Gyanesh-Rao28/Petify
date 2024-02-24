import { NextResponse } from "next/server";

import { db } from "@/libs/db";
import { currentProfile } from "@/libs/current-profile";


export async function POST(
    req: Request
) {
    try {

        const { name, type, breed, age, imageUrl, description } = await req.json();

        const profile = await currentProfile();


        if (!profile) {
            return new NextResponse("Unathourized", { status: 401 });
        }


        if (!name ||!type || !breed || !age || !imageUrl || !description) {
            return new NextResponse("fields missing", { status: 400 });
        }

        const result = await db.$transaction(async (prisma) => {

            const pet = await prisma.pet.create({
                data: {
                    name: name,
                    type: type,
                    breed: breed,
                    age: age,
                    imageUrl: imageUrl,
                    description: description,
                },
            });


            const donation = await prisma.donation.create({
                data: {
                    profileId: profile.id,
                    petId: pet.id,
                },
            });

            return { pet, donation };
        });


        return NextResponse.json({
            pet: result.pet,
            donation: result.donation
        });

    } catch (error) {
        console.log("DONATION: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
