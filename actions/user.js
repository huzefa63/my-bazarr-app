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


