'use client';
import useStopwatch from "@/app/_custom_hooks/useTimer";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OTPInput from "react-otp-input";

function VerifyOtpForm({email,name,type='signup',endpoint,redirectEndpoint = '/app/browse'}) {
  const [otp, setOtp] = useState("");
  const [isInvalid,setIsInvalid] = useState('');
  const {timer} = useStopwatch({timerEndsText:'OTP expired, please enter email again'});
  const router = useRouter();
  const [isVerifying,setIsVerifying] = useState();
  
  async function handleSubmit(e){
    e.preventDefault();
    if(otp.length < 6) return alert('please enter 6 digits OTP');
    try{
      setIsVerifying(true);
      if(type === 'signup') {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}${endpoint}`,
          { email, username: name, otp },
          { withCredentials: true }
        );
        if (res.data.signedUp) router.replace(redirectEndpoint);
      }
       const res = await axios.post(
         `${process.env.NEXT_PUBLIC_URL}${endpoint}`,
         { email,otp },
         { withCredentials: true }
       );
       if (res.data.signedIn) router.replace(redirectEndpoint);
    }catch(err){
      console.log(err); 
      if(err.response.data.message === 'invalid') return setIsInvalid('invalid');
      if(err.response.data.message === 'expired') return setIsInvalid('expired');
    }finally{
      setIsVerifying(false);
    }
  }
    return (
      <form
        className="min-h-screen flex items-center justify-center"
        onSubmit={handleSubmit}
      >
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
              border: `1px solid ${isInvalid ? "red" : "#ccc"}`,
            }}
          />
          {isInvalid === "invalid" && (
            <p className="text-center mt-5 text-red-500">invalid OTP</p>
          )}
          {isInvalid === "expired" && (
            <p className="text-center mt-5 text-red-500">OTP expired</p>
          )}
          <p className="text-center mt-3">
            <span className="text-sm text-gray-700">OTP expires in:</span> {timer}
          </p>
          <button
            onClick={() => console.log(otp, email)}
            disabled={isVerifying}
            className="mt-3 w-full relative bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md"
          >
            {!isVerifying ? 'verify OTP' : 'verifying OTP...'}
          </button>
        </div>
      </form>
    );
}

export default VerifyOtpForm