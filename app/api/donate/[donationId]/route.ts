import { NextResponse } from "next/server";

import { currentProfile } from "@/libs/current-profile";
import { db } from "@/libs/db";

export async function DELETE(
    req: Request,
    { params }: { params: { donationId: string } }
) {

    try {
        const profile = await currentProfile();
        const { searchParams } = new URL(req.url);

        const petId = searchParams.get("petId");

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!petId) {
            return new NextResponse("Server ID missing", { status: 400 });
        }

        if (!params.donationId) {
            return new NextResponse("Channel ID missing", { status: 400 });
        }


        const pet = await db.pet.update({
            where:{
                id: petId
            },
            data:{
                available: false
            }
        })
      

        return NextResponse.json(pet);
    } catch (error) {
        console.log("[REMOVE_DONATION]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}


export async function PATCH(

    req: Request,
    { params }: { params: { donationId: string } }

) {

    try {

        const { type, breed, age, imageUrl, description } = await req.json();

        const profile = await currentProfile();

        const { searchParams } = new URL(req.url);

        const petId = searchParams.get("petId");


        if (!profile) {
            return new NextResponse("Unathourized", { status: 401 });
        }

        if (!petId) {
            return new NextResponse("Server ID missing", { status: 400 });
        }


        if (!type || !breed || !age || !imageUrl || !description) {
            return new NextResponse("fields missing", { status: 400 });
        }



        const pet = await db.pet.update({
            where: {
                id: petId,
                donations: {
                    some: {
                        id: params.donationId,
                        profileId: profile.id
                    }
                }
            },
            data: {
                type: type,
                breed: breed,
                age: age,
                imageUrl: imageUrl,
                description: description,
            }
        });

        if(!pet){
            return new NextResponse("Not Found", { status: 404 });
        }


        return NextResponse.json(pet)

    } catch (error) {
        console.log("[UPDATE_DONATION]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

