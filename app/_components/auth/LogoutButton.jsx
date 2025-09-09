"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_URL}/auth/logout`, {
        withCredentials: true, // important for cookies
      });
      router.push("/home"); // redirect after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
    >
      <FiLogOut size={20} />
      Logout
    </button>
  );
}

export default LogoutButton;
