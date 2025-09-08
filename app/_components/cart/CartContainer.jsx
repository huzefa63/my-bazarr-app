'use client';
import { FaCartShopping } from "react-icons/fa6"
import CartItem from "./CartItem"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";
import { useCartContext } from "./CartProvider";
import { useEffect } from "react";
import { deleteCartItem, getCartItems } from "@/actions/cart";
import Spinner from "../Spinner";

function CartContainer() {
    const {data:cartData,refetch,isFetching} = useQuery({
        queryKey:['cart'],
        queryFn:getCartItems,
        refetchOnMount:false,
        staleTime:1000 * 60,
    })
    const {setItems,setIsDeletingId,isDeletingId} = useCartContext();
    async function handleDeleteCartItem(e){
        if(!e.target.classList.contains('delete')) return;
        const parent = e.target.closest('.parent');
        const {id} = parent.dataset;
        setIsDeletingId(id);
        try { 
            const res = await deleteCartItem(id);
            console.log(res)
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
        <div className="w-[65%] relative overflow-auto rounded-md shadow-sm py-5 bg-white" onClick={handleDeleteCartItem}>
            <header className="text-4xl pl-5 flex items-center gap-3"><FaCartShopping /> Cart {cartData?.totalCartItems}</header>
            {isFetching && cartData?.length < 1 && <Spinner />}
            <hr className="my-3 text-gray-300"/>
            {cartData?.cartItems?.map(el => <CartItem isDeletingId={isDeletingId} key={el._id} id={el._id} image={el.coverImage} price={el.price} name={el.name} inStock={el.inStock}/>)}
        </div>
    )
}

export default CartContainer
