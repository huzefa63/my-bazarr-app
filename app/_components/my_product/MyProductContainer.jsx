import { BiSolidPackage } from "react-icons/bi";
import MyProductItem from "./MyProductItem";
import FilterOptions from "../FilterOptions";
import { cookies } from "next/headers";
import { Suspense } from "react";
async function MyProductContainer() {
  const cookie = await cookies();
  let products = [];
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/getMyProducts`,{
        headers:{
          Cookie:`token=${cookie.get('token')}`
        },
        cache:'no-store'
      })
      const resJson = await res.json();
      products = resJson?.products;
    }catch(err){
      console.log(err);
    }
    return (
      <div className="h-full w-[90%] bg-white shadow-sm  py-3 overflow-auto rounded-md">
        <header className="text-3xl flex items-center gap-5 pl-5">
          <BiSolidPackage className="text-yellow-950" /> My Products
        </header>
        <hr className="text-gray-200 my-5" />
        <div className="px-4 mb-4">
          <FilterOptions />
        </div>
        <Suspense fallback={<h1>loading</h1>}>
          <div className="w-full h-full">
            {products.map((el) => (
              <MyProductItem
                key={el._id}
                name={el.name}
                price={el.price}
                description={el.description}
                id={el._id}
                image={el.coverImage}
              />
            ))}
          </div>
        </Suspense>
      </div>
    );
}

export default MyProductContainer
