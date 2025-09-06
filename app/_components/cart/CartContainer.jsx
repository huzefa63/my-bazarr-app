'use client';
import { FaCartShopping } from "react-icons/fa6"
import CartItem from "./CartItem"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";
import { useCartContext } from "./CartProvider";
import { useEffect } from "react";

function CartContainer({data}) {
    const {data:cartData,refetch,isFetching} = useQuery({
        queryKey:['cart'],
        queryFn:async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/cart/getCartItems`,{withCredentials:true})
            return res.data;
        },
        initialData:data
    })
    const {setItems,items} = useCartContext();
    useEffect(() => {
        setItems(cartData.cartItems);
        console.log(cartData)
    } , [cartData])
    // useEffect(() => {
    //     console.log(items)
    // } , [items])
    async function handleDeleteCartItem(e){
        if(!e.target.classList.contains('delete')) return;
        console.log('hello')
        const parent = e.target.closest('.parent');
        const {id} = parent.dataset;
        console.log(id)
        try { 
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_URL}/cart/deleteItem/${id}`,{withCredentials:true});
            refetch();
            console.log(id)
            console.log(res);
          } catch (err) {
            console.log(err);
          }
    }
    useEffect(() => {
        setItems(el => cartData.cartItems.map(el => {
            return { productId: el._id, price: el.price, quantity: 1 };
        }));
    },[cartData])
    return (
        <div className="w-[65%] relative overflow-auto rounded-md shadow-sm py-5 bg-white" onClick={handleDeleteCartItem}>
            <header className="text-4xl pl-5 flex items-center gap-3"><FaCartShopping /> Cart {cartData?.totalCartItems}</header>
            {isFetching && cartData.cartItems?.length < 1 &&  <ImSpinner2 className="animate-spin text-2xl absolute top-1/2 left-1/2 -translate-1/2"/>}
            <hr className="my-3 text-gray-300"/>
            {cartData.cartItems?.map(el => <CartItem key={el._id} id={el._id} image={el.coverImage} price={el.price} name={el.name} inStock={el.inStock}/>)}
        </div>
    )
}

export default CartContainer
