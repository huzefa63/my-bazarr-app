'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_URL;
export async function getOtp(email){
    const cookie = await cookies();
    const res = await fetch(`${url}/otp/sendOtp`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        // headers:{'Content-Type':'application/json',Cookie:`jwt=${cookie.get('jwt').value}`},
        body:JSON.stringify({email}),
        
    });
    const resJson = await res.json();
    return resJson;
}

export async function getUser(){
    console.log('getting user');
    const cookie = await cookies();
   try{
     const res = await fetch(`${url}/user/getUser`, {
        method:'GET',
        headers:{
            Cookie:`token=${cookie.get('token')?.value || ''}`
        },
    });
    const resJson = await res.json();
    return {_id:resJson.user._id,email:resJson.user.email,username:resJson.user.username,cartItems:resJson.cartItems};
   }catch(err){
    return {};
    console.log(err);
   }
}


