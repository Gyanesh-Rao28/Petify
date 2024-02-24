import { db } from "./db";


export const currentProfile = async () => {
    const userId = 'QYGg4NoNzeipai0'

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



// QYGg4NoNzeipai0 - Zadkiel
// naoUB94nai0Obf9 - Bully
// N9ai0Oai0Obf9i3 - Golu