'use server';

import { cookies } from "next/headers";

export async function addToCart(id){
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_URL}/cart/add/${id}`,
         {
            headers:{
                Cookie:`token=${token}`
            }
         }
       );
       return res;
     } catch (err) {
       console.log(err);
     }
}