'use client';
import { FaCartShopping } from "react-icons/fa6"
import CartItem from "./CartItem"
import { useQuery } from "@tanstack/react-query"
import { useCartContext } from "./CartProvider";
import { useEffect, useOptimistic, useTransition } from "react";
import { deleteCartItem, getCartItems } from "@/actions/cart";
import Spinner from "../Spinner";
import Link from "next/link";

function CartContainer() {
    const {data:cartData,refetch,isFetching} = useQuery({
        queryKey:['cart'],
        queryFn:getCartItems,
        refetchOnMount:false,
        staleTime:1000 * 60,
    })
    const [optimisticCartItems,setOptimisticCartItems] = useOptimistic(cartData?.cartItems,(items,id) => items.filter(el=>el._id !== id));
    const {setItems,setIsDeletingId,isDeletingId} = useCartContext();
     const [isPending, startTransition] = useTransition();
    async function handleDeleteCartItem(e){
        console.log(e.target.classList.contains('delete'))
        console.log(e.target)
        if(!e.target.classList.contains('delete')) return;
        const parent = e.target.closest('.parent');
        const {id} = parent.dataset;
        setIsDeletingId(id);
        try { 
            const res = await deleteCartItem(id);
            console.log(res)
            startTransition(() => {
                setOptimisticCartItems(id);
            })
            refetch();
          } catch (err) {
            console.log(err);
          }finally{
            setIsDeletingId('');
          }
    }
    useEffect(() => {
        setItems(el => cartData?.cartItems?.map(el => {
            return { productId: el._id, price: el.price, quantity: 1,name:el.name,description:el.description,coverImage:el.coverImage,sellerEmail:el.seller.email, sellerId:el.seller._id };
        }));
    },[cartData])
    return (
        <div className="lg:w-[65%] min-h-1/2 max-h-full lg:h-full relative overflow-auto rounded-md shadow-sm py-5 bg-white" onClick={handleDeleteCartItem}>
            <header className="lg:text-4xl text-2xl pl-5 flex items-center gap-3"><FaCartShopping /> Cart {cartData?.totalCartItems}</header>
            {!cartData?.cartItems?.length && isFetching  && <Spinner />}
            <hr className="my-3 text-gray-300"/>
            {optimisticCartItems?.length < 1 && !isFetching && <h1 className="lg:text-2xl absolute top-1/2 left-1/2 -translate-1/2 text-center">Your cart is empty! <Link href='/app/browse' className=" text-blue-500 ">shop now</Link></h1>}
            {optimisticCartItems?.map(el => <CartItem isDeletingId={isDeletingId} key={el._id} id={el._id} image={el.coverImage} price={el.price} name={el.name} inStock={el.inStock}/>)}
        </div>
    )
}

export default CartContainer
