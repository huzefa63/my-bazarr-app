'use client';
import { useQuery } from "@tanstack/react-query";
import MyProductItem from "./MyProductItem";
import { getMyProducts } from "@/actions/product";
import Spinner from "../Spinner";
function MyProductContainer() {
  const {data:products,isFetching} = useQuery({
    queryKey:['myProducts'],
    queryFn:getMyProducts,
    refetchOnWindowFocus:false,
    refetchOnMount:false
  })
  if(!products) return <Spinner />
  if(isFetching) return <Spinner />
    return (
      <div className="h-ful w-full overflow-auto rounded-md">
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
