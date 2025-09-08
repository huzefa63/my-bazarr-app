import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

function LoadingButton({ className, onClick, children }) {
    const [isLoading,setIsLoading] = useState(false);
    async function handleClick(){
        setIsLoading(true);
        try{
            await onClick();
        }catch(err){
            console.log(err);
        }finally{
            setIsLoading(false);
        }
    }
  return (
    <button onClick={handleClick} className={`${className} relative smooth-transition`}>
      <span className={isLoading ? "opacity-0" :''}>{children}</span>
      {isLoading && (
        <ImSpinner2 className="text-lg animate-spin absolute top-1/2 left-1/2 -translate-1/2" />
      )}
    </button>
  );
}

export default LoadingButton
