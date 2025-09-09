import SignupForm from "@/app/_components/auth/SignupForm"
import PublicNav from "@/app/_components/PublicNav";

function Page() {
    return (
      <div className="min-h-screen overflow-hidden">
        <PublicNav />
        {/* Left Side - Signup Info */}
        <div className="flex">
          <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-green-500 to-teal-500 items-center justify-center p-10 text-white">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Join Us Today!</h1>
              <p className="text-lg max-w-md">
                Create your account and start shopping for exclusive deals and
                offers.
              </p>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <SignupForm />
          </div>
        </div>
      </div>
    );
}

export default Page