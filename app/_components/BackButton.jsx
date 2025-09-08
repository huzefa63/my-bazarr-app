"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="p-2 smooth-transition w-fit bg-gray-200 hover:bg-gray-300 rounded-sm">
      <p className="w-fit flex gap-2 items-center">
        <IoArrowBack  />
        back
      </p>
    </button>
  );
}

export default BackButton;
