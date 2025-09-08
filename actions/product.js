'use server';

import { cookies } from "next/headers";

export async function getMyProducts(){
    const cookie = await cookies();
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_URL}/product/getMyProducts`,
         {
           headers: {
             Cookie: `token=${cookie.get("token")?.value}`,
           },
           next: { revalidate: 30 },
         }
       );
       const resJson = await res.json();
       console.log(resJson)
       return resJson.products;
     } catch (err) {
       console.log(err);
     }
}