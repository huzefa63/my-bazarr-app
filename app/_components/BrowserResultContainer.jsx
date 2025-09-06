'use client'
import { useQueryClient } from "@tanstack/react-query";
import ProductCard from "./ProductCard"
import axios from "axios";

function BrowserResultContainer({products}) {
  const queryClient = useQueryClient();
  async function handleAddToCart(e){
     if(!e.target.classList.contains('add')) return;
        console.log('hello')
        const parent = e.target.closest('.parent');
        const {id} = parent.dataset;
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/cart/add/${id}`,{withCredentials:true});
            queryClient.refetchQueries(['cart']);
            console.log(res);
          } catch (err) {
            console.log(err);
          }
  }
    return (
      <div className="w-[95%] h-full p-3 grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-4 gap-y-8 " onClick={handleAddToCart}>
        {products.map((el) => (
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
    );
}

export default BrowserResultContainer
