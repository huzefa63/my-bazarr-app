import { SignIn,SignInButton,SignUpButton,UserButton,UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const {userId} = await auth();
  if(userId) redirect('/app/browse');
  else redirect('/home');
}
