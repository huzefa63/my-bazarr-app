'use client';
import { useQuery } from "@tanstack/react-query";
import MyProductItem from "./MyProductItem";
import Spinner from "../Spinner";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
function MyProductContainer() {
  const searchParams = useSearchParams();
  const [filteredProducts,setFilteredProducts] = useState([]);
  const {data:products,isFetching} = useQuery({
    queryKey:['myProducts'],
    queryFn:async () => {
            try{
              const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/product/getMyProducts`,{withCredentials:true})
            return res.data.products;
            }catch(err){
              console.log(err)
            }
        },
    refetchOnWindowFocus:false,
    refetchOnMount:false
  })
  useEffect(() => {
    // if (!products) return;
    if (
      !searchParams.get("startDate") &&
      !searchParams.get("endDate")
    )
      return setFilteredProducts(products);
    let filtered = products;
    if (searchParams.get("startDate"))
      filtered = filtered.filter(
        (el) =>
          new Date(el.createdAt).setHours(0, 0, 0, 0) >=
            new Date(searchParams.get("startDate")).setHours(0, 0, 0, 0) &&
          new Date(el.createdAt).setHours(0, 0, 0, 0) <=
            new Date(searchParams.get("endDate")).setHours(0, 0, 0, 0)
      );
    setFilteredProducts(filtered);
  }, [
    searchParams.get("startDate"),
    searchParams.get("endDate"),
    products
  ]);
  if(!products && isFetching) return <Spinner />
  // if(isFetching) return <Spinner />
    return (
      <div className="space-y-2 w-full overflow-auto rounded-md">
        {filteredProducts?.map((el) => (
            <MyProductItem
              key={el._id}
              createdAt={el.createdAt}
              name={el.name}
              price={el.price}
              description={el.description}
              id={el._id}
              image={el.coverImage}
            />
        ))}
      </div>
    );
}

export default MyProductContainer
