import { NextResponse } from "next/server";

import { db } from "@/libs/db";
import { currentProfile } from "@/libs/current-profile";


export async function POST(
    req: Request
) {
    try {


        const { type, breed, age, imageUrl, description } = await req.json();

        const { searchParams } = new URL(req.url);

        const profileId = searchParams.get("profileId");

        const profile = await currentProfile();

        

        if(!profileId){
            return new NextResponse("Unathourized", { status: 401 });
        }


        if (!profileId || !type || !breed || !age || !imageUrl || !description) {
            return new NextResponse("fields missing", { status: 400 });
        }

        const result = await db.$transaction(async (prisma) => {
            
            const pet = await prisma.pet.create({
                data: {
                    type: type,
                    breed: breed,
                    age: age,
                    imageUrl: imageUrl,
                    description: description,
                },
            });

            
            const donation = await prisma.donation.create({
                data: {
                    profileId: profileId,
                    petId: pet.id,
                },
            });

            return { pet, donation };
        });

        
        return NextResponse.json(result.pet);

    } catch (error) {
        console.log("DONATION: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
