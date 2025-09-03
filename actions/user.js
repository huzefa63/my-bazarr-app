'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const url = process.env.NEXT_PUBLIC_URL;
export async function getOtp(email){
    const cookie = await cookies();
    const res = await fetch(`http://localhost:5000/user/verifyEmail`, {
        method:'POST',
        headers:{'Content-Type':'application/json',Cookie:`jwt=${cookie.get('jwt').value}`},
        body:JSON.stringify({email}),
        
    });
    const resJson = await res.json();
    return resJson;
}

export async function verifyOtp(email,name,otp){
    const cookie = await cookies();
    const res = await fetch(`http://localhost:5000/user/createUser`, {
        method:'POST',
        headers:{'Content-Type':'application/json',Cookie:`jwt=${cookie.get('jwt').value}`},
        body:JSON.stringify({email,username:name,otp}),
    });
    const resJson = await res.json();
    return resJson;
}

