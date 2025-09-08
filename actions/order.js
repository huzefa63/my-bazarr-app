'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function shipeOrderAction(orderId){
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
    console.log(token)
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_URL}/order/orderShipped/${orderId}`,
         {
            method:'POST',
            headers:{
                Cookie:`token=${token}`,
            }
         }
       );
       const resJson = await res.json();
       if(resJson.ok) revalidatePath(`/app/order/${orderId}`);
     } catch (err) {
       console.log(err);
     }
}

export async function cancelOrderAction(orderId){
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
    console.log(token)
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_URL}/order/cancelOrder/${orderId}`,
         {
            method:'POST',
            headers:{
                Cookie:`token=${token}`,
            }
         }
       );
       const resJson = await res.json();
       if(resJson.ok) revalidatePath(`/app/order/${orderId}`);
     } catch (err) {
       console.log(err);
     }
}

export async function deliveredOrderAction(orderId){
    const cookie = await cookies();
    const token = cookie.get('token')?.value;
    console.log(token)
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_URL}/order/orderDelivered/${orderId}`,
         {
            method:'POST',
            headers:{
                Cookie:`token=${token}`,
            }
         }
       );
       const resJson = await res.json();
       if(resJson.ok) revalidatePath(`/app/order/${orderId}`);
     } catch (err) {
       console.log(err);
     }
}