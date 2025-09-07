import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookie = await cookies();
  if(!cookie.get('token')?.value) redirect('/home');
  redirect('/app/browse');
}
