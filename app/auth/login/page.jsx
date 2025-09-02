import LoginForm from "@/app/_components/auth/LoginForm"

function Page() {
    return (
      <div className="min-h-screen flex">
        {/* Left Side - Image / Branding */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center p-10 text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg max-w-md">
              Log in to access your account and explore amazing products at the
              best prices.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50">
          <LoginForm />
        </div>
      </div>
    );
}

export default Page
