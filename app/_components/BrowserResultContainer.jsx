'use client'
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ProductCard from "./ProductCard"
import axios from "axios";
import { addToCart } from "@/actions/cart";
import { useSearchParams } from "next/navigation";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

function BrowserResultContainer({products}) {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const category = searchParams.get('category');
  const {data,isFetching} = useQuery({
    queryKey:['browse',search,category],
    queryFn:handleBrowse,
    refetchOnWindowFocus:false,
    refetchOnMount:false,
    placeholderData:(pre) => {
      return pre;
    }
    // initialData:products,
  })
  async function handleBrowse(){
    let res;
    try{
      // if(!search && category) {
      //   res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/search/getSearch`,{withCredentials:true})
      // }
      if(search && !category){
      res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/search/getSearch?search=${search}`,{withCredentials:true})
    }
    if(!search && category){
      res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/search/getSearch?category=${category}`,{withCredentials:true})
    }
    if(search && category){
      res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/search/getSearch?search=${search}&category=${category}`,{withCredentials:true})
    }
    return res.data.products || [];
    }catch(err){
      console.log(err);
      return [];
    }
  }
  async function handleAddToCart(e){
     if(!e.target.classList.contains('add')) return;
        console.log('hello')
        const parent = e.target.closest('.parent');
        const {id} = parent.dataset;
        try {
            await addToCart({id});
            queryClient.refetchQueries({queryKey:['cart'],exact:true});
            toast.success('added to cart!',{duration:1000,position:'top-center'});
          } catch (err) {
            console.log(err);
          }
  }
  return (
    <div className="lg:max-w-full w-full overflow-x-hidden lg:block flex flex-col gap-3 lg:gap-0  lg:min-w-[95%] relative h-full " onClick={handleAddToCart}>
      {isFetching && <Spinner />}
      <p className="text-gray-700 px-2 lg:px-0">{data?.length} Results Found</p>
      <div className="lg:p-3 max-w-full px-1 space-y-3 lg:space-y-0 lg:grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-4 lg:gap-y-8 ">
        {!isFetching &&
          data?.length > 0 &&
          data?.map((el) => (
            <ProductCard
              key={el._id}
              price={el.price}
              rating={el.ratingsAvg}
              id={el._id}
              image={el.coverImage}
              name={el.name}
              description={el.description}
            />
          ))}
      </div>
    </div>
  );
}

export default BrowserResultContainer
