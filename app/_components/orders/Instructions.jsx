'use client';

import { useState } from "react";
import LoadingButton from "../UI/LoadingButton";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUserContext } from "../user/UserProvider";
import toast from "react-hot-toast";
import { MdIntegrationInstructions } from "react-icons/md";


function Instructions({instructions,orderId,customerId,status}) {
  const [instruction,setInstruction] = useState(instructions);
  const {user} = useUserContext();
  console.log('customerId: ',customerId);
  console.log('userId: ',user?._id);
    const router = useRouter();
    async function update(){
      if(!instruction) return toast.error('please type instructions to update it');
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/order/update/${orderId}`,{instruction},{withCredentials:true});
        toast.success('instructions updated');
        router.refresh();
    }
    if(user?._id === customerId && status !== 'cancelled' && status !== 'delivered') return (
      <div className="w-full bg-white  border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
        <header className="flex items-center gap-2 text-xl font-bold text-gray-700">
          <MdIntegrationInstructions /> Instructions
        </header>
        <textarea spellCheck={false} value={instruction} onChange={(e)=>setInstruction(e.target.value)} placeholder="provide instructions here" className="w-full resize-none p-3 focus:mt-4 smooth-transition hover:cursor-default focus:outline-none focus:border border-gray-300 text-sm text-gray-700">
          
        </textarea>
        {instructions !== instruction && <LoadingButton onClick={update} className="py-1 hover:bg-blue-500 px-3 text-white rounded-md bg-blue-400 smooth-transition tex-white">save</LoadingButton>}
      </div>
    );
    if(user?._id !== customerId || status === 'delivered') return (
      <div className="w-full bg-white  border border-gray-300 shadow-sm min-h-[20%] p-3 rounded-md">
        <header className="flex items-center gap-2 text-xl font-bold text-gray-700 ">
          <MdIntegrationInstructions /> Instructions
        </header>
        <p className=" mt-2 text-gray-700">
            {instructions || 'no instructions provided'}
        </p>
        {instructions !== instruction && <LoadingButton onClick={update} className="py-1 hover:bg-blue-500 px-3 text-white rounded-md bg-blue-400 smooth-transition tex-white">save</LoadingButton>}
      </div>
    );
}

export default Instructions
