import BackButton from "@/app/_components/BackButton";
import CommentSection from "@/app/_components/product_page/CommentSection";
import ProductDetailSection from "@/app/_components/product_page/ProductDetailSection"
import ProductImageSection from "@/app/_components/product_page/ProductImageSection"
import RatingStats from "@/app/_components/product_page/RatingStats"


async function Page({params}) {
  const searchParams = await params;
    let product;
    let commentCounts;
    let avgRating;
      try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/getProductDetails/${searchParams.id}`,{
          cache:'no-store'
        })
        const resJson = await res.json();
        product = resJson?.product;
        commentCounts = resJson?.commentsCount;
        avgRating = resJson.avgRating

        console.log(product)
      }catch(err){
        console.log(err);
      }
    return (
      <div className="relative h-full w-full p-5">
        <BackButton />
        <div className="flex h-full w-full  p-3 ">
          <ProductImageSection
            coverImage={product.coverImage}
            images={product.images}
          />
          <ProductDetailSection
          avgRating={avgRating}
          commentsCount={commentCounts}
            coverImage={product.coverImage}
            product={product}
            id={searchParams.id}
            name={product?.name}
            email={product.seller?.email}
            ratingsAvg={product?.ratingsAvg}
            description={product?.description}
            price={product?.price}
            about={product.about}
            seller={product.seller}
          />
        </div>
        <hr className="text-gray-300 my-5" />
        <div className="flex flex-col gap-5 p-3 h-full pl-10">
          <div className="shadow-sm rounded-md p-5">
            <header className="text-4xl font-bold ">Ratings</header>
            <RatingStats id={searchParams.id} avgRating={avgRating} commentCounts={commentCounts}/>
          </div>
          <div>
            <h1 className="text-4xl p-5 font-bold">Reviews</h1>
            <CommentSection id={searchParams.id}/>
          </div>
        </div>
      </div>
    );
}

export default Page
