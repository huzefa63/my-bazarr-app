'use client'
import { useEffect } from "react";
import ProductCard from "./ProductCard"

function BrowserResultContainer({jwt}) {
  console.log(jwt);
  useEffect(() => {
    async function getCookie(){
      console.log('getting cookie');
      try{
        await fetch("https://my-bazarr-api.onrender.com/cookie",{credentials:'include'});
        console.log('got cookie');
      }catch(err){
        console.log(err);
      }
    }
    // getCookie();
  },[])
    return (
      <div className="w-[95%] h-full p-3 grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-4 gap-y-8 ">
        <ProductCard image="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg" />
        <ProductCard image="https://images.pexels.com/photos/13367286/pexels-photo-13367286.jpeg" />
        <ProductCard image="https://images.pexels.com/photos/13367286/pexels-photo-13367286.jpeg" />
        <ProductCard image="https://images.pexels.com/photos/13367286/pexels-photo-13367286.jpeg" />
        <ProductCard image="https://images.pexels.com/photos/13367286/pexels-photo-13367286.jpeg" />
        <ProductCard image="https://images.pexels.com/photos/13367286/pexels-photo-13367286.jpeg" />
        <ProductCard image="https://images.pexels.com/photos/13367286/pexels-photo-13367286.jpeg" />
        <ProductCard />
      </div>
    );
}

export default BrowserResultContainer
