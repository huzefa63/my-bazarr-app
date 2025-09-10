import LogoutButton from "@/app/_components/auth/LogoutButton";
import ReadOnlyForm from "./ReadOnlyForm";

export default async function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          My Profile
        </h1>
        <ReadOnlyForm />
        {/* Logout Button */}
        <LogoutButton />
      </div>
    </div>
  );
}
