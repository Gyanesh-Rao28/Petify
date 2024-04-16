// import { Donation, Adoption, Product } from "@prisma/client"

// export type ServerWithMembersWithProfiles = Server & {
//     members: (Member & { profile: Profile })[];
// };

export type CartItem = {
    productId: string;
    name: string;
    quantity: number;
    imgUrl: string;
    desc: string;
    price: string;
};