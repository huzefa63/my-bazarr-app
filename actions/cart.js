'use server';

import { cookies } from "next/headers";

export async function addToCart({id}){
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_URL}/cart/add/${id}`,
         {
            method:'POST',
            headers:{
                Cookie:`token=${token}`
            }
         }
       );
     } catch (err) {
       console.log(err);
     }
}
export async function deleteCartItem(id){
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_URL}/cart/deleteItem/${id}`,
         {
            method:'DELETE',
            headers:{
                Cookie:`token=${token}`
            }
         }
       );
     } catch (err) {
       console.log(err);
     }
}