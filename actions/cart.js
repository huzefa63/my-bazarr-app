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
       return await res.json();
     } catch (err) {
       console.log(err);
     }
}
export async function checkoutAction(data){
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_URL}/cart/checkout`,
         {
            method:'POST',
            headers:{
                Cookie:`token=${token}`,
                "Content-Type":"application/json"
            },body:JSON.stringify(data),
         }
       );
       return await res.json();
     } catch (err) {
       console.log(err);
     }
}
export async function orderCheckoutAction(data){
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
    console.log(token)
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_URL}/order/orderCheckout`,
         {
            method:'POST',
            headers:{
                Cookie:`token=${token}`,
                "Content-Type":"application/json"
            },body:JSON.stringify({item:data}),
         }
       );
       return await res.json();
     } catch (err) {
       console.log(err);
     }
}