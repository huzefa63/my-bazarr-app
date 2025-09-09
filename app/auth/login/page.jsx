import LoginForm from "@/app/_components/auth/LoginForm"
import PublicNav from "@/app/_components/PublicNav";

function Page() {
    return (
      <div className="h-screen overflow-hidden">
        {/* Left Side - Image / Branding */}
        <PublicNav />
        <div className="flex h-full">
          <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center p-10 text-white">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
              <p className="text-lg max-w-md">
                Log in to access your account and explore amazing products at
                the best prices.
              </p>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full min-h-full lg:w-1/2 flex items-center justify-center bg-gray-50">
            <LoginForm />
          </div>
        </div>
      </div>
    );
}

export default Page
