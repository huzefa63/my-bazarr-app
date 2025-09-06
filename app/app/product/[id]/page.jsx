import CommentSection from "@/app/_components/product_page/CommentSection";
import ProductDetailSection from "@/app/_components/product_page/ProductDetailSection"
import ProductImageSection from "@/app/_components/product_page/ProductImageSection"
import RatingStats from "@/app/_components/product_page/RatingStats"
import { cookies } from "next/headers";

async function Page({params}) {
  const searchParams = await params;
    let product;
      try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/getProductDetails/${searchParams.id}`,{
          cache:'no-store'
        })
        const resJson = await res.json();
        product = resJson?.product;
        console.log(product)
      }catch(err){
        console.log(err);
      }
    return (
      <div className="h-full w-full p-5">
        <div className="flex h-full w-full  p-3 ">
          <ProductImageSection coverImage={product.coverImage} images={product.images}/>
          <ProductDetailSection name={product?.name} email={product.seller?.email} ratingsAvg={product?.ratingsAvg} description={product?.description}price={product?.price}
          about={product.about} seller={product.seller}/>
        </div>
        <hr className="text-gray-300 my-5"/>
        <div className="flex flex-col gap-5 p-3 h-full pl-10">
          <div className="shadow-sm rounded-md p-5">
            <header className="text-4xl font-bold ">Ratings & Reviews</header>
            <RatingStats />
          </div>
          <CommentSection />
        </div>
      </div>
    );
}

export default Page
