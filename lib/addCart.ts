import { db } from './db';

interface CartItem {
    cartId?: string
    productId: string;
    profileId: string;
    quantity: number;
    price: string;
}

export const addProduct = async ({ productId, profileId, quantity, price }: CartItem) => {
    
    const myCart = await db.cart.findFirst({
        where: {
            productId: productId
        }
    });

    if (!myCart) {
        
        const cart = await db.cart.create({
            data: {
                profileId: profileId,
                productId: productId,
                qty: 1, 
                price: price
            }
        });
        return cart;
    } 
    return myCart
};


export const removeProduct = async ({ cartId }: CartItem) => {

    const myCart = await db.cart.findFirst({
        where: {
            id: cartId
        }
    });

    if (myCart){
       const removedCart =  await db.cart.delete({
        where:{
            id: cartId 
        }
       })
        return removedCart
    }
    
    return myCart
};

export const increaseQty = async ({ cartId }: CartItem) => {

    const myCart = await db.cart.findFirst({
        where: {
            id: cartId
        }
    });

    if (myCart) {
        const updatedCart = await db.cart.update({
            where: {
                id: cartId
            },
            data:{
                qty: myCart.qty+1
            }
        })
        return updatedCart
    }

    return myCart
};

export const decreaseQty = async ({ cartId }: CartItem) => {

    const myCart = await db.cart.findFirst({
        where: {
            id: cartId
        }
    });

    if (myCart&&myCart.qty>1) {
        const updatedCart = await db.cart.update({
            where: {
                id: cartId
            },
            data: {
                qty: myCart.qty -1
            }
        })
        return updatedCart
    }

    return myCart
};