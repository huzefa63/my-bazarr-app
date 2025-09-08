'use client';
import { useQuery } from "@tanstack/react-query";
import MyProductItem from "./MyProductItem";
import { getMyProducts } from "@/actions/product";
import Spinner from "../Spinner";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
function MyProductContainer() {
  const searchParams = useSearchParams();
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const {data:products,isFetching} = useQuery({
    queryKey:['myProducts'],
    queryFn:async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/product/getMyProducts`,{withCredentials:true})
            return res.data.products;
        },
    refetchOnWindowFocus:false,
    refetchOnMount:false
  })
  useEffect(() => {
    console.log(products)
  },[startDate,endDate,products])
  if(!products && isFetching) return <Spinner />
  // if(isFetching) return <Spinner />
    return (
      <div className="space-y-2 w-full overflow-auto rounded-md">
        {products?.map((el) => (
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
    );
}

export default MyProductContainer
