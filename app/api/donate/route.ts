import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";


export async function POST(
    req: Request
) {
    try {

        const { name, type, breed, age, imageUrl, description, location } = await req.json();

        const profile = await currentProfile();


        if (!profile) {
            return new NextResponse("Unathourized", { status: 401 });
        }

        // return NextResponse.json({
        //     name, type, breed, age, imageUrl, description, location 
        // })

        if (!name || !type || !breed || !age || !imageUrl || !description || !location) {
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
                    location: location
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

        console.log({
            pet: result.pet,
            donation: result.donation
        })


        return NextResponse.json({
            pet: result.pet,
            donation: result.donation
        });

    } catch (error) {
        console.log("DONATION: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
