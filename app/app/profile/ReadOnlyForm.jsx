'use client';

import { useUserContext } from "@/app/_components/user/UserProvider";
import { FiUser, FiMail } from "react-icons/fi";

function ReadOnlyForm() {
    const {user} = useUserContext();
    return (
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <FiUser className="text-gray-500 mr-2" />
            <input
              type="text"
              value={user?.username || 'unable to get name'}
              readOnly
              className="bg-transparent w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <FiMail className="text-gray-500 mr-2" />
            <input
              type="email"
              value={user?.email || 'unable to get email'}
              readOnly
              className="bg-transparent w-full outline-none text-gray-700"
            />
          </div>
        </div>
      </div>
    );
}

export default ReadOnlyForm
