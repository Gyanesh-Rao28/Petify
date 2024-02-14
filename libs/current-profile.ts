import { db } from "./db";


export const currentProfile = async () => {
    const userId = 'QYGg4NNzeip'

    if (!userId) {
        return null;
    }

    const profile = await db.profile.findUnique({
        where: {
            userId
        }
    });

    return profile;
}



// QYGg4NNzeip - Gyanesh
// naoUB94nai0Obf9 - Zadkiel