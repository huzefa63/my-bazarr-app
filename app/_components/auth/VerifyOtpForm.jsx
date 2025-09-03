'use client';
import { verifyOtp } from "@/actions/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OTPInput from "react-otp-input";

function VerifyOtpForm({email,name}) {
  const [otp, setOtp] = useState("");
  const [isInValid,setisInValid] = useState('');
  const router = useRouter();
  async function handleSubmit(e){
    e.preventDefault();
    if(otp.length < 6) return alert('please enter 6 digits OTP');
    const res = await verifyOtp(email,name,otp);
    if(res.signedUp) router.replace('/app/browse');
    if(res.message === 'invalid') return setisInValid('invalid');
    if(res.message === 'expired') return setisInValid('expired');
  }
    return (
      <form className="min-h-screen flex items-center justify-center" onSubmit={handleSubmit}>
        <div className="bg-white shadow-2xl rounded-2xl w-fit p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Enter OTP
          </h2>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            isInputNum
            shouldAutoFocus
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: "3rem",
              height: "3rem",
              margin: "0 0.5rem",
              fontSize: "1.5rem",
              borderRadius: 8,
              border: `1px solid ${isInValid ? 'red' : '#ccc'}`,
            }}
          />
          {isInValid === 'invalid' && <p className="text-center mt-5 text-red-500">invalid OTP</p>}
          {isInValid === 'expired' && <p className="text-center mt-5 text-red-500">OTP expired</p>}
          <button onClick={()=>console.log(otp,email)} className="mt-8 w-full relative bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md">
            verify OTP
          </button>
        </div>
      </form>
    );
}

export default VerifyOtpForm
