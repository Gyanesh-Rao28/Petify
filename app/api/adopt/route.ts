import { NextResponse } from "next/server";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";


export async function POST(

    req: Request

) {

    try {

        const profile = await currentProfile();

        const { searchParams } = new URL(req.url);

        const petId = searchParams.get("petId");


        if (!profile) {
            return new NextResponse("Unathourized", { status: 401 });
        }

        if (!petId) {
            return new NextResponse("Server ID missing", { status: 400 });
        }


        const result = await db.$transaction(async (prisma) => {

            const pet = await db.pet.update({
                where: {
                    id: petId,
                },
                data: {
                    available: false
                }
            });

            const adoption = await db.adoption.create({
                data: {
                    profileId: profile.id,
                    petId: petId
                }
            })

            return { pet, adoption };
        });


        return NextResponse.json({
            pet: result.pet,
            donation: result.adoption
        });

    } catch (error) {
        console.log("[ADOPTION]: ", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

